import Header from "@/components/header";
import styles from "./page.module.css";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div>
      <Header />

      <main className={styles.dashboardContainer}>
        <Sidebar />
      </main>
    </div>
  );
}
