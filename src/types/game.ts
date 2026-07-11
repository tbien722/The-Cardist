export type Difficulty = "Easy" | "Medium" | "Hard";

export type Game = {
  name: string;
  category: string;
  players: string;
  rating: number;
  color: string;
  rules: string;
  difficulty: Difficulty;
};