import usersReducer, { actions, InitialStateType } from './users-reducer';

test('', () => {

  const state: InitialStateType = {
    users: [
      {
        id: 0, name: 'Name 0', followed: false,
        photos: {large: null, small: null}, status: 'status 0'
      },
      {
        id: 1, name: 'Name 1', followed: false,
        photos: {large: null, small: null}, status: 'status 1'
      },
      {
        id: 2, name: 'Name 2', followed: true,
        photos: {large: null, small: null}, status: 'status 2'
      },
      {
        id: 3, name: 'Name 3', followed: true,
        photos: {large: null, small: null}, status: 'status 3'
      },
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
  };

  const newState = usersReducer(state, actions.followSuccess(1))

  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeTruthy();

})