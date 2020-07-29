import { getInitialData } from '../utils/api';
import { receiveTweets } from '../actions/tweets';
import { receiveUsers } from '../actions/users';
import {setAuthUser} from '../actions/authUser';

const AUTH_ID = 'sindu';
export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets);
      dispatch(setAuthUser(AUTH_ID)));
    });
  };
}
