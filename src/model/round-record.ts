export type RoundRecord = {
  id: string;
  winnerId: string;
  results: RoundResult[];
};

export type RoundResult = {
  playerId: string;
  point: number;
};
