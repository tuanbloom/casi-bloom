import { createContext } from "react";
import { Game } from "../model/game";

const gameContext = createContext({
  game: {} as Game,
  setGame: (game: Game) => game,
});

export default gameContext;
