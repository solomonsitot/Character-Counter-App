import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  setText,
  toggleExcludeSpaces,
  toggleCharacterLimit,
} from "../redux/counterSlice";
import styles from "../style/style.module.css";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { text, excludeSpaces, isCharacterLimitSet, characterLimit } =
    useSelector((state: RootState) => state.counter);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let inputText = e.target.value;
    if (isCharacterLimitSet && inputText.length > characterLimit) {
      return;
    }
    dispatch(setText(inputText));
  };

  const characterCount = excludeSpaces
    ? text.replace(/\s/g, "").length
    : text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentenceCount = text
    .split(/[.!?]+/)
    .filter((s) => s.trim().length > 0).length;
  const readingTime = Math.ceil(wordCount / 200);

  const letterDensity = text
    .replace(/[^a-zA-Z]/g, "")
    .toUpperCase()
    .split("")
    .reduce((acc, letter) => {
      acc[letter] = (acc[letter] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <div className={styles.logo_container}>
            <div className={styles.logo}></div>
            <h3>Character Counter</h3>
          </div>
          <button className="theme-changer"></button>
        </header>
        <h1 className={styles.title}>
          Analyze your text in <br /> real-time.
        </h1>
        <textarea
          className={styles.textarea}
          placeholder="Type your text here..."
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <div className={styles.optionsWrapper}>
          <div className={styles.options}>
            <label>
              <input
                type="checkbox"
                checked={excludeSpaces}
                onChange={() => dispatch(toggleExcludeSpaces())}
              />
              Exclude Spaces
            </label>
            <label>
              <input
                type="checkbox"
                checked={isCharacterLimitSet}
                onChange={() => dispatch(toggleCharacterLimit())}
              />
              Set Character Limit
            </label>
          </div>
          <p className={styles.readTime}>
            Approx. reading time: {readingTime} minute(s)
          </p>
        </div>
        <div className={styles.stats}>
          <div className={`${styles.statBox} ${styles.statBox1}`}>
            <h1>{characterCount}</h1>
            <p>Total Characters</p>
          </div>
          <div className={`${styles.statBox} ${styles.statBox2}`}>
            <h1>{wordCount}</h1>
            <p>Word Count</p>
          </div>
          <div className={`${styles.statBox} ${styles.statBox3}`}>
            <h1>{sentenceCount}</h1>
            <p>Sentence Count</p>
          </div>
        </div>
        <div className={styles.letterDensity}>
          <h3>Letter Density</h3>
          <ul>
            {Object.entries(letterDensity)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 5)
              .map(([letter, count], index, arr) => {
                const percentage = (
                  (count / arr.reduce((sum, [_l, c]) => sum + c, 0)) *
                  100
                ).toFixed(2);
                return (
                  <li key={letter}>
                    {letter} - {count} ({percentage}%)
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
