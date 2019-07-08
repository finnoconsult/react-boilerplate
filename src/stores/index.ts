import GameStore from './GameStore';

export interface Stores {
  gameStore: GameStore;
}

const gameStore = new GameStore();
const stores: Stores = {
  gameStore,
};

export default stores;
