import styles from "./header.module.css";

export default async function Header() {
    return (
        <div className={styles.headerCont}>
            <h1 className={styles.ezraTitle}>EZRA FURR</h1>
        </div>

    );
}