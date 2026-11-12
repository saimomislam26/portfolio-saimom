import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import profilePic from "../assets/profile.webp";
import { profile, stats, marquee } from "../data";
import { Counter } from "./ui";

const useTyper = (words: string[]) => {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length <= 1) { setDel(false); setI((i + 1) % words.length); }
        }
      },
      del ? 35 : 70
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
};

const Hero = () => {
  const typed = useTyper(profile.roles);
  const social = [
    { href: profile.github, icon: <FaGithub />, label: "GitHub" },
    { href: profile.linkedin, icon: <FaLinkedin />, label: "LinkedIn" },
    { href: profile.leetcode, icon: <SiLeetcode />, label: "LeetCode" },
  ];
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-violet/30 blur-[120px]" />
        <div className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-cyan/20 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(var(--c-fg)_1px,transparent_1px),linear-gradient(90deg,var(--c-fg)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="order-2 lg:order-1">
          <span className="chip inline-flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Open to new opportunities
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 h-8 font-mono text-lg text-cyan sm:text-xl">
            {typed}<span className="cursor">|</span>
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View my work</a>
            <a href="/MD_Saimom_Islam_CV.pdf" download="MD_Saimom_Islam_CV.pdf" className="btn btn-ghost"><HiDownload className="text-lg" /> Download CV</a>
            <a href="#contact" className="btn btn-ghost">Contact me</a>
          </div>
          <div className="mt-8 flex gap-3">
            {social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-xl text-muted transition hover:-translate-y-1 hover:border-violet hover:text-text">
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative order-1 mx-auto w-64 sm:w-80 lg:order-2 lg:w-full lg:max-w-md">
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-violet to-cyan opacity-40 blur-3xl" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-panel to-ink animate-float">
            <img src={profilePic} alt="Portrait of MD Saimom Islam" width={900} height={1350} fetchPriority="high" className="h-full w-full object-cover object-top" />
          </div>
          <div className="card absolute -bottom-4 -left-2 px-4 py-3 text-sm sm:-left-8">
            <p className="font-display text-xl font-bold text-gradient">5+ yrs</p>
            <p className="text-xs text-muted">building for the web</p>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 px-5 sm:px-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card p-5 text-center">
            <p className="font-display text-3xl font-bold text-gradient sm:text-4xl"><Counter to={s.value} suffix={s.suffix} /></p>
            <p className="mt-1 text-xs text-muted sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-14 overflow-hidden border-y border-line bg-fg/[0.02] py-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-3">
          {[...marquee, ...marquee].map((m, i) => <span key={i} className="chip whitespace-nowrap !text-sm">{m}</span>)}
        </div>
      </div>
      <a href="#about" aria-label="Scroll down" className="mx-auto mt-6 grid h-10 w-10 place-items-center rounded-full border border-line text-muted"><HiArrowDown /></a>
    </section>
  );
};

export default Hero;
