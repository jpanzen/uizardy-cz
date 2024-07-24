'use client'
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./mobile-menu";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
      <nav className="flex flex-row lg:px-[60px] md:px-[40px] px-[20px] h-[70px] w-[100vw] justify-between items-center border-b-[1px] border-dark">
        {/* Logo */}
        <Link href="/"><img src="/light-long.svg" alt="uizardry logo" className="w-[110px]"/></Link>
        
        {/* Desktop menu */}
        <ul className="flex-row gap-[60px] leading-loose hidden lg:flex">
          <li className="p-[2px] border-solid border-b-[1px] border-background hover:border-linkHover transition-colors duration-300">
            <Link href="/">Webový audit</Link>
          </li>
          <li className="p-[2px] border-solid border-b-[1px] border-background hover:border-linkHover transition-colors duration-300">
            <Link href="/">Tvorba webu</Link>
          </li>
          <li className="p-[2px] border-solid border-b-[1px] border-background hover:border-linkHover transition-colors duration-300">
            <Link href="/">SEO</Link>
          </li>
          <li className="p-[2px] border-solid border-b-[1px] border-background hover:border-linkHover transition-colors duration-300">
            <Link href="/">Kontakt</Link>
          </li>
        </ul>

        {/* Blog button */}
        <button className="py-[7px] px-[18px] gap-[10px] rounded-[8px] bg-darkLighter shadow-buttonIdle hover:shadow-buttonHover transition-shadow duration-300 hidden lg:inline-flex items-center">
          <img src="/blog-icon.svg" alt="blog icon" />
          Blog
        </button>

        {/* Mobile menu button */}
        <button
          onClick={()=>{setIsMobileOpen(!isMobileOpen)}}
          className="py-[7px] px-[18px] gap-[10px] rounded-[8px] bg-darkLighter shadow-buttonIdle hover:shadow-buttonHover transition-shadow duration-300 inline-flex lg:hidden items-center"
        >
          Menu
        </button>

        {/* Mobile menu */}
        <MobileMenu 
          isOpen={isMobileOpen} 
          onClose={() => setIsMobileOpen(false)}
        />
      </nav>
  );
}

export default Navbar;