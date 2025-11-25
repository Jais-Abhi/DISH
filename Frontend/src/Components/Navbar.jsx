import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation(); 
  const navigate = useNavigate()
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Specials', path: '/specials' },
    { name: 'Reservation', path: '/reservation' },

  ];

  return (  
    <nav className=" mx-auto w-full m-2  z-50 
    fixed top-0">
      <div className="max-w-7xl md:w-[85%] bg-white/20  backdrop-blur-[10rem] border-2 border-white/30 md:rounded-3xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center h-20 relative">
          
          {/* Logo */}
          <div className="flex-shrink-0 " 
          onClick={()=>{
            navigate("/")
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsOpen(false)

          }}
          >
            
            <a 
              className="group flex items-center space-x-2"
            >
              <span className="text-3xl font-bold text-white dm-sans cursor-pointer">
                Dishora
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex w-full items-center space-x-1">
            <div className='w-full flex justify-center text-[1rem]' >
            {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                <a
                key={link.name}
                onClick={()=>{
                  navigate(`${link.path}`)
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={` cursor-pointer relative px-4 py-2 rounded-xl font-semibold transition-all duration-300 group 
                  text-black text-[1rem]
                 ${ isActive
                  ? ' border-b-4 border-blue-600' // active link style
                  : ' hover:bg-blue-600 hover:text-gray-200'}`}
                >
                {link.name}
               
              </a>
              )
            
            })}
            </div>
            
            {/* CTA Button */}
            <div className=" w-[15rem] pl-6 border-l border-gray-200">
              <a
                className=" cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-xl font-medium text-sm shadow-lg hover:shadow-blue-200 transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700"
              >Book Now
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center absolute right-0">
            <button 
              onClick={()=>toggleMenu()} 
              className="p-2 rounded-xl bg-orange-50 text-blue-600 hover:bg-blue-100 transition-all duration-300"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="bg-gray-600  backdrop-blur-[12rem]  border-t border-blue-100/50 px-4 py-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
            <a
            key={link.name}
              onClick={()=>{ 
                navigate(`${link.path}`)
                window.scrollTo({ top: 0, behavior: 'smooth' });
                toggleMenu()
                }}
              className={` cursor-pointer block px-4 py-3 text-base font-medium transition-all duration-300 border-4 border-transparent
                ${ isActive
                  ? 'text-white border-b-blue-500 ' // active link style
                  : 'text-white hover:bg-blue-500'}`}
            >
              {link.name}
            </a>
            )
        })}
          
          {/* Mobile CTA */}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <a
          
              onClick={()=>{
                navigate("/reservation")
                toggleMenu()
              }}
              className="block w-full text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-blue-200 transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;