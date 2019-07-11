import { createContext } from 'react';
import GameStore from './GameStore';

export interface Stores {
  gameStore: GameStore;
}

const gameStore = new GameStore();
const stores: Stores = {
  gameStore,
};

// Use the React context API so that the stores are available anywhere in the app
export default createContext(stores);
