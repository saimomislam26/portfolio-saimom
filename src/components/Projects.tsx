import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data";
import { Reveal, Section } from "./ui";
import CaseStudies from "./CaseStudies";

const Projects = () => (
  <Section id="projects" eyebrow="04 — Projects" title="Glimpse of my work">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={(i % 3) * 0.08}>
          <a href={p.link} target="_blank" rel="noreferrer" className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1">
            <div className="relative h-32 overflow-hidden bg-gradient-to-br from-violet/30 via-ink to-cyan/20">
              <span className="absolute bottom-3 left-5 font-mono text-5xl font-bold text-text/10">{String(i + 1).padStart(2, "0")}</span>
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-fg/10 text-lg transition group-hover:bg-cyan group-hover:text-ink"><FiArrowUpRight /></span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
    <CaseStudies />
  </Section>
);

export default Projects;
