import React from "react";

interface Props {
    categoryTitle: string,
    product: any,
    id: number
    name: string
    price: number
    artist: string
    imgUrl: string
}

export default function LargeProductCard( { imgUrl }: any ){
    return (
        <div className="group relative">
            {/* Product Image */}
            <div className="w-full bg-gray-200 rounded-md overflow-hidden max-h-full">
                <img
                    src={imgUrl}
                    className="w-full h-full object-center object-cover"
                />
            </div>
        </div>
    );
};
