import { FaGraduationCap, FaRocket, FaShieldAlt, FaUsers, FaCode } from "react-icons/fa";
import { education, strengths } from "../data";
import { Reveal, Section } from "./ui";

const icons = [FaRocket, FaShieldAlt, FaCode, FaUsers];

const About = () => (
  <Section id="about" eyebrow="01 — About" title="Engineer who ships, end to end">
    <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
      <Reveal className="grid gap-4 sm:grid-cols-2">
        {strengths.map((s, i) => {
          const Icon = icons[i];
          return (
            <div key={s} className="card p-6">
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet/30 to-cyan/20 text-lg text-cyan"><Icon /></span>
              <p className="text-sm leading-relaxed text-muted">{s}</p>
            </div>
          );
        })}
      </Reveal>
      <Reveal delay={0.1} className="card flex flex-col justify-center p-8">
        <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-fg/5 text-xl text-violet"><FaGraduationCap /></span>
        <p className="font-mono text-xs text-cyan">Education</p>
        <h3 className="mt-2 font-display text-xl font-semibold">{education.degree}</h3>
        <p className="mt-1 text-muted">{education.school}</p>
        <p className="mt-3 text-sm text-muted">{education.meta}</p>
      </Reveal>
    </div>
  </Section>
);

export default About;
