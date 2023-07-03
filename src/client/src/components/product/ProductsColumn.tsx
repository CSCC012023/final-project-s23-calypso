import React from "react";
import SmallProductCard from "../home/SmallProductCard";
import LargeProductCard from "../home/LargeProductCard";


interface Props {
    categoryTitle: string,
    productsList: any,
}

export default function ProductsColumn( {productsList, categoryTitle}: Props ) {
    return (
        <div className="flex space-x-12 min-w-full mr-16">
            <div className="pt-8 lg:max-w-7xl sm:py-8 lg:py-8 lg:pl-44 lg:pr-16">
                <div className="mt-8 flex justify-center group-hover:opacity-75">
                    <div className="w-full max-w-screen-lg">
                    {productsList.map((product: any) => (
                        <div key={product.id} className="my-4">
                            <LargeProductCard productProp={product} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className="pt-24 space-y-8 relative">
                <h2 id="trending-heading" className="text-center text-5xl font-extrabold tracking-tight text-gray-100 lg:pb-8 min-w-full">
                    {categoryTitle}
                </h2>
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
                
                <div className="pt-4 sm:pb-80 lg:pb-96 bg-gray-700 opacity-75 rounded-xl text-white">
                    <p>Description</p>
                </div>

                <div className="flex justify-center mt-4 mb-4 space-x-40">
                    <button className="bg-gray-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mr-2">
                        Add to cart
                    </button>
                    <button className="bg-gray-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-2">
                        Place a bid
                    </button>
                </div>
            </div>
        </div>

    );
};
