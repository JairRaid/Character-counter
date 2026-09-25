export const getTotalCharacters = (
  text: string,
  isExcludeSpace: boolean = false,
) => {
  if (typeof text === "string") {
    const splitChar = text.split("");

    if (isExcludeSpace) return splitChar.filter((c) => c !== " ").length;

    return splitChar.length;
  }
};

export const getWordCount = (text: string) => {
  if (typeof text === "string") {
    if (text === " ") return 0;

    const splitWord = text.trim().split(" ").filter(Boolean);

    return splitWord.length;
  }
};

export const getSentenceCount = (text: string) => {
  if (typeof text === "string") {
    const splitSentence = text
      .trim()
      .split(/[.!?]+(?=\s|$)/)
      .map((sentence) => sentence.trim())
      .filter(Boolean);

    return splitSentence.length;
  }
};

export const getLetterDensity = (text: string) => {
  if (typeof text === "string") {
    const chars = text
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "")
      .split("")
      .filter(Boolean);
    const uniqueChars = [...new Set(chars)];

    const uniqueCharsNumber = uniqueChars.map((char) => ({
      letter: char,
      number: chars.filter((c) => c === char).length,
    }));

    const totalUniqueChars = uniqueCharsNumber.reduce(
      (prev, curr) => prev + curr.number,
      0,
    );

    const charsDensity = uniqueCharsNumber.map((c) => ({
      ...c,
      percentage: ((c.number * 100) / totalUniqueChars).toFixed(2),
    }));

    return charsDensity.sort((a, b) => b.number - a.number);
  }
};
