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

export default function LargeProductCard( { productProp }: Props ){
    return (
        <div className="group relative">
            {/* Product Image */}
            <div className="w-full bg-gray-200 rounded-md overflow-hidden max-h-full">
                <img
                    src={productProp.imageSrc}
                    alt={productProp.imageAlt}
                    className="w-full h-full object-center object-cover"
                />
            </div>

            {/* Description and Pricing */}
            {/* <div className="mt-4 text-center">
                <h3 className=" mt-1 font-semibold text-white text-lg">
                    <a href={productProp.href}>
                        <span className="absolute inset-0" />
                        {productProp.name}
                    </a>
                </h3>
                <p className="text-base text-gray-200">{productProp.artist}</p>
                <p className="text-sm text-gray-400 italic">{productProp.style}</p>
                <p className="mt-1 text-gray-100">{productProp.price}</p>
            </div> */}
        </div>
    );
};
