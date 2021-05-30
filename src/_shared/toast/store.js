import { makeStore } from '_shared/hooks/useStore';

export const ACTION_TYPE = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
}

const initialState = {
  list: [],
}

const pageReducer = (state, action) => {
  switch(action.type) {
    case ACTION_TYPE.ADD:
      const newList = [...state.list, {
        ...action.payload,
        id: +(new Date())
      }];
      return {
        ...state,
        list: newList
      }
    case ACTION_TYPE.REMOVE:
      const removedList = state.list.filter(item => item.id !== action.payload);
      return {
        ...state,
        list: removedList
      }
    default:
      throw new Error();
  }
}

const [PageProvider, usePageDispatch, usePageStore] = makeStore(
  pageReducer,
  initialState
);

export {
  PageProvider,
  usePageDispatch,
  usePageStore,
}
