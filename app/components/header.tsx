import styles from "./header.module.css";

export default async function Header() {
    return (
        <div className={styles.headerCont}>
            <h1 className={styles.ezraTitle}>EZRA GEO</h1>
        </div>

    );
}