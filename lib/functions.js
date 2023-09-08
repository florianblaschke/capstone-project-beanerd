export function roastsWithReducedScore(data) {
  return data.map((roast) => {
    if (roast.score.length === 0) return { ...roast, reducedScore: 0 };
    const reducedScore =
      roast.score
        .map(({ rating }) => rating)
        .reduce((acc, curr) => acc + curr, 0) / roast.score.length;
    return { ...roast, reducedScore: reducedScore };
  });
}
export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export function sortedForRating(data) {
  return data.sort((a, b) => b.reducedScore - a.reducedScore);
}
