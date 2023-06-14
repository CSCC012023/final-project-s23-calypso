import React from "react";
import SmallProductCard from "./SmallProductCard";


export default function ProductsRow(props: any) {
    const productsProp = props.productsList;
    const categoryTitle = props.categoryTitle;
    return (
        <div className="py-24 lg:max-w-7xl lg:mx-auto sm:py-8 lg:py-24 lg:px-8">
            <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
                <h2 id="trending-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                    {categoryTitle}
                </h2>
                <a href="#" className="hidden sm:block text-sm font-semibold text-sky-600 hover:text-sky-500">
                    See more<span aria-hidden="true"> &rarr;</span>
                </a>
            </div>

            <div className="mt-8 relative">
                <div className="relative w-full overflow-x-auto">
                    <ul
                        role="list"
                        className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
                    >
                        {/* Product */}
                        {productsProp.map((product:any) => (
                            <li key={product.id} className="w-64 inline-flex flex-col text-center lg:w-auto">
                                <SmallProductCard productProp={product} />
                            </li>
                        ))}

                    </ul>
                </div>
            </div>

            <div className="mt-12 px-4 sm:hidden">
                <a href="#" className="text-sm font-semibold text-sky-600 hover:text-sky-500">
                    See more<span aria-hidden="true"> &rarr;</span>
                </a>
            </div>
        </div>
    );
};
