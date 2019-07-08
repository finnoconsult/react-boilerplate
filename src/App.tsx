import React from 'react';
import { observer } from 'mobx-react';

import A from './components/common/A';

import { Stores } from './stores';

interface Props {
  stores: Stores;
}

const App = observer((props: Props): JSX.Element => (
  <div>
    <A href="/index">Login</A>
    {props.stores.gameStore.allGames.map((game: string): JSX.Element => (
      <p key={game}>{game}</p>
    ))}
    <button
      type="button"
      onClick={(): void => props.stores.gameStore.addGame('Mario')}
    >
      Add game
    </button>
  </div>
));

export default App;
