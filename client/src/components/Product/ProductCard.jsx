import React from 'react'

function ProductCard(product) {

  
  return (
    <div className="group relative flex w-full max-w-[280px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg sm:max-w-[300px] lg:max-w-[320px]">
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <img 
          src={product.thumbnail} 
          alt={product.title || "Product"} 
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" 
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="space-y-2">
          <h3 className="line-clamp-2 text-sm font-medium text-gray-900 sm:text-base">
            {product.title}
          </h3>
          
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-gray-900 sm:text-xl">
              ${product.price}
            </p>
            {product.rating && (
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <span className="text-sm text-gray-600">{product.rating}</span>
              </div>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-4 w-full rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:text-base">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
export default ProductCard;
