import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className='logo'>
        <img src='/logo.png' />
      </div>
      <div className={styles.links}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/ninjas'>Ninja listing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
