import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Vite.
        </p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
