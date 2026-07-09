import { useEffect, useState } from "react";
import api from "./api/api";
import styles from "./App.module.css";

function App() {
  const [backendMessage, setBackendMessage] = useState<string>("Loading backend...");

  useEffect(() => {
    async function checkBackendHealth() {
      try {
        const response = await api.get("/health");
        setBackendMessage(response.data.message);
      } catch (error) {
        console.error("Backend connection failed:", error);
        setBackendMessage("Could not connect to backend");
      }
    }

    checkBackendHealth();
  }, []);

  return (
    <main className={styles.page}>
      <p className={styles.eyebrow}>Peruvian Filipino Inspired Cafe</p>
      <h1>Downtown Brews</h1>
      <p className={styles.message}>{backendMessage}</p>
    </main>
  );
}

export default App;