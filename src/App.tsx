import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';

import A from './components/common/A';

import { Stores } from './stores';

// TypeScript types for props and state(s)
interface Props {
  stores: Stores;
}

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

const App = observer((props: Props): JSX.Element => {
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
  useEffect((): void => console.log('effect'), []);
  // You can put whatever changes yo want to "lsiten to" in the array: if any of the elements change, the effect is called
  // Empty array basically turns it into componentDidMount

  return (
    <div>
      {/* Styled component */}
      <A href="/index">Login</A>
      <br />

      {/* Using custom render props */}
      <button type="button" onClick={toggle}>Show/hide list</button>
      <br />
      {/* Store observable/computed getter */}
      {isOpen && props.stores.gameStore.allGames.map((game: string): JSX.Element => (
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
        onClick={(): void => props.stores.gameStore.addGame(state.newGame)}
      >
       Add game
      </button>
    </div>
  );
});

export default App;
