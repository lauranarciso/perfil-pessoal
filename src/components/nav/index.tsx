"use client";

import { useState } from "react";
import { CloseMenuIcon } from "../icons/close-menu-icon";
import { OpenMenuIcon } from "../icons/open-menu-icon";

export const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const links = [
    {
      label: "Início",
      href: "/",
    },
    {
      label: "Sobre",
      href: "#sobre",
    },
    {
      label: "Habilidades",
      href: "#habilidades",
    },
    {
      label: "Contato",
      href: "#contato",
    },
  ];

  const clickMenuButton = () => {
    setMenuOpen(!isMenuOpen);
  };

  if (typeof window !== "undefined") {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }

  return (
    <>
      <nav className="flex justify-between py-4 px-8 lg:px-24 items-center">
        <h1 className="text-(--primary) font-bold text-2xl">
          &lt; Laura /&gt;
        </h1>
        <ul className="lg:flex gap-6 hidden text-[#6B6B8F] text-lg font-semibold">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="relative transition-all duration-300 hover:text-[#121212] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="lg:hidden" onClick={clickMenuButton}>
          {isMenuOpen ? (
            <CloseMenuIcon className="w-5 h-5" />
          ) : (
            <OpenMenuIcon className="w-5 h-5" />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col gap-10 animate-fade-in py-18 px-8">
          <button
            className="absolute top-6 right-8"
            onClick={clickMenuButton}
            aria-label="Fechar menu"
          >
            <CloseMenuIcon className="w-7 h-7" />
          </button>
          <ul className="flex flex-col gap-8 text-2xl font-semibold text-[#6B6B8F]">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="transition-colors duration-200 hover:text-[#121212]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
