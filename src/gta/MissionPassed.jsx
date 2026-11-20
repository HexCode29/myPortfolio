import { motion } from "framer-motion";
import { profile } from "../data.js";

// Closing banner + footer.
export default function MissionPassed() {
  return (
    <footer className="passed">
      <motion.div
        className="passed-banner"
        initial={{ opacity: 0, scale: 1.6, letterSpacing: "0.4em" }}
        whileInView={{ opacity: 1, scale: 1, letterSpacing: "0.02em" }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <strong>Mission passed!</strong>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Thanks for scrolling · Respect +
        </motion.span>
      </motion.div>
      <div className="container passed-foot">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="passed-note">An original fan-style tribute. Not affiliated with any game studio.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
