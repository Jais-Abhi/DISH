import React from "react";

const Specials = () => {
const specialDishes = [
  {
    title: "Chef’s Signature Platter",
    icon: "🍽️",
    image:
      "https://plus.unsplash.com/premium_photo-1731948695958-9077da0eccc2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    description:
      "A luxurious medley of flavors — from spicy kebabs to buttery naan — curated by our head chef for the ultimate Dishora experience.",
  },
  {
    title: "The Royal Feast Thali",
    icon: "👑",
    image:
      "https://images.unsplash.com/photo-1672477179695-7276b0602fa9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1026",
    description:
      "An exquisite traditional thali offering a taste of every region — perfectly balanced spices, fresh ingredients, and timeless recipes.",
  },
  {
    title: "Celebration Dessert Tower",
    icon: "🍰",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    description:
      "Layers of sweetness — from molten chocolate to creamy cheesecakes — handcrafted to make your celebrations even more special.",
  },
  {
    title: "Truffle Mushroom Risotto",
    icon: "🍄",
    image:
      "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80",
    description:
      "Creamy Italian rice cooked to perfection with earthy truffles and wild mushrooms — elegance served in every bite.",
  },
  {
    title: "Spiced Mango Mocktail",
    icon: "🍹",
    image:
      "https://plus.unsplash.com/premium_photo-1695055513638-92886435c7eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    description:
      "A tropical blend of fresh mango, mint, and a hint of spice — refreshingly bold and uniquely Dishora.",
  },
  {
    title: "Paneer Makhani Fondue",
    image:
      "https://images.unsplash.com/photo-1588798571170-5e9df66a6c1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
    description:
      "Fusion at its finest — creamy paneer makhani served as a dip with crisp tandoori naan bites for sharing and savoring.",
  }
];


  return (
    <section className="py-16 bg-gradient-to-br from-[rgb(90,116,136)] via-[#293b4b] to-[#0f172a] text-white pt-28 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e86294] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Dishora Specials
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Crafted with <span className="text-[#e86294]">Passion</span> & Served with <span className="text-[#f4a261]">Pride</span>
          </h2>
          <p className="text-lg text-gray-300 italic">
            Our chef’s handpicked specials that redefine indulgence.
          </p>
        </div>

        {/* Specials Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {specialDishes.map((dish, index) => (
            <div
              key={index}
              className=" bg-[#1c2541] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-56">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-[#f4a261]">
                  {dish.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {dish.description}
                </p>
                <button className="mt-6 bg-[#e86294] text-white px-5 py-2 rounded-full font-medium hover:bg-[#f28482] transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
