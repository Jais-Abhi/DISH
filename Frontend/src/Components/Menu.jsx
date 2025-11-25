import { useEffect, useRef, useState } from "react";

const menuCategories = [
  {
    id: "starters",
    title: "Starters & Appetizers",
    description:
      "Delightful bites to start your culinary journey. Crispy, flavorful, and perfect for sharing.",
    dishes: [
      { name: "Paneer Tikka", description: "Grilled cottage cheese marinated in spices.", priceUSD: 5, priceINR: 450 },
      { name: "Spring Rolls", description: "Vegetable rolls served with sweet chili sauce.", priceUSD: 4, priceINR: 360 },
      { name: "Garlic Bread", description: "Crispy bread topped with garlic butter.", priceUSD: 3, priceINR: 270 },
      { name: "Soup of the Day", description: "Chef's special soup, fresh and comforting.", priceUSD: 4, priceINR: 360 },
    ],
    bg: "bg-[#c0ecbf]",
  },
  {
    id: "main-course",
    title: "Main Course",
    description:
      "Hearty dishes with authentic flavors. Perfectly cooked to satisfy your hunger and cravings.",
    dishes: [
      { name: "Butter Chicken", description: "Tender chicken in a creamy tomato sauce.", priceUSD: 12, priceINR: 1080 },
      { name: "Veg Biryani", description: "Aromatic basmati rice with fresh vegetables and spices.", priceUSD: 10, priceINR: 900 },
      { name: "Grilled Salmon", description: "Salmon fillet grilled to perfection with herbs.", priceUSD: 15, priceINR: 1350 },
      { name: "Pasta Alfredo", description: "Creamy pasta tossed with parmesan and garlic.", priceUSD: 11, priceINR: 990 },
      { name: "Paneer Butter Masala", description: "Paneer cubes in rich buttery gravy.", priceUSD: 10, priceINR: 900 },
    ],
    bg: "bg-[#fae0be]",
  },
  {
    id: "desserts",
    title: "Desserts & Sweet Treats",
    description:
      "End your meal on a sweet note with our decadent desserts and classic favorites.",
    dishes: [
      { name: "Chocolate Lava Cake", description: "Molten chocolate cake served warm.", priceUSD: 6, priceINR: 540 },
      { name: "Gulab Jamun", description: "Soft milk dumplings soaked in sugar syrup.", priceUSD: 3, priceINR: 270 },
      { name: "Ice Cream Sundae", description: "Vanilla ice cream with chocolate and nuts.", priceUSD: 5, priceINR: 450 },
      { name: "Tiramisu", description: "Coffee-flavored Italian dessert with mascarpone.", priceUSD: 7, priceINR: 630 },
    ],
    bg: "bg-[#fafabf]",
  },
  {
    id: "beverages",
    title: "Beverages & Drinks",
    description:
      "Refresh yourself with our handcrafted beverages, from mocktails to aromatic teas.",
    dishes: [
      { name: "Lemon Mojito", description: "Refreshing lime and mint mocktail.", priceUSD: 4, priceINR: 360 },
      { name: "Cold Coffee", description: "Chilled coffee topped with cream.", priceUSD: 3, priceINR: 270 },
      { name: "Masala Chai", description: "Spiced Indian tea brewed to perfection.", priceUSD: 2, priceINR: 180 },
      { name: "Fresh Juices", description: "Seasonal fruits blended for freshness.", priceUSD: 3, priceINR: 270 },
      { name: "Smoothies", description: "Creamy fruit smoothies for a healthy boost.", priceUSD: 4, priceINR: 360 },
    ],
    bg: "bg-[#f6c2f4]",
  },
];

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      for (let category of menuCategories) {
        const section = sectionRefs.current[category.id];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActive(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 mb-8 text-center py-12 mt-16">
        <div className="inline-flex items-center mb-2 bg-[#e86294] rounded-2xl pr-4 text-sm font-semibold text-white gap-2">
          <span className="inline-flex items-center">
            <span className="w-8 h-8 mr-1 bg-[#101b36] rounded-full flex justify-center items-center">
              <i className="fa-regular fa-utensils"></i>
            </span>
          </span>
          Dishora Menu
        </div>
        <h2 className="text-3xl md:text-5xl brico tracking-tight text-gray-200">
          Explore our <span className="text-[#e86294]">delicious</span> dishes
        </h2>
      </div>

      <section className=" flex flex-col md:flex-row max-w-7xl mx-auto px-4 gap-10 py-10">
        {/* Left Sticky Nav */}
        <aside className="w-full md:w-1/4 sticky top-28 h-fit text-xl brico tracking-tight space-y-2 hidden md:block">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              className={`cursor-pointer px-2 py-1 rounded-md transition-all ${
                active === category.id
                  ? "font-medium text-white"
                  : "text-gray-400"
              }`}
              onClick={() => {
                sectionRefs.current[category.id]?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {active === category.id ? "→ " : ""}
              {category.title}
            </div>
          ))}
        </aside>

        {/* Right Scrollable Menu */}
        <div className="w-full md:w-3/4 space-y-16">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              ref={(el) => (sectionRefs.current[category.id] = el)}
              className={`rounded-2xl p-10 text-white ${category.bg}`}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2 brico tracking-tight text-[#101b36]">
                {category.title}
              </h3>
              <p className="text-gray-800 mt-5">{category.description}</p>
              <div className="flex flex-col gap-4 mt-10">
                {category.dishes.map((dish, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row justify-between border-b border-gray-300 pb-3"
                  >
                    <div className="flex flex-col md:flex-row md:gap-4">
                      <span className="text-lg font-medium text-[#101b36]">
                        {dish.name}
                      </span>
                      <span className="text-gray-700">{dish.description}</span>
                    </div>
                    <div className="mt-2 md:mt-0 text-gray-900 font-semibold flex flex-col md:flex-row md:gap-4">
                      <span>${dish.priceUSD.toFixed(2)}</span>
                      <span>₹{dish.priceINR}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
