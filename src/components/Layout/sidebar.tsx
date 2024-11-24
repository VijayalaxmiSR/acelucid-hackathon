import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "/logo.png";
import "../../index.css";
import {
  Storage,
  ChevronRight,
  ChevronLeft,
  SupervisorAccount,
  Sync,
  Dashboard,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { GiProgression, GiMeal } from "react-icons/gi";

interface SidebarProps {
  setActiveMenu: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveMenu }) => {
  const [open, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!open);
  };

  const menuItems = [
    { label: "Dashboard", icon: <Dashboard />, link: "/dashboard" },
    { label: "Meal Planner", icon: <GiMeal />, link: "/meal-planner" },
    { label: "Ingredients Optimizer", icon: <Sync />, link: "/substitutions" },
    { label: "Dietians", icon: <SupervisorAccount />, link: "/dietians" },
    { label: "Progress", icon: <GiProgression />, link: "/progress" },
  ];

  // Update the active index based on the current route
  useEffect(() => {
    const currentPath = location.pathname;
    const activeItemIndex = menuItems.findIndex(
      (item) => item.link === currentPath
    );
    setActiveIndex(activeItemIndex);
    if (activeItemIndex !== -1) {
      setActiveMenu(menuItems[activeItemIndex].label);
    }
  }, [location.pathname]);

  const handleMenuClick = (index: number, link: string, label: string) => {
    setActiveIndex(index);
    setActiveMenu(label);
    navigate(link);
  };

  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } h-full bg-white pt-4 mt-6 transition-all duration-300`}
    >
      <div
        className={`flex items-center justify-between  ${
          open ? "px-8 pr-1" : "px-2 pr-1"
        }`}
      >
        <div className="flex items-center">
          <img src={logo} alt="dieta-logo" className={`open? w-12 h-12 `} />
          <h1
            className={`origin-left font-bold text-2xl duration-300 ml-3 ${
              !open && "hidden"
            }`}
          >
            DIETA
          </h1>
        </div>
        <div
          className="cursor-pointer transition-transform duration-300 ml-0"
          onClick={toggleSidebar}
        >
          {open ? <ChevronLeft /> : <ChevronRight />}
        </div>
      </div>
      <ul className="pt-4 flex-grow overflow-y-auto">
        {menuItems.map((menu, index) => (
          <Tooltip
            title={!open ? menu.label : ""}
            placement="right"
            arrow
            key={index}
          >
            <li
              onClick={() => handleMenuClick(index, menu.link, menu.label)}
              className={`flex items-center cursor-pointer p-4 my-6  rounded-lg text-base   transition-all duration-300 ${
                activeIndex === index
                  ? "bg-light-blue-with-border text-white shadow-lg"
                  : "text-text/80 hover:bg-gray-100 hover:text-primary m-4"
              } ${open ? "px-6 py-3" : "justify-center py-2"} `}
            >
              <span className={`text-lg ${open ? "" : "text-center"}`}>
                {menu.icon}
              </span>
              <span
                className={`ml-4 ${
                  !open ? "hidden" : "block"
                } origin-left font-normal duration-100`}
              >
                {menu.label}
              </span>
            </li>
          </Tooltip>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
