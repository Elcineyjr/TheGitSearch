import github from './api';

export function search(username) {
  return github.get(`search/users?q=${username}`);
}

export function getUser(username) {
  return github.get(`users/${username}`);
}
