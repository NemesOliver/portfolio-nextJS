import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { icons } from "../utils/socialIcons";
import { Nav } from "./styles/Navbar.styles";

const imageVariants = {
  hidden: {
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },

  visible: {
    rotate: 45,
    transition: {
      duration: 0.5,
    },
  },
};

const menuVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    x: "15px",
  },

  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    x: "15px",
    transition: {
      duration: 0.5,
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

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
        {icons.map(({ href, src, altTag, aria }, index) => (
          <a
            aria-label={aria}
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
      <div className="menu-icon" aria-label="menu button" role="button">
        <div className="menu-wrapper">
          <AnimatePresence>
            {open && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="sliding-menu"
              >
                <div onClick={() => closeMenu()}>
                  <Link href="/" onClick={() => closeMenu()}>
                    HOME
                  </Link>
                </div>
                <div onClick={() => closeMenu()}>
                  <Link href="/about">ABOUT</Link>
                </div>
                <div onClick={() => closeMenu()}>
                  <Link href="/work">MY WORK</Link>
                </div>
                <div className="socials-mobile">
                  {icons.map(({ href, src, altTag }, index) => (
                    <a
                      className="icon"
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={`/assets/${src}`}
                        alt={altTag}
                        height="30"
                        width="30"
                      />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={open ? "visible" : ""}
          >
            <Image
              rotate={0}
              onClick={() => toggleMenu()}
              src="/assets/menu_icon.svg"
              alt="menu icon"
              height="34"
              width="34"
            />
          </motion.div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
