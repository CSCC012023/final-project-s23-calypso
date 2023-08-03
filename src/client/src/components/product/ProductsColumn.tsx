import React from "react";
import SmallProductCard from "../home/SmallProductCard";
import LargeProductCard from "../home/LargeProductCard";
import { formatCurrency } from "../../utils/formatCurrency";
import {useEffect, useState}  from "react";
import axios from "axios";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

type bidProduct = {
    id: number // Synonymous with the product id
    startingBid: number
    endDate: string
  }

    interface QueryParams {
        [key: string]: string[];
    }

export default function ProductsColumn( {categoryTitle, product}: any ) {
    const { getQuantity, addItem, removeItem } = useShoppingCart()
    const quantity = getQuantity(product.id);
    const navigate = useNavigate();
    const [bidProduct, setBidProduct] = useState<bidProduct | null>(null);
    const [pageError, setPageError] = useState<boolean>(false);

    const { id } = useParams();

    function getBidProduct(queryParams: QueryParams) {
        axios.get(`http://localhost:8080/api/v0/bid/bidProduct/${id}`, { params: queryParams })
          .then(response => {
            if (response.status === 200) {
              const data = response.data;
              setBidProduct(data);
            } else {
              setPageError(true);
            }
          })
          .catch(err => setPageError(true));
      }

    // Fetch bid product data
    useEffect(() => {
        if (!product) {
        return;
        }
        const queryParams: QueryParams = {};
        getBidProduct(queryParams);
    }, [product]);

    const cartButtonContent = bidProduct ? "Not Available" : quantity === 0 ? "+ Add to cart" : "- Remove from cart";
    const cartButtonClickHandler = bidProduct ? undefined : () => (quantity === 0 ? addItem(product.id, product.name, product.artist, product.style, product.price, product.href, product.imageSrc, product.imageAlt, product.date, product.rarity, product.medium, product.material) : removeItem(product.id));

    return (
        <div className="flex space-x-12 min-w-full mr-16 items-center justify-center px-16">
            <div className="lg:max-w-7xl lg:py-8 lg:pl-24 lg:pr-16">
                <div className="mt-8 flex">
                    <div className="w-full max-w-screen-lg">
                    <div key={product.id} className="my-4">
                        <h2 id="trending-heading" className="text-center text-3xl font-extrabold tracking-tight text-gray-100 lg:pb-8 min-w-full">
                            {categoryTitle}
                        </h2>
                        <LargeProductCard imgUrl={product.imageSrc} />
                    </div>
                    </div>
                </div>
            </div>
            <div className="pt-4 sm:mt-4 lg:mt-24 space-y-8 lg:pr-16 xl:container">
                <p>
                    <div key={product.id} className="">
                        <h3 className=" mt-1 font-bold text-white text-4xl">
                            <p>
                                <span className="absolute inset-0" />
                                {product.name}
                            </p>
                        </h3>
                        <p className="text-base text-gray-200">{product.artist}</p>
                        <p className="text-sm text-gray-400 italic">{product.style}</p>
                        <p className="mt-1 text-gray-100">
                            {formatCurrency(product.price)}
                        </p>
                    </div>
                </p>
                <div className="pt-4 sm:pb-80 lg:pb-96 bg-gray-700 opacity-75 rounded-xl text-white lg:px-8">
                    <p>Description</p>
                </div>
                
                <div className="flex mt-4 mb-4 space-x-60 justify-center container z-10">
                    {quantity === 0 ? (
                        
                    <button
                        className={`bg-gray-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mr-2 ${bidProduct ? "cursor-not-allowed opacity-50" : ""}`}
                        onClick={cartButtonClickHandler}
                        disabled={!!bidProduct}
                      >
                        {cartButtonContent}
                      </button>
                    ) : (
                    <button className="bg-gray-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => removeItem(product.id)}>
                        - Remove from cart
                    </button> 
                    )}
                    <button className="bg-gray-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => navigate('/bidding/' + product.id)}>
                        Place a bid
                    </button>
                </div>
            </div>
        </div>

    );
};
