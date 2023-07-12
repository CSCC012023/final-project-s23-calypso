import React from 'react'
import { useState } from 'react'

import ProductCard from './ProductCard'
import AddProductPopup from './AddProductPopup'

interface Props {
  products: {
    id: number,
    name: string,
    artist: string,
    style: string,
    price: number,
    href: string,
    imageSrc: string,
    imageAlt: string,
  }[],
  updateProducts: Function,
  isLoggedIn: boolean
}

function ProductsList({ products, updateProducts, isLoggedIn }: Props) {
  const [productEditMode, setProductEditMode] = useState(false);
  const [addProductIsOpen, setAddProductIsOpen] = useState(false);

  function handleProductDelete(id: number) {
    const newProducts = products.filter((product: any) => product.id !== id);
    updateProducts(newProducts);
  }

  function handleAddClick(name: string, artist: string, style: string, price: number, image: string) {
    const newProducts = [{
        id: products.length + 1,
        name: name,
        artist: artist,
        style: style,
        price: price,
        href: "#",
        imageSrc: image,
        imageAlt: name.toUpperCase() + " - " + artist.toUpperCase()
    }, ...products];
    updateProducts(newProducts);
    setAddProductIsOpen(false);
  }

  return (
    <div className="flex flex-col space-y-10 relative">
      {addProductIsOpen ? <AddProductPopup handleAddClick={handleAddClick} handleCancelClick={() => setAddProductIsOpen(false)} /> : null}
      <div className="flex flex-row justify-between">
        <p className="font-sans text-2xl font-bold text-white">Products For Sale</p>
        {isLoggedIn ? (
          <button className="flex h-10 w-[7.5rem] text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-800 rounded-full justify-center items-center font-semibold text-lg"
          onClick={() => setProductEditMode(!productEditMode)}>
          {productEditMode ? "Done" : "Edit"}
        </button>
        ) : null}
      </div>
      {productEditMode ? (
        <button className="flex h-32 w-full border-2 border-dashed border-green-500 text-green-500 rounded-lg items-center justify-center space-x-3 hover:bg-gray-800 hover:border-green-400 hover:text-green-400 active:bg-gray-900"
          onClick={() => { setAddProductIsOpen(true) }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <p className="font-semibold text-2xl">Add new Product</p>
        </button>
      ) : null}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} handleDeleteClick={() => handleProductDelete(product.id)} onEditMode={productEditMode} />
      ))}
    </div>
  );
}

export default ProductsList;
