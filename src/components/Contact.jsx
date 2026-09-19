import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SplitReveal from "./SplitReveal.jsx";
import Magnetic from "./Magnetic.jsx";
import { GithubIcon, LinkedinIcon } from "./Icons.jsx";
import { profile } from "../data.js";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phoneDisplay, href: `tel:${profile.phone}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: "muhammad-shahzaib", href: profile.linkedin, external: true },
  { icon: GithubIcon, label: "GitHub", value: "hexcode29", href: profile.github, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal y={12}>
          <span className="eyebrow">Contact</span>
        </Reveal>

        <h2 className="contact-giant">
          <SplitReveal
            text={"Let’s build something\ngreat together."}
            highlight={["great"]}
            stagger={0.08}
          />
        </h2>

        <Reveal delay={0.1} className="contact-lead">
          <p>
            I’m available for full-time roles and freelance projects. Tell me what you’re building
            and I’ll get back to you quickly.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <Magnetic strength={0.2} className="contact-mail-wrap">
            <a href={`mailto:${profile.email}`} className="contact-mail">
              <span>{profile.email}</span>
              <ArrowUpRight size={36} />
            </a>
          </Magnetic>
        </Reveal>

        <ul className="channels">
          {channels.map((c, i) => (
            <Reveal as="li" key={c.label} delay={0.08 * i}>
              <a href={c.href} {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                <span className="channel-icon">
                  <c.icon />
                </span>
                <span className="channel-text">
                  <small>{c.label}</small>
                  <strong>{c.value}</strong>
                </span>
                <ArrowUpRight size={18} className="arrow" />
              </a>
            </Reveal>
          ))}
        </ul>

        <p className="contact-loc">
          <MapPin size={16} /> Based in {profile.location} · working with teams worldwide
        </p>
      </div>
    </section>
  );
}
