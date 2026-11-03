export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  { id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕", minutes: 35, difficulty: "Medium", cuisine: "Italian" },
  { id: "veg-biryani", title: "Veg Biryani", emoji: "🍛", minutes: 60, difficulty: "Hard", cuisine: "Indian" },
  { id: "avocado-toast", title: "Avocado Toast", emoji: "🥑", minutes: 10, difficulty: "Easy", cuisine: "American" },
  { id: "sushi-rolls", title: "Sushi Rolls", emoji: "🍣", minutes: 50, difficulty: "Hard", cuisine: "Japanese" },
  { id: "tacos", title: "Street Tacos", emoji: "🌮", minutes: 25, difficulty: "Easy", cuisine: "Mexican" },
  { id: "pad-thai", title: "Pad Thai", emoji: "🍜", minutes: 30, difficulty: "Medium", cuisine: "Thai" },
  { id: "pancakes", title: "Fluffy Pancakes", emoji: "🥞", minutes: 20, difficulty: "Easy", cuisine: "American" },
  { id: "greek-salad", title: "Greek Salad", emoji: "🥗", minutes: 15, difficulty: "Easy", cuisine: "Greek" },
];
