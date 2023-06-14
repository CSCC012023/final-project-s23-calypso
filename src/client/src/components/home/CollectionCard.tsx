import React from "react";

export default function CollectionCard(props: any) {
    const collectionProp = props.collectionProp;
    return (
        <div key={collectionProp.name} className="group relative">
            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                    src={collectionProp.imageSrc}
                    alt={collectionProp.imageAlt}
                    className="w-full h-full object-center object-cover"
                />
            </div>
            <h3 className="mt-6 text-lg text-white font-bold">
                <a href={collectionProp.href}>
                    <span className="absolute inset-0" />
                    {collectionProp.name}
                </a>
            </h3>
            <p className="text-sm font-semibold text-blue-300">{collectionProp.description}</p>
        </div>
    );
};   
