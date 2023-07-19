import React from "react";
import SmallProductCard from "../home/SmallProductCard";
import LargeProductCard from "../home/LargeProductCard";

import { useShoppingCart } from "../../context/ShoppingCartContext";


interface Props {
    categoryTitle: string,
    productsList: any,
    id: number
    name: string
    price: number
    imgUrl: string
}

export default function ProductsColumn( {productsList, categoryTitle, id, name, price, imgUrl}: Props ) {
    const { getQuantity, addItem, removeItem } = useShoppingCart()
    const quantity = getQuantity(id);
    return (
        <div className="flex space-x-12 min-w-full mr-16 items-center justify-center px-16">
            <div className="lg:max-w-7xl lg:py-8 lg:pl-24 lg:pr-16">
                <div className="mt-8 flex">
                    <div className="w-full max-w-screen-lg">
                    {productsList.map((product: any) => (
                        <div key={product.id} className="my-4">
                            <h2 id="trending-heading" className="text-center text-3xl font-extrabold tracking-tight text-gray-100 lg:pb-8 min-w-full">
                                {categoryTitle}
                            </h2>
                            <LargeProductCard productProp={product} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className="pt-4 sm:mt-4 lg:mt-24 space-y-8 lg:pr-16 xl:container">
                <p>
                    {productsList.map((product2: any) => (
                        <div key={product2.id} className="">
                            <h3 className=" mt-1 font-bold text-white text-4xl">
                                <p>
                                    <span className="absolute inset-0" />
                                    {product2.name}
                                </p>
                            </h3>
                            <p className="text-base text-gray-200">{product2.artist}</p>
                            <p className="text-sm text-gray-400 italic">{product2.style}</p>
                            <p className="mt-1 text-gray-100">{product2.price}</p>
                        </div>
                    ))}
                </p>
                <div className="pt-4 sm:pb-80 lg:pb-96 bg-gray-700 opacity-75 rounded-xl text-white lg:px-8">
                    <p>Description</p>
                </div>
                
                <div className="flex mt-4 mb-4 space-x-60 justify-center container z-10">
                    {quantity === 0 ? (
                        
                    <button className="bg-gray-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => addItem(id)}>
                        + Add to cart
                    </button> 
                    ) : (
                    <button className="bg-gray-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => removeItem(id)}>
                        Remove from cart
                    </button> 
                    )}
                    <button className="bg-gray-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-2">
                        Place a bid
                    </button>
                </div>
            </div>
        </div>

    );
};
