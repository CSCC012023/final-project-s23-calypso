import React from "react"
import SmallProductCard from "../home/SmallProductCard"


interface Props {
    productsList: any,
}

export default function ProductList( {productsList}: Props ) {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 overflow-hidden sm:py-24 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">

                    {/* Product */}
                    {productsList.map((product: any) => (
                        <li key={product.id} className="w-64 inline-flex flex-col text-center lg:w-auto">
                            <SmallProductCard productProp={product} />
                        </li>
                    ))}

                </div>
            </div>
        </div>
    )
}
