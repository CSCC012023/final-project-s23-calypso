import React from "react";

interface Props {
    productProp: {
        id: number,
        name: string,
        artist: string,
        style: string,
        price: string,
        href: string,
        imageSrc: string,
        imageAlt: string,
    }
}

export default function SmallProductCard2( { productProp }: Props ){
    return (
        <div className="group relative">
            {/* Product Image */}
            <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                <img
                    src={productProp.imageSrc}
                    alt={productProp.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
            </div>

            {/* Description and Pricing */}
            <div className="mt-4 text-left">
                <h3 className="mt-1 font-semibold text-white text-lg">
                    <a href={productProp.href}>
                        <span className="absolute inset-0" />
                        {productProp.name}
                    </a>
                </h3>
                <p className="text-base text-gray-600">{productProp.artist}</p>
                <p className="text-sm text-gray-600 italic">{productProp.style}</p>
                <p className="mt-1 text-gray-900">{productProp.price}</p>
            </div>
        </div>
    );
};
