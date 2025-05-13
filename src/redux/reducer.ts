import { Book, FilterType, LibraryActions, ADD_BOOK, TOGGLE_FAVORITE, SET_FILTER } from './action';

interface LibraryState {
  books: Book[];
  filter: FilterType;
}

const initialState: LibraryState = {
  books: [],
  filter: 'ALL'
};

export default function libraryReducer(
  state: LibraryState = initialState,
  action: LibraryActions
): LibraryState {
  switch (action.type) {
    case ADD_BOOK:
      const newBook: Book = {
        id: Date.now(),
        title: action.payload.title,
        category: action.payload.category,
        isFavorite: false
      };
      return { ...state, books: [...state.books, newBook] };

    case TOGGLE_FAVORITE:
      return {
        ...state,
        books: state.books.map(book =>
          book.id === action.payload ? { ...book, isFavorite: !book.isFavorite } : book
        )
      };

    case SET_FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}
