import React, { useState } from 'react';
import { Menu, X, Home, ChevronDown } from 'lucide-react';

interface MenuItem {
  name: string;
  subcategories: {
    name: string;
    pages: string[];
  }[];
}

const menuItems: MenuItem[] = [
  {
    name: 'Products',
    subcategories: [
      {
        name: 'Electronics',
        pages: ['Smartphones', 'Laptops', 'Tablets', 'Accessories']
      },
      {
        name: 'Home & Living',
        pages: ['Furniture', 'Decor', 'Kitchenware', 'Bedding']
      },
      {
        name: 'Fashion',
        pages: ['Men\'s Clothing', 'Women\'s Clothing', 'Kids\' Clothing', 'Shoes']
      }
    ]
  },
  {
    name: 'Services',
    subcategories: [
      {
        name: 'Digital Solutions',
        pages: ['Web Development', 'Mobile Apps', 'Cloud Services', 'AI & Machine Learning']
      },
      {
        name: 'Consulting',
        pages: ['Business Strategy', 'Financial Planning', 'Marketing', 'HR Solutions']
      },
      {
        name: 'Support',
        pages: ['Technical Support', 'Customer Service', 'Training', 'Maintenance']
      }
    ]
  },
  {
    name: 'About',
    subcategories: [
      {
        name: 'Company',
        pages: ['Our Story', 'Team', 'Careers', 'Press Releases']
      },
      {
        name: 'Community',
        pages: ['Blog', 'Events', 'Partnerships', 'Sustainability']
      }
    ]
  }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuHover = (menuName: string) => {
    setActiveMenu(menuName);
    setActiveSubcategory(null);
  };

  const handleSubcategoryClick = (subcategoryName: string) => {
    setActiveSubcategory(subcategoryName);
  };

  const closeMegaMenu = () => {
    setActiveMenu(null);
    setActiveSubcategory(null);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <Home className="h-8 w-8" />
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {menuItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => handleMenuHover(item.name)}
                  >
                    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 flex items-center">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-width mega menu */}
      {activeMenu && (
        <div className="absolute left-0 w-full bg-white text-gray-800 shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
            <button
              onClick={closeMegaMenu}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex">
              <div className="w-1/4 flex flex-col space-y-2">
                {menuItems.find(item => item.name === activeMenu)?.subcategories.map((subcategory) => (
                  <button
                    key={subcategory.name}
                    className={`text-left px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 ${activeSubcategory === subcategory.name ? 'font-bold bg-gray-100' : ''}`}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                  >
                    {subcategory.name}
                  </button>
                ))}
              </div>
              <div className="w-3/4 pl-8">
                {activeSubcategory && (
                  <div className="grid grid-cols-3 gap-4">
                    {menuItems
                      .find(item => item.name === activeMenu)
                      ?.subcategories
                      .find(sub => sub.name === activeSubcategory)
                      ?.pages.map((page) => (
                        <a
                          key={page}
                          href="#"
                          className="text-sm hover:text-blue-600 p-2 rounded-md hover:bg-gray-100"
                        >
                          {page}
                        </a>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.name} className="space-y-2">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                  {item.name}
                </a>
                {item.subcategories.map((subcategory) => (
                  <div key={subcategory.name} className="pl-6 space-y-1">
                    <p className="text-sm font-semibold">{subcategory.name}</p>
                    {subcategory.pages.map((page) => (
                      <a key={page} href="#" className="block px-3 py-1 rounded-md text-sm hover:bg-blue-700">
                        {page}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;