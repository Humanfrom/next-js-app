"use client";

import Link from "next/link";
import { FC } from "react";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";

const Header: FC = () => {
  const pathname = usePathname();
  const routes = [
    { name: "home", label: "Home", path: "/" },
    { name: "about", label: "About us", path: "/about" },
  ];

  return (
    <header className={styles.header}>
      {routes.map((route) => (
        <Link key={route.name} href={route.path} className={`${styles.header__link} ${pathname === route.path ? styles.header__link_active : ''}`}>
          {route.label}
        </Link>
      ))}
    </header>
  );
};

export default Header;
