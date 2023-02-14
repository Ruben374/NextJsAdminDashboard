import styles from "@/styles/pages/Home.module.css";
import { LeftContainer } from "@/components/LeftContainer";
import { useRouter } from "next/router";
import { Overwiew } from "@/components/Overwiew";
import { Header } from "@/components/Header";
import dynamic from "next/dynamic";
export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.homeContainer}>
      <LeftContainer />
      <div className={styles.left}>
        <Header />
        {router.pathname === "/rota1" ? (
          <Overwiew />
        ) : router.pathname === "/rota2" ? (
          <h1>Rota 2</h1>
        ) : router.pathname === "/rota3" ? (
          <h1>Rota 3</h1>
        ) : router.pathname === "/rota4" ? (
          <h1>Rota 4</h1>
        ) : (
          <Overwiew />
        )}
      </div>
    </div>
  );
}
