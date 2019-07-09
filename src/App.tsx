import React, { useState } from 'react';
import { observer } from 'mobx-react';

import A from './components/common/A';

import { Stores } from './stores';

interface Props {
  stores: Stores;
}

// interface State {
//   newGame: string;
// }

const App = observer((props: Props): JSX.Element => {
  const [state, setState] = useState({
    newGame: '',
  });

  const newGameChanged = (newGame: string): void => {
    setState({ newGame });
  };

  return (
    <div>
      {/* Styled component */}
      <A href="/index">Login</A>
      <br />

      {/* Store observable/computed getter */}
      {props.stores.gameStore.allGames.map((game: string): JSX.Element => (
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
