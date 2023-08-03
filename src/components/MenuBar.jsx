import React from "react";
import { Link } from "react-router-dom";

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: ".25em",
    backgroundColor: "var(--coffee-brown)",
    borderRadius: "var(--border-radius)",
  },
  ul: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
  },
  li: {
    margin: "0 1em",
  },
  link: {
    textDecoration: "none",
    color: "var(--off-white)",
    fontSize: "1.2em",
    padding: "0.5em 1em",
    backgroundColor: "var(--coffee-brown)",
    border: "2px solid var(--off-white)",
    borderRadius: "var(--border-radius)",
  },
};

const MenuBar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>
            BrewTrack
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/metrics" style={styles.link}>
            BrewMetrics
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
