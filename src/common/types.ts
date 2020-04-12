export type Votes = {
  [key: string]: number;
};

export type Character = {
  id: string;
  imageUrl: string;
  name: string;
  category: string;
  createdAt: string;
  description: string;
  votes: {
    up: number;
    down: number;
  };
};
