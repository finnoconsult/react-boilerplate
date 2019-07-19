import { createContext } from 'react';
import UIStore from './UIStore';

export interface Stores {
  ui: UIStore;
}

const uiStore = new UIStore();
const stores: Stores = {
  ui: uiStore,
};

// Use the React context API so that the stores are available anywhere in the app
export default createContext(stores);
