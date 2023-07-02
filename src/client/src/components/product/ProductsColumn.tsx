import React from "react";
import SmallProductCard from "../home/SmallProductCard";
import LargeProductCard from "../home/LargeProductCard";


interface Props {
    categoryTitle: string,
    productsList: any,
}

export default function ProductsColumn( {productsList, categoryTitle}: Props ) {
    return (
        <div className="">
            <div className="py-48 lg:max-w-7xl sm:py-8 lg:py-16 lg:px-8">
            <div className="px-4 items-center justify-center mx-40 sm:px-6 lg:px-0">
                <h2 id="trending-heading" className="text-center text-4xl font-extrabold tracking-tight text-gray-100">
                    {categoryTitle}
                </h2>
            </div>

            <div className="mt-8 flex justify-center group-hover:opacity-75">
                <div className="w-full max-w-screen-lg">
                {productsList.map((product: any) => (
                    <div key={product.id} className="my-4">
                        <LargeProductCard productProp={product} />
                        <div className="flex justify-center mt-4 mb-4">
                            <button className="bg-gray-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mr-2">
                                Add to cart
                            </button>
                            <button className="bg-gray-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-2">
                                Place a bid
                            </button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>

    );
};
