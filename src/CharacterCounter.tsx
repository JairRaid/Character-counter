import { Header } from "./components/Header/Header";
import InputCheckbox from "./components/InputCheckbox/InputCheckbox";
import LetterDensityItem from "./components/LetterDensityItem/LetterDensityItem";
import StatCard from "./components/StatCard/StatCard";
import { useCharacterCounter } from "./hooks/useCharacterCounter";
import "./CharacterCounter.css";
import { useState } from "react";
import { useTheme } from "./hooks/useTheme";

const CharacterCounter = () => {
  const {
    totalChar,
    wordCount,
    sentenceCount,
    isSpaceExclude,
    isCharLimit,
    charLimit,
    textError,
    letterDensity,
    handleGetText,
    setCharLimit,
    handleInputChange,
  } = useCharacterCounter();

  const { theme } = useTheme();

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const visibleLetters = letterDensity.slice(0, 5);

  const additionalLetters =
    letterDensity.length > 5 ? letterDensity.slice(5) : [];

  return (
    <div className="page-container">
      <Header />
      <main className="character-counter-main">
        <section
          className="character-counter__workspace"
          aria-labelledby="page-title"
        >
          <h1 id="page-title" className="character-counter__title">
            Analyze your text in real-time.
          </h1>

          <form className="text-analyzer" action="#" method="post">
            <div className="text-analyzer__editor">
              <label className="sr-only" htmlFor="text-input">
                Text to analyze
              </label>

              <textarea
                id="text-input"
                name="text"
                className={`text-analyzer__textarea ${textError ? "input-error" : ""}`}
                placeholder="Start typing here... (or paste your text)"
                aria-describedby="text-options reading-time"
                onChange={handleGetText}
              ></textarea>
              {textError && (
                <p className="text-analyzer__error leading-130 -tracking-06 text-(--orange-800) flex items-center gap-x-8">
                  <img src="/images/icon-info.svg" alt="" /> Limit reached! Your
                  text exceeds {charLimit} characters.
                </p>
              )}
            </div>

            <div id="text-options" className="text-analyzer__controls">
              <fieldset className="text-options">
                <legend className="sr-only">Text analysis options</legend>

                <InputCheckbox
                  id="exclude-spaces"
                  name="excludeSpaces"
                  label="Exclude Spaces"
                  onChange={handleInputChange}
                />

                <div className="text-options__character-limit-group">
                  <InputCheckbox
                    id="set-character-limit"
                    name="useCharacterLimit"
                    label="Set Character Limit"
                    onChange={handleInputChange}
                  />

                  {isCharLimit && (
                    <div id="character-limit" className="text-options__limit">
                      <label
                        htmlFor="character-limit-input"
                        className="sr-only"
                      >
                        Character limit
                      </label>

                      <input
                        id="character-limit-input"
                        className="character-limit-input"
                        name="characterLimit"
                        type="number"
                        inputMode="numeric"
                        min="1"
                        defaultValue={300}
                        onChange={(e) => setCharLimit(Number(e.target.value))}
                      />
                    </div>
                  )}
                </div>
              </fieldset>

              <p id="reading-time" className="text-analyzer__reading-time">
                Approx. reading time:
                <span>&lt;1 minute</span>
              </p>
            </div>
          </form>
        </section>

        <section
          className="statistics"
          aria-labelledby="statistics-title"
          aria-live="polite"
        >
          <h2 id="statistics-title" className="sr-only">
            Text statistics
          </h2>

          <ul className="statistics__list" role="list">
            <StatCard
              className="stat-card--characters"
              label={`Total Characters ${isSpaceExclude ? "(no space)" : ""}`}
              value={totalChar}
            />

            <StatCard
              className="stat-card--words"
              label="Word Count"
              value={wordCount}
            />

            <StatCard
              className="stat-card--sentences"
              label="Sentence Count"
              value={sentenceCount}
            />
          </ul>
        </section>

        <section
          className="letter-density"
          aria-labelledby="letter-density-title"
        >
          <h2 id="letter-density-title" className="letter-density__title">
            Letter Density
          </h2>

          {letterDensity.length !== 0 ? (
            <>
              {" "}
              <ol className="letter-density__list">
                {visibleLetters.map((item) => (
                  <LetterDensityItem
                    key={item.letter}
                    letter={item.letter}
                    number={item.number}
                    percentage={item.percentage}
                  />
                ))}
              </ol>
              <div
                id="additional-letter-density"
                className={`letter-density__additional transition-all ${isExpanded ? "h-auto overflow-auto" : "h-0 overflow-hidden"}`}
              >
                {/* <!-- Additional letter-density rows can be rendered here. --> */}
                <ol className="letter-density__list mt-12!">
                  {additionalLetters.map((item) => (
                    <LetterDensityItem
                      key={`additional.${item.letter}`}
                      letter={item.letter}
                      number={item.number}
                      percentage={item.percentage}
                    />
                  ))}
                </ol>
              </div>
              {/* Button See more */}
              {letterDensity.length > 5 && (
                <button
                  className="letter-density__toggle"
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls="additional-letter-density"
                  onClick={() => setIsExpanded((prev) => !prev)}
                >
                  <span>{isExpanded ? "See less" : "See more"}</span>
                  <span
                    className={`transition-transform ${isExpanded ? "rotate-180" : ""} ${theme === "dark" ? "white-filter" : ""}`}
                    aria-hidden="true"
                  >
                    <img src="/images/icon-chevron.svg" alt="" />{" "}
                  </span>
                </button>
              )}
            </>
          ) : (
            <p className="letter-density__empty">
              No characters found. Start typing to see letter density.
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default CharacterCounter;
