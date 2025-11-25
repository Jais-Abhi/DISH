import {
  UtensilsCrossed,
  HeartHandshake,
  Flame,
  Clock,
  Users,
  Leaf,
} from "lucide-react";

export default function AboutDishora() {
  const features = [
    {
      title: "Authentic Flavors",
      desc: "Every dish at Dishora is crafted with rich, traditional recipes that bring out true Indian taste — fresh, aromatic, and unforgettable.",
      icon: <Flame className="w-16 h-16 text-yellow-500" strokeWidth={1.25} />,
    },
    {
      title: "Warm Hospitality",
      desc: "We believe great food tastes better with great care — experience heartfelt service and a welcoming atmosphere.",
      icon: (
        <HeartHandshake
          className="w-16 h-16 text-pink-500"
          strokeWidth={1.25}
        />
      ),
    },
    {
      title: "Finest Ingredients",
      desc: "From farm-fresh vegetables to premium spices, we use only the best — ensuring taste that’s pure and healthy.",
      icon: <Leaf className="w-16 h-16 text-green-500" strokeWidth={1.25} />,
    },
    {
      title: "Cozy Ambience",
      desc: "Whether it’s a family dinner or a romantic evening, Dishora offers the perfect setting — elegant, peaceful, and comforting.",
      icon: <UtensilsCrossed className="w-16 h-16 text-blue-500" strokeWidth={1.25} />,
    },
    {
      title: "Family & Private Spaces",
      desc: "Separate sections for families, couples, and private celebrations make every dining experience personal and special.",
      icon: <Users className="w-16 h-16 text-purple-500" strokeWidth={1.25} />,
    },
    {
      title: "On-Time Service",
      desc: "Quick yet careful — we make sure every order reaches your table hot and delicious, without long waits.",
      icon: <Clock className="w-16 h-16 text-orange-500" strokeWidth={1.25} />,
    },
  ];

  return (
    <section className=" pt-28 bg-gradient-to-br from-[rgb(90,116,136)] via-[#293b4b] to-[#0f172a]
 text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          About <span className="text-yellow-400">Dishora</span> 🍴
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Welcome to <span className="text-yellow-400 font-semibold">Dishora</span> —
          where passion meets plate. From sizzling starters to royal feasts, we
          serve not just food, but moments of joy, warmth, and togetherness.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-slate-600 rounded-lg overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-r border-2 border-slate-600 p-6 md:p-8 flex flex-col items-center text-center hover:bg-slate-800 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-lg md:text-2xl font-semibold mb-2 text-yellow-300">
                {feature.title}
              </h4>
              <p className="text-sm md:text-base text-gray-300 font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
