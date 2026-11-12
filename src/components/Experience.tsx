import { experience } from "../data";
import { Reveal, Section } from "./ui";

const Experience = () => (
  <Section id="experience" eyebrow="03 — Experience" title="Where I've worked">
    <div className="relative ml-3 border-l border-line pl-8 sm:ml-0 sm:pl-10">
      {experience.map((e, i) => (
        <Reveal key={e.company} delay={0.05} className="relative pb-12 last:pb-0">
          <span className="absolute -left-[2.55rem] top-1.5 h-4 w-4 rounded-full border-4 border-ink bg-gradient-to-br from-violet to-cyan sm:-left-[3.05rem]" />
          <div className="card p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-xl font-semibold sm:text-2xl">{e.role}</h3>
                <p className="text-gradient font-medium">{e.company}</p>
              </div>
              <span className="chip">{e.period}{i === 0 && " · Current"}</span>
            </div>
            <ul className="mt-5 space-y-3">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />{p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Experience;
