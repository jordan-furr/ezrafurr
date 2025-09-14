import styles from "./header.module.css";
import Link from "next/link";

export default async function Header() {
    return (
        <div className={styles.headerCont}>
            <Link href={"/"}>
                <h1 className={styles.ezraTitle}>EZRA FURR</h1>
            </Link>
        </div>
    );
}