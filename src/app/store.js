import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import postsReducer from './slices/postsSlice';

const saveStore = (state) => {
  // сохранение хранилища
  try {
    const serializedState = JSON.stringify(state);
    
    sessionStorage.setItem('appState', serializedState);
  } catch(error) {
    console.log(error);
  }
};
const loadState = () => {
  // загрузка старого хранилища
  try {
    const serializedState = sessionStorage.getItem('appState');

    if(!serializedState) return undefined;

    return JSON.parse(serializedState);
  } catch(error) {
    return undefined;
  }
};

const oldState = loadState(); // старое хранилище

const store = configureStore({
  reducer: postsReducer,
  middleware: [thunk, logger],
  preloadedState: oldState
});

store.subscribe(() => {
  saveStore(store.getState());
});

export default store;
