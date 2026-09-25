import { useEffect, useState } from "react";
import {
  getLetterDensity,
  getSentenceCount,
  getTotalCharacters,
  getWordCount,
} from "../utils/helpers";

export type LetterDensityValue = {
  letter: string;
  number: number;
  percentage: string;
};

export const useCharacterCounter = () => {
  const [textArea, setTextArea] = useState<string>("");
  const [textError, setTextError] = useState<string>("");
  const [isSpaceExclude, setIsSpaceExclude] = useState<boolean>(false);
  const [isCharLimit, setIsCharLimit] = useState<boolean>(false);
  const [charLimit, setCharLimit] = useState<number>(300);

  const [totalChar, setTotalChar] = useState<number>(0);
  const [wordCount, setWordCount] = useState<number>(0);
  const [sentenceCount, setSentenceCount] = useState<number>(0);

  const [letterDensity, setLetterDensity] = useState<LetterDensityValue[] | []>(
    [],
  );

  const handleGetText = (
    e: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
  ) => {
    const textValue = e.target.value;
    setTextArea(textValue);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    if (e.target.name === "excludeSpaces") {
      setIsSpaceExclude(e.target.checked);
    }
    if (e.target.name === "useCharacterLimit") {
      setIsCharLimit(e.target.checked);
    }
  };

  useEffect(() => {
    const getTotal = () => {
      // Total characters
      setTotalChar(getTotalCharacters(textArea, isSpaceExclude) ?? 0);

      // Total word count
      setWordCount(getWordCount(textArea) ?? 0);

      // Total sentence
      setSentenceCount(getSentenceCount(textArea) ?? 0);
    };

    const checkCharLimit = () => {
      if (isCharLimit) {
        const charNumber = getTotalCharacters(textArea, isSpaceExclude) ?? 0;

        if (charNumber > charLimit) {
          return setTextError(
            "Limit reached! Your text exceeds 300 characters.",
          );
        }
      }

      setTextError("");
      getTotal();
    };

    checkCharLimit();
  }, [textArea, isSpaceExclude, isCharLimit, charLimit, textError]);

  useEffect(() => {
    const getDensity = () => {
      setLetterDensity(getLetterDensity(textArea) ?? []);
    };
    getDensity();
  }, [textArea]);

  return {
    totalChar,
    wordCount,
    sentenceCount,
    isSpaceExclude,
    isCharLimit,
    charLimit,
    textError,
    letterDensity,
    setTotalChar,
    setIsSpaceExclude,
    setCharLimit,
    handleGetText,
    handleInputChange,
  };
};
