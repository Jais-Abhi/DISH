import React from "react";

const Footer = () => {
  const scrollToServices = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#services";
    }
  };

  return (
    <div className=" w-full bottom-0 bg-[rgb(27,31,45)] text-gray-100 px-4 md:px-8 lg:px-16 pt-16 pb-8 brico -tracking-wider">
      <footer className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Section */}
        <div>
          <div className="text-2xl font-bold underline pb-4" >Dishora</div>
          <p className="text-md leading-relaxed mb-6">
           Dishora is a contemporary restaurant known for its wide variety of flavorful dishes, crafted with fresh, high-quality ingredients. It offers a cozy, inviting ambiance, attentive service, and beautifully presented meals, making it a perfect destination for casual dining and special occasions.
          </p>
          <form className="flex items-center border border-[#b08968] rounded-lg overflow-hidden w-full max-w-sm bg-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-gray-700 outline-none"
            />
            <button
              type="submit"
              className="bg-[rgb(27,31,45)] text-white px-3 hover:bg-[#9c6644] transition rounded-lg mr-2"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-100 mb-4">Explore</h3>
          <ul className="space-y-3 text-md">
            <li>
              <a href="/" className="hover:text-gray-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-gray-400 transition">
                Menu
              </a>
            </li>
            <li>
              <a href="/specials" className="hover:text-gray-400 transition">
                Specials
              </a>
            </li>
            <li>
              <a href="/reservation" className="hover:textgray-400 transition">
                Reservation
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">Contact</h3>
          <p className="text-md">dishora Studio</p>
          <p className="text-md">mohanlalganj, Lucknow City, India</p>
          <p className="text-md mt-2">
            Email: <span className="text-gray-100 font-semibold">abhijaiswal7479@gmail.com</span>
          </p>
          <p className="text-md">Phone: +91 7479638558</p>

          <div className="flex space-x-4 mt-6 text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:gray-400 transition">
              <i className="fab fa-facebook-f w-5 h-5"></i> Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:gray-400 transition">
              <i className="fab fa-instagram w-5 h-5"></i> Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition">
              <i className="fab fa-twitter w-5 h-5"></i> Twitter
            </a>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-[#b08968] pt-4 text-center text-md text-gray-100">
        © {new Date().getFullYear()} dishora . All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
