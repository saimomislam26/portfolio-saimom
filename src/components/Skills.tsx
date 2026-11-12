import { skills } from "../data";
import { Reveal, Section } from "./ui";

const Skills = () => (
  <Section id="skills" eyebrow="02 — Skills" title="Tools I work with">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((g, i) => (
        <Reveal key={g.title} delay={(i % 3) * 0.08}>
          <div className="card h-full p-6">
            <h3 className="mb-4 font-display text-lg font-semibold">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => <span key={s} className="chip transition hover:border-cyan/50 hover:text-cyan">{s}</span>)}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Skills;
