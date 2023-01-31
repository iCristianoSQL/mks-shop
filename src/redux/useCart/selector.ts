import { createSelector } from 'reselect';

interface State {
    user: {
      userName: string;
    };
  }

const userName = (state: State) => state.user.userName;

export const userLogged = createSelector(
    userName,
    (userName:string) => userName
);