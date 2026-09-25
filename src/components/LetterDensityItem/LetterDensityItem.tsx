import type { LetterDensityValue } from "../../hooks/useCharacterCounter";
import "./LetterDensityItem.css";

const LetterDensityItem = ({
  letter,
  number,
  percentage,
}: LetterDensityValue) => {
  const letterUp = letter.toUpperCase();
  return (
    <li className="letter-density__item">
      <span className="letter-density__letter" aria-hidden="true">
        {letterUp}
      </span>

      <div className="letter-density__meter">
        <progress
          className="letter-density__progress"
          value={percentage}
          max="100"
          aria-label={`Letter ${letterUp} density: ${percentage} percent`}
        >
          16.06%
        </progress>
      </div>

      <p className="letter-density__value">
        <span>{number}</span>&nbsp;
        <span>({percentage}%)</span>
      </p>
    </li>
  );
};

export default LetterDensityItem;
