"use client";
import { useState } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const [clickedBoxes, setClickedBoxes] = useState<number[]>([]);

  const onBackButtonClick = () => {
    setClickedBoxes(prev => prev.slice(0, -1));
  };

  const onSquareClick = (index: number) => {
    if (!clickedBoxes.includes(index)) {
      setClickedBoxes(prev => [...prev, index]);
    }
  };

  return (
    <main className={styles.main}>
      <button className={styles.backButton} onClick={onBackButtonClick}>
        GERİ AL
      </button>

      <div className={styles.squareContainer}>
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className={`${styles.square} ${clickedBoxes.includes(index) ? styles.checked : ''}`}
            onClick={() => onSquareClick(index)}
          >
            {clickedBoxes.includes(index) && '×'}
          </div>
        ))}
      </div>
    </main>
  );
}
