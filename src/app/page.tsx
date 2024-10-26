import styles from "./page.module.css";
import Button from "@/components/button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button>Teste </Button>
    </div>
  );
}
