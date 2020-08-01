/* eslint no-use-before-define: ["error", { "functions": false }] */
import LightTheme from '~/style/themes/light';
import DarkTheme from '~/style/themes/dark';

const INITIAL_STATE = {
  theme: LightTheme,
};

const strategies = {
  '@theme/TOGGLE_THEME': toggleTheme,
  __default__: (state) => state,
};

export default function themeReducer(state = INITIAL_STATE, action) {
  const transformer = strategies[action.type] || strategies.__default__;
  return transformer(state, action);
}

function toggleTheme(state, action) {
  const newTheme = state.theme.title === 'light' ? DarkTheme : LightTheme;
  return { ...state, theme: newTheme };
}
