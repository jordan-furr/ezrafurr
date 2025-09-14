import styles from "./header.module.css";
import Link from "next/link";

export default async function Footer() {
    return (
        <div className={styles.ezraFooter}>
            <Link href="https://www.instagram.com/ezra.geo/" target="_" className="under-hov"><p className="og">IG @ezra.geo</p></Link>
            <p>georgedfurr@gmail.com</p>
        </div>
    );
}
