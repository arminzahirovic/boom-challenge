import { GameStoreSelectors } from "src/app/root-store";
import { initialGameState } from "src/app/root-store/game-store/state";
import { boardMock } from "./board";

  export const selectorsMock = [
    { 
      selector: GameStoreSelectors.cells,
      value: initialGameState 
    },
    {
      selector: GameStoreSelectors.numberOfPlays,
      value: 0,
    },
    {
      selector: GameStoreSelectors.consecutiveBombs,
      value: 0,
    },
    {
      selector: GameStoreSelectors.consecutiveSmileys,
      value: 0,
    },
    {
      selector: GameStoreSelectors.bombsAround,
      value: 0,
    },
    {
      selector: GameStoreSelectors.smileysAround,
      value: 0,
    },
    {
      selector: GameStoreSelectors.isFinished,
      value: false,
    },
    {
      selector: GameStoreSelectors.isInProgress,
      value: false,
    },
    {
      selector: GameStoreSelectors.losses,
      value: 0,
    },
    {
      selector: GameStoreSelectors.wins,
      value: 0,
    },
    {
      selector: GameStoreSelectors.result,
      value: undefined,
    }
  ];