export const computeScore = (question, selectedValue) => {
  const index = question.options?.indexOf(selectedValue);

  //----
  console.log("selectedValue:", selectedValue);
  console.log("options:", question.options);
  console.log("index:", index);
  console.log("scoringsWeights:", question.scoringWeights);
  console.log("scoringType:", question.scoringType);
  //----

  if (typeof index !== "number" || index < 0 || !question.scoringWeights)
    return 0;

  return question.scoringType === "indirect"
    ? question.scoringWeights[question.scoringWeights.length - 1 - index] || 0
    : question.scoringWeights[index] || 0;
};
