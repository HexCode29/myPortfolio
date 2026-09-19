import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
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
    <>
      <section id="contact" className="section contact">
        <div className="container">
          <Reveal className="contact-card">
            <div className="contact-copy">
              <span className="eyebrow">Contact</span>
              <h2>Have a project in mind? Let’s build it.</h2>
              <p>
                I’m available for full-time roles and freelance projects. Tell me what you’re
                building and I’ll get back to you quickly.
              </p>
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail size={18} /> Say hello
              </a>
              <p className="contact-loc">
                <MapPin size={16} /> Based in {profile.location} · working with teams worldwide
              </p>
            </div>

            <ul className="channels">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className="channel-icon">
                      <c.icon />
                    </span>
                    <span className="channel-text">
                      <small>{c.label}</small>
                      <strong>{c.value}</strong>
                    </span>
                    <ArrowUpRight size={18} className="arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
