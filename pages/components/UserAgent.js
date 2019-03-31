import React, { Component, createContext } from 'react';

const UserAgent = createContext({
  result: {},
});

export default UserAgent;

export const withUserAgent = WrappedComponent => {
  return class WithUserAgent extends Component {
    render() {
      return (
        <UserAgent.Consumer>
          {userAgent => <WrappedComponent {...this.props} userAgent={userAgent} />}
        </UserAgent.Consumer>
      );
    }
  };
};
