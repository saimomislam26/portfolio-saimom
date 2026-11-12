import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiMoon, FiSun } from "react-icons/fi";

const links = ["about", "skills", "experience", "projects", "blog", "contact"];

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute("data-theme") || "dark");
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch { /* storage unavailable */ }
    setTheme(next);
  };
  return (
    <button onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="grid h-10 w-10 place-items-center rounded-full border border-line text-lg text-muted transition hover:border-violet hover:text-text">
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled || open ? "border-b border-line bg-ink/80 backdrop-blur-lg" : ""}`}>
      <motion.div style={{ scaleX: width }} className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-violet to-cyan" />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-xl font-bold">
          saimom<span className="text-gradient">.dev</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} className={`rounded-full px-4 py-2 text-sm capitalize transition-colors ${active === l ? "bg-violet/15 font-medium text-violet" : "text-muted hover:text-text"}`}>
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary hidden !py-2 md:inline-flex">Hire me</a>
          <button aria-label="Toggle menu" aria-expanded={open} className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 px-5 pb-5 md:hidden">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 capitalize text-muted hover:bg-fg/5 hover:text-text">{l}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
