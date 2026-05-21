import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const CustomGlobe = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a87.5,87.5,0,0,1,48,14.28V74L153.83,99.74,122.36,104l-.31-.22L102.38,90.92A16,16,0,0,0,79.87,95.1L58.93,126.4a16,16,0,0,0-2.7,8.81L56,171.44l-3.27,2.15A88,88,0,0,1,128,40ZM62.29,186.47l2.52-1.65A16,16,0,0,0,72,171.53l.21-36.23L93.17,104a3.62,3.62,0,0,0,.32.22l19.67,12.87a15.94,15.94,0,0,0,11.35,2.77L156,115.59a16,16,0,0,0,10-5.41l22.17-25.76A16,16,0,0,0,192,74V67.67A87.87,87.87,0,0,1,211.77,155l-16.14-14.76a16,16,0,0,0-16.93-3l-30.46,12.65a16.08,16.08,0,0,0-9.68,12.45l-2.39,16.19a16,16,0,0,0,11.77,17.81L169.4,202l2.36,2.37A87.88,87.88,0,0,1,62.29,186.47ZM185,195l-4.3-4.31a16,16,0,0,0-7.26-4.18L152,180.85l2.39-16.19L184.84,152,205,170.48A88.43,88.43,0,0,1,185,195Z"></path>
  </svg>
);

export default function Navbar({ authOnly = false }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navbarRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavHeight(navbarRef.current.offsetHeight);
    }
  }, [mobileOpen]);

  return (
    <div className="fixed top-0 left-0 w-full z-50" ref={navbarRef}>

      {/* ANNOUNCEMENT BAR */}
      {!authOnly && (
        <div className="relative w-full overflow-hidden bg-[var(--color-primary)] border-b border-[var(--color-border)]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 animate-[move_7s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-white/10 animate-pulse opacity-30" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center text-sm py-2 text-[var(--color-text)] font-medium tracking-tight">
            Sign up and deposit for a shot at $25,000 in Crypto. Rules apply.
            <span className="ml-2 underline cursor-pointer hover:opacity-70 transition">Learn More</span>
          </div>
          <style>{`
            @keyframes move {
              0% { transform: translateX(-140%); }
              50% { transform: translateX(0%); }
              100% { transform: translateX(140%); }
            }
          `}</style>
        </div>
      )}

      {/* NAVBAR */}
      <header className="bg-[var(--color-bg)] backdrop-blur-md text-[var(--color-text)] border-b border-[var(--color-border)] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/IMG_1544-removebg-preview.png" alt="NorthbridgeTr logo" className="w-12 h-12 object-contain" />
            <span className="text-xl font-semibold tracking-tight text-[var(--color-text)]">
              NorthbridgeTr
            </span>
          </Link>

          {/* DESKTOP NAV */}
          {!authOnly && (
            <>
              <nav className="hidden lg:flex items-center gap-10 text-[15px]">
                {[
                  { label: "Trade & Invest", key: "mission" },
                  { label: "Why Northbridge", key: "services" },
                  { label: "Learn", key: "learn" },
                  { label: "Company", key: "company" },
                  { label: "Help", key: "help" },
                ].map(({ label, key }) => (
                  <div key={key} onMouseEnter={() => setOpenMenu(key)} onMouseLeave={() => setOpenMenu(null)} className="relative">
                    <div className="cursor-pointer flex items-center gap-1 font-medium text-[var(--color-text)] hover:text-[var(--color-muted)] transition">
                      <span>{label}</span>
                      <svg className="w-3 h-3 transition-transform" style={{ transform: openMenu === key ? "rotate(180deg)" : "rotate(0deg)" }} fill="none" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </nav>

              <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-[var(--color-border)]">
                <button className="text-[var(--color-text)] hover:text-[var(--color-muted)] transition">
                  <CustomGlobe className="w-6 h-6" />
                </button>
                <Link to="/signin" className="px-4 py-2 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-hover)] rounded-full transition">
                  Sign in
                </Link>
                <Link to="/SignUp" className="px-4 py-2 text-sm font-semibold bg-[var(--color-primary)] text-black border border-[var(--color-border)] hover:opacity-90 rounded-full transition">
                  Get Started
                </Link>
              </div>

              {/* MOBILE BUTTON */}
              <div className="lg:hidden flex items-center gap-3">
                <Link to="/signin" className="px-4 py-2 text-sm font-semibold bg-[var(--color-primary)] text-black border border-[var(--color-border)] hover:opacity-90 rounded-full transition">
                  Sign In
                </Link>
                <button className="flex items-center justify-center h-10 w-10" onClick={() => setMobileOpen(!mobileOpen)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="40" y1="64" x2="216" y2="64" />
                    <line x1="40" y1="128" x2="216" y2="128" />
                    <line x1="40" y1="192" x2="216" y2="192" />
                  </svg>
                </button>
              </div>
            </>
          )}

        </div>
      </header>

      {/* MOBILE MENU — outside header, uses measured navHeight */}
{!authOnly && mobileOpen && (
  <>
    <style>{`body { overflow: hidden; }`}</style>
    <div
      className="lg:hidden fixed left-0 right-0 bottom-0 flex flex-col"
      style={{ top: navHeight, backgroundColor: 'var(--background)', zIndex: 9999 }}
    >
      {/* Scrollable nav links */}
      <div className="flex-1 overflow-y-auto">
        {[
          { label: "Trade & Invest", to: "/trade" },
          { label: "Why Northbridge", to: "/why" },
          { label: "Learn", to: "/learn" },
          { label: "Company", to: "/company" },
          { label: "Help", to: "/help" },
        ].map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)] font-medium text-[var(--foreground)] hover:bg-[var(--muted)] transition"
          >
            {label}
            <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      {/* Bottom buttons */}
      <div className="p-6 space-y-3 border-t border-[var(--border)]" style={{ backgroundColor: 'var(--background)' }}>
        <Link
          to="/SignUp"
          onClick={() => setMobileOpen(false)}
          className="block w-full text-center px-4 py-3 text-sm font-semibold bg-[var(--color-primary)] text-black rounded-full hover:opacity-90 transition"
        >
          Get Started
        </Link>
        <Link
          to="/signin"
          onClick={() => setMobileOpen(false)}
          className="block w-full text-center px-4 py-3 text-sm font-medium border border-[var(--border)] text-[var(--foreground)] rounded-full hover:bg-[var(--muted)] transition"
        >
          Sign In
        </Link>
      </div>
    </div>
  </>
)}

    </div>
  );
}