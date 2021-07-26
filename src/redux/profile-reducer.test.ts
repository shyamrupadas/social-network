import profileReducer, { actions } from './profile-reducer';

const state = {
  posts: [
    { id: 1, message: 'Привет, мир!', likesCount: 5 },
    { id: 2, message: 'Ом намо бхагавате васудевайа!', likesCount: 108 },
    { id: 3, message: 'Какой-нибудь еще пост', likesCount: 1108 },
  ],
  profile: null,
  status: '',
  newPostText: ''
};

it('length of posts should be incremented', () => {
  let action = actions.addPostCreator('New post from me!')

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});

it('message of new post should be correct', () => {
  let action = actions.addPostCreator('New post from me!')

  let newState = profileReducer(state, action);

  expect(newState.posts[3].message).toBe('New post from me!');
});

it('after deleting length of messages should be decrement', () => {
  let action = actions.deletePost(1)

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});

it(`after deleting length of messages shouldn't  be decrement is id is incorrect`, () => {
  let action = actions.deletePost(10)

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});