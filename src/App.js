import React, { Fragment } from 'react';
import { Routes } from 'react-static';
import Root from './Root';

function App() {
  return (
    <Root>
      <Fragment>
        <div className="content">
          <Routes />
        </div>
      </Fragment>
    </Root>
  );
}

export default App;
