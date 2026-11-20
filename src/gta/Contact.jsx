import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons.jsx";
import Magnetic from "../components/Magnetic.jsx";
import Monogram from "./Monogram.jsx";
import { profile } from "../data.js";

const contacts = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, color: "#ff2e88" },
  { icon: Phone, label: "Call", value: profile.phoneDisplay, href: `tel:${profile.phone}`, color: "#3ddc97" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "muhammad-shahzaib", href: profile.linkedin, color: "#3b82f6", external: true },
  { icon: GithubIcon, label: "GitHub", value: "hexcode29", href: profile.github, color: "#a76bff", external: true },
];

function InGamePhone() {
  return (
    <motion.div
      className="phone"
      initial={{ y: 120, rotate: 6, opacity: 0 }}
      whileInView={{ y: 0, rotate: -3, opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="phone-screen">
        <div className="phone-status">
          <span>9:41</span>
          <span>▮▮▮ 5G</span>
        </div>
        <div className="phone-head">
          <Monogram size={44} />
          <div>
            <strong>{profile.name}</strong>
            <small>Available for work</small>
          </div>
        </div>
        <div className="sms">
          <p className="sms-in">Got a job for me? Web, mobile or full stack, I'm in. 🌴</p>
        </div>
        <ul className="phone-contacts">
          {contacts.map((c) => (
            <li key={c.label}>
              <a href={c.href} {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                <span className="pc-icon" style={{ background: c.color }}>
                  <c.icon width={18} height={18} size={18} />
                </span>
                <span className="pc-text">
                  <strong>{c.label}</strong>
                  <small>{c.value}</small>
                </span>
                <ArrowUpRight size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-sky" aria-hidden="true" />
      <div className="container contact-grid">
        <div>
          <span className="kicker">New mission available</span>
          <h2 className="title-xl contact-title">
            Got a job
            <br />
            for me?
          </h2>
          <p className="lead">
            I'm available for full-time roles and freelance projects. Tell me what you're building and
            I'll get back to you quickly.
          </p>
          <Magnetic strength={0.2}>
            <a href={`mailto:${profile.email}`} className="btn btn-hot btn-lg">
              <Mail size={20} /> Accept mission
            </a>
          </Magnetic>
          <p className="contact-loc">
            <MapPin size={16} /> {profile.location} · working with teams worldwide
          </p>
        </div>
        <InGamePhone />
      </div>
    </section>
  );
}
