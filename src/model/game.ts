import { Player } from "./player";
import { RoundRecord } from "./round-record";

export type Game = {
  id: string;
  date: Date;
  active: boolean;
  players: Player[];
  rounds: Array<RoundRecord>;
};
