import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "../data";
import { Reveal, Section } from "./ui";

const field = "w-full rounded-xl border border-line bg-fg/[0.03] px-4 py-3 text-sm outline-none transition placeholder:text-muted/70 focus:border-violet";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICEID, import.meta.env.VITE_EMAILJS_TEMPLATEID, form.current!, { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY })
      .then(() => { setStatus("ok"); form.current?.reset(); })
      .catch(() => setStatus("err"));
  };

  const info = [
    { icon: <FaEnvelope />, label: profile.email, href: `mailto:${profile.email}` },
    { icon: <FaPhoneAlt />, label: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
    { icon: <FaMapMarkerAlt />, label: profile.location },
    { icon: <FaGithub />, label: "github.com/saimomislam26", href: profile.github },
    { icon: <FaLinkedin />, label: "LinkedIn", href: profile.linkedin },
  ];

  return (
    <Section id="contact" eyebrow="06 — Contact" title="Let's build something together">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="card space-y-2 p-6 sm:p-8">
          <p className="mb-4 text-muted">Have a project, a role or just want to say hi? My inbox is open.</p>
          {info.map((i) => {
            const inner = (<><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-fg/5 text-cyan">{i.icon}</span><span className="break-all text-sm">{i.label}</span></>);
            const cls = "flex items-center gap-4 rounded-xl p-2";
            return i.href
              ? <a key={i.label} href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`${cls} transition hover:bg-fg/5`}>{inner}</a>
              : <div key={i.label} className={cls}>{inner}</div>;
          })}
        </Reveal>
        <Reveal delay={0.1}>
          <form ref={form} onSubmit={send} className="card flex flex-col gap-4 p-6 sm:p-8">
            <input className={field} type="text" name="from_name" placeholder="Your name" required aria-label="Your name" />
            <input className={field} type="email" name="from_email" placeholder="Your email" required aria-label="Your email" />
            <textarea className={field} name="message" rows={6} placeholder="Your message" required aria-label="Your message" />
            <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p role="status" className={`text-sm ${status === "ok" ? "text-emerald-400" : "text-red-400"}`}>
              {status === "ok" && "Message sent successfully — thank you!"}
              {status === "err" && "Something went wrong. Please email me directly."}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
