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
        </div>
    );
};
