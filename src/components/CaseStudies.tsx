import { FaLock } from "react-icons/fa";
import { caseStudies } from "../data";
import { Reveal } from "./ui";

const CaseStudies = () => (
  <div className="mt-16">
    <Reveal>
      <h3 className="mb-6 flex items-center gap-3 font-display text-2xl font-semibold">
        <FaLock className="text-lg text-violet" /> Case studies
      </h3>
    </Reveal>
    {caseStudies.map((c) => (
      <Reveal key={c.title} className="mb-6">
        <div className="card grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
          <div>
            <span className="chip">{c.tag}</span>
            <h4 className="mt-4 font-display text-2xl font-semibold">{c.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{c.summary}</p>
            <ul className="mt-5 space-y-2">
              {c.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />{h}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-ghost mt-6">{c.tag.includes("NDA") ? "Ask for a walkthrough" : "Discuss this project"}</a>
          </div>
          <div className="flex flex-col items-stretch justify-center gap-2 rounded-xl border border-dashed border-line bg-ink/50 p-5">
            <p className="mb-1 text-center font-mono text-xs text-muted">Generic architecture</p>
            {c.flow.map((f, i) => (
              <div key={f} className="flex flex-col items-center gap-2">
                <div className="w-full rounded-lg border border-line bg-panel px-4 py-2.5 text-center text-sm">{f}</div>
                {i < c.flow.length - 1 && <span className="text-cyan">↓</span>}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    ))}
  </div>
);

export default CaseStudies;
