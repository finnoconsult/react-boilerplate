import React, { useState, useEffect, useContext } from 'react';
import { observer } from 'mobx-react';

import StoreContext from '../stores';

import A from './common/A';

import { capitalize } from '../helpers/string-helpers';

// TypeScript types for props and state(s)
interface State {
  newGame: string;
}

// Custom hook
function useOpen(): [boolean, () => void] {
  const [isOpen, setIsOpen] = useState(true);
  function toggle(): void {
    setIsOpen(!isOpen);
  }
  return [isOpen, toggle];
}

const App = observer((): JSX.Element => {
  // Use the React context API to pass the stores
  const stores = useContext(StoreContext);

  const [state, setState] = useState<State>({
    newGame: '',
  });

  // You can (and should) define multiple states, and each state gets its own setter
  // They also don't have to be objects
  // const [someOtherState, setSomeOtherState] = useState('imSateToo');

  // You can use your own hooks: good reusability, and less nesting than render props
  const [isOpen, toggle] = useOpen();

  const newGameChanged = (newGame: string): void => {
    setState({ newGame });
  };

  // Cause side effects with useEffect
  // This executes after the render (like didUpdate or didMount)
  // If you want stuff to execute before (like willMount), just call the function before returning the view
  useEffect((): () => void => {
    console.log('effect');
    // This gets called before the effect is called the next time
    return (): void => console.log('cleaning up');
  }, []);
  // You can put whatever changes yo want to "lsiten to" in the array: if any of the elements change, the effect is called
  // Empty array basically turns it into componentDidMount

  return (
    <div>
      {/* Styled component */}
      <A href="/index">Login</A>
      <br />

      {/* Using custom hooks */}
      <button type="button" onClick={toggle}>Show/hide list</button>
      <br />
      {/* Store observable/computed getter */}
      {isOpen && stores.gameStore.allGames.map((game: string): JSX.Element => (
        <p key={game}>{game}</p>
      ))}

      {/* Local UI state with Reacct hooks */}
      <input
        type="text"
        value={state.newGame}
        onChange={(e): void => newGameChanged(e.target.value)}
      />

      {/* Action */}
      <button
        type="button"
        onClick={(): void => stores.gameStore.addGame(capitalize(state.newGame))}
      >
       Add game
      </button>
    </div>
  );
});

export default App;
