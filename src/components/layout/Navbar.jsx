
import { useState } from "react";
import {
  Globe2,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks, ROUTES } from "../../data/navigation";

const navLink = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Our Farmers", href: "#farmers" },
  { name: "Global Markets", href: "#markets" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">

      {/* MAIN NAVBAR */}
      <div className="mx-auto flex h-[76px] items-center justify-between px-5 sm:px-7 xl:h-[88px] xl:max-w-[1380px] xl:px-8 2xl:max-w-[1600px] 2xl:px-12">

        {/* BRAND LOGO */}
        <Link to={ROUTES.HOME}
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5 sm:gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A052] text-[#102747] sm:h-12 sm:w-12">
            <Globe2 size={34} strokeWidth={1.2} />

            <span className="absolute bg-white px-1 font-serif text-[10px] font-bold">
              SGE
            </span>
          </div>

          <div className="leading-tight">
            <h2 className="font-[var(--font-heading)] text-[18px] font-bold tracking-[1.5px] text-[#102747] sm:text-[21px] xl:text-[23px]">
              SHARANGA
            </h2>

            <span className="block text-[8px] font-bold tracking-[2.5px] text-[#C5A052] sm:text-[10px] sm:tracking-[3px]">
              GLOBAL EXPORTS
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-5 xl:flex 2xl:gap-8">
          {navLink.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="group relative whitespace-nowrap py-2 text-[12px] font-semibold text-[#102747] transition-colors duration-300 hover:text-[#C5A052] 2xl:text-[13px]"
            >
              {link.name}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C5A052] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* DESKTOP CONTACT BUTTON */}
        <Link
          to={ROUTES.CONTACT}
          className="hidden shrink-0 items-center gap-2 rounded-sm bg-[#102747] px-4 py-3 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#C5A052] hover:text-[#102747] xl:inline-flex 2xl:px-5 2xl:text-[13px]"
        >
          Let's Connect
          <ArrowUpRight size={17} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex items-center justify-center rounded-md p-2 text-[#102747] transition-colors hover:bg-slate-100 xl:hidden"
        >
          {menuOpen ? (
            <X size={27} strokeWidth={1.8} />
          ) : (
            <Menu size={27} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`absolute left-0 top-full w-full border-t border-slate-100 bg-white shadow-xl transition-all duration-300 xl:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[700px] flex-col px-6 py-4 sm:px-8">

          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="border-b border-slate-100 py-4 text-sm font-semibold text-[#102747] transition-colors duration-300 hover:pl-2 hover:text-[#C5A052]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            to={ROUTES.CONTACT}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-5 flex items-center justify-center gap-2 rounded-sm bg-[#102747] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C5A052] hover:text-[#102747]"
          >
            Let's Connect
            <ArrowUpRight size={17} />
          </Link>
        </nav>
      </div>

    </header>
  );
}

export default Navbar;
