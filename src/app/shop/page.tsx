import React from 'react'

const ShopNow = () => {
  const shoesData = [
    { id: 1, name: "Urban Core Sneakers", price: 6000, image: '/pic1.png' },
    { id: 2, name: "Athletic Kicks", price: 2000, image: '/pic2.png' },
    { id: 3, name: "Casual Sneakers", price: 4000, image: '/pic3.png' },
    { id: 4, name: "Trendy Sneakers", price: 9000, image: '/pic4.png' },
    { id: 5, name: "Workout Shoes", price: 8000, image: '/pic5.png' },
    { id: 6, name: "Retro Sneakers", price: 3000, image: '/pic6.png' },
  ]

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {shoesData.map((shoe) => (
          <div
            key={shoe.id}
            className="shoes-card bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={shoe.image}
              alt={shoe.name}
              className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-110"
            />
            <h3 className="mt-4 text-lg font-semibold">{shoe.name}</h3>
            <div className="price text-xl font-bold text-[#05447e] mt-2">${shoe.price}</div>
            <button className="mt-4 px-6 py-2 bg-[#05447e] text-white rounded-lg hover:bg-[#337ccf] transition-all duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShopNow;
