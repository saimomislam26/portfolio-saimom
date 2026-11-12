import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { posts } from "../data";
import { Reveal, Section } from "./ui";

const Blog = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section id="blog" eyebrow="05 — Blog" title="Engineering notes">
      <div className="grid gap-5 lg:grid-cols-3">
        {posts.map((p, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="card flex h-full flex-col p-6">
                <div className="flex items-center justify-between font-mono text-xs text-muted">
                  <span>{p.date}</span><span>{p.read}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{p.body[0]}</p>
                {isOpen && (
                  <div id={`post-${i}`} className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                    {p.body.slice(1).map((para) => <p key={para}>{para}</p>)}
                  </div>
                )}
                <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`post-${i}`}
                  className="mt-auto flex items-center gap-1 self-start pt-5 text-sm font-medium text-cyan">
                  {isOpen ? "Show less" : "Read more"}
                  <FiChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Blog;
