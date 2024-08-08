import styles from "@/styles/Estiloso.module.css";
import Link from "next/link";

export default function Estiloso() {
  return (
    <div className={styles.roxo}>
      <Link href="/">Voltar</Link>
      <h1 className={styles.corH1}>Estilo usando CSS Modularizado</h1>
    </div>
  );
}
