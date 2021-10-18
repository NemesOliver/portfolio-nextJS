import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Nav } from "./styles/Navbar";

const icons = [
  {
    href: "https://github.com/NemesOliver",
    src: "github_icon.svg",
    altTag: "github icon",
  },
  {
    href: "mailto:nemesoliver@hotmail.com?subject=Sent from Portfolio",
    src: "mail_icon.svg",
    altTag: "mail icon",
  },
  {
    href: "https://www.linkedin.com/in/oliver-nemes/",
    src: "linkedin_icon.svg",
    altTag: "linkedin icon",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => setOpen(!open);

  return (
    <Nav>
      <div className="logo">
        <Link href="/" passHref>
          <h4>
            &lt; Nemes <span>/</span>&gt;
          </h4>
        </Link>
      </div>
      <div className="socials">
        {icons.map(({ href, src, altTag }, index) => (
          <a
            className="icon"
            key={index}
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <Image src={`/assets/${src}`} alt={altTag} height="25" width="25" />
          </a>
        ))}
      </div>
      <div className="menu-icon">
        <div className="menu-wrapper">
          {open && (
            <div className="sliding-menu">
              <Link href="/">HOME</Link>
              <Link href="/about">ABOUT</Link>
              <Link href="/work">MY WORK</Link>
            </div>
          )}
          <Image
            onClick={() => handleClick()}
            src="/assets/menu_icon.svg"
            alt="menu icon"
            height="34"
            width="34"
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
