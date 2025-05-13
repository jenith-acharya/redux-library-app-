export const ADD_BOOK = 'ADD_BOOK';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTER = 'SET_FILTER';

export interface Book {
  id: number;
  title: string;
  category: string;
  isFavorite: boolean;
}

export type FilterType = 'ALL' | 'FAVORITES' | `CATEGORY:${string}`;

interface AddBookAction {
  type: typeof ADD_BOOK;
  payload: { title: string; category: string };
}

interface ToggleFavoriteAction {
  type: typeof TOGGLE_FAVORITE;
  payload: number;
}

interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: FilterType;
}

export type LibraryActions = AddBookAction | ToggleFavoriteAction | SetFilterAction;

// Action creators
export const addBook = (title: string, category: string): AddBookAction => ({
  type: ADD_BOOK,
  payload: { title, category }
});

export const toggleFavorite = (id: number): ToggleFavoriteAction => ({
  type: TOGGLE_FAVORITE,
  payload: id
});

export const setFilter = (filter: FilterType): SetFilterAction => ({
  type: SET_FILTER,
  payload: filter
});
