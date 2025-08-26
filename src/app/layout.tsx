import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wassym Kalouache — AI Product Specialist",
  description:
    "Portfolio of Wassym Kalouache, AI Product Specialist. No buzzwords. Execution-first.",
  icons: {
    icon: "/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <div className="container nav__inner">
            <div className="brand">Wassym Kalouache</div>
            <nav className="links">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container">
            <small>
              © <span id="year">{new Date().getFullYear()}</span> Wassym Kalouache. 
            </small>
          </div>
        </footer>
      </body>
    </html>
  );
}
