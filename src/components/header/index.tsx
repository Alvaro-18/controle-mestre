"use client"
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { CasaIcon } from "../../../public/assets/Icons";

export default function Header() {
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        const url = window.location.href.split("/");
        setCurrentUrl(url[url.length - 1]);
    }, []);
    return (
        <header className={styles.header}>
            <Link href={"/home"}><CasaIcon/></Link>
            <h1>{currentUrl}</h1>
        </header >
    );
}