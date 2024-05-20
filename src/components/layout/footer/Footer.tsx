"use client";

import Link from "next/link";
import { FC } from "react";
import styles from "./Footer.module.scss";
import { usePathname } from "next/navigation";

const Footer: FC = () => {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      Simple footer 2024
    </footer>
  );
};

export default Footer;
