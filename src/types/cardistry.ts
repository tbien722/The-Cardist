export type Status = "Want to Learn" | "Learning" | "Comfortable" | "Clean";

export type Move = {
  name: string;
  category: string;
  status: Status;
  level: 0 | 1 | 2 | 3;
  color: string;
  gif: string;
  notes: string;
};