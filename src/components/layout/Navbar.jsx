
import { useState } from "react";

import {
  Globe2,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  navLinks,
  ROUTES,
} from "../../data/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { pathname, hash } = useLocation();

  const closeMenu = () => setMenuOpen(false);

  // Check whether a navigation link is active
  const isActiveLink = (href) => {
    const [targetPath, targetHash] = href.split("#");

    if (targetHash) {
      return (
        pathname === (targetPath || "/") &&
        hash === `#${targetHash}`
      );
    }

    if (href === ROUTES.HOME) {
      return pathname === "/" && (!hash || hash === "#home");
    }

    return (
      pathname === targetPath ||
      pathname.startsWith(`${targetPath}/`)
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">

      {/* MAIN NAVBAR */}

      <div
        className="mx-auto flex h-[76px] w-full items-center justify-between gap-5 lg:h-[88px]"
        style={{
          maxWidth: "1600px",
          marginInline: "auto",
          paddingInline: "clamp(16px, 3vw, 48px)",
          boxSizing: "border-box",
        }}
      >

        {/* BRAND LOGO */}

        <Link
          to={ROUTES.HOME}
          onClick={closeMenu}
          aria-label="Sharanga Global Exports Homepage"
          className="flex shrink-0 items-center gap-2.5 sm:gap-3"
        >
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C5A052] text-[#102747] sm:h-12 sm:w-12">

            <Globe2
              size={34}
              strokeWidth={1.2}
              aria-hidden="true"
            />

            <span className="absolute bg-white px-1 font-serif text-[10px] font-bold">
              SGE
            </span>

          </div>

          <div className="leading-tight">

            <span className="block font-[var(--font-heading)] text-[18px] font-bold tracking-[1.5px] text-[#102747] sm:text-[21px] lg:text-[23px]">
              SHARANGA
            </span>

            <span className="block text-[8px] font-bold tracking-[2.5px] text-[#C5A052] sm:text-[10px] sm:tracking-[3px]">
              GLOBAL EXPORTS
            </span>

          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-4 lg:flex xl:gap-6 2xl:gap-8"
        >
          {navLinks.map((link) => {
            const active = isActiveLink(link.href);

            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={closeMenu}
                aria-current={
                  active
                    ? link.href.includes("#")
                      ? "location"
                      : "page"
                    : undefined
                }
                className={`group relative whitespace-nowrap py-2 text-[12px] xl:text-[13px] font-semibold transition-colors duration-300 hover:text-[#C5A052] ${
                  active
                    ? "text-[#C5A052]"
                    : "text-[#102747]"
                }`}
              >
                {link.label}

                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#C5A052] transition-all duration-300 ${
                    active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CONTACT BUTTON */}

        <Link
          to={ROUTES.CONTACT}
          onClick={closeMenu}
          className="hidden min-h-[44px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[4px] bg-[#102747] px-5 py-3 text-[12px] xl:text-[13px] font-semibold text-white! transition-all duration-300 hover:bg-[#C5A052] hover:text-[#102747]! lg:inline-flex"
          style={{
            padding: "12px 20px",
            textDecoration: "none",
          }}
        >
          Let's Connect

          <ArrowUpRight
            size={17}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex shrink-0 items-center justify-center rounded-md p-2 text-[#102747] transition-colors hover:bg-slate-100 lg:hidden"
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
        className={`absolute left-0 top-full w-full border-t border-slate-100 bg-white shadow-xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-[700px] flex-col px-6 py-4 sm:px-8"
        >

          {navLinks.map((link) => {
            const active = isActiveLink(link.href);

            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                aria-current={
                  active
                    ? link.href.includes("#")
                      ? "location"
                      : "page"
                    : undefined
                }
                className={`border-b border-slate-100 py-4 text-sm font-semibold transition-colors duration-300 hover:text-[#C5A052] ${
                  active
                    ? "text-[#C5A052]"
                    : "text-[#102747]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            to={ROUTES.CONTACT}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-5 flex min-h-[44px] items-center justify-center gap-2 rounded-[4px] bg-[#102747] px-5 py-3.5 text-sm font-semibold text-white! transition-all duration-300 hover:bg-[#C5A052] hover:text-[#102747]!"
            style={{
              padding: "14px 20px",
              textDecoration: "none",
            }}
          >
            Let's Connect

            <ArrowUpRight
              size={17}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </Link>

        </nav>
      </div>

    </header>
  );
}

export default Navbar;
