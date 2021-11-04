import { ActionTypes, BookAction, BookState } from '../../Types/types'

const bookDefState: BookState = {
  filtered: [],
  books: [],
  loading: false,
  totalCount: 0,
  title: '',
  category: 'all',
  order: 'relevance',
}

export const rootReducer = (state = bookDefState, action: BookAction) => {
  switch (action.type) {
    case ActionTypes.GET_TITLE_BOOK:
      return {
        ...state,
        title: action.payload,
        books: [],
        filtered: [],
      }
    case ActionTypes.FETCH_BOOKS:
      return {
        ...state,
        loading: true,
        books: [...state.books],
      }
    case ActionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: [...state.books, ...action.payload],
      }
    case ActionTypes.FETCH_BOOKS_TOTALCOUNT:
      return { ...state, totalCount: action.payload }
    case ActionTypes.FILTER_BY_CATEGORY:
      return { ...state, filtered: [...action.payload] }
    case ActionTypes.CHANGE_CATEGORY:
      return { ...state, category: action.payload }
    case ActionTypes.CHANGE_ORDER:
      return { ...state, order: action.payload }
    default:
      return state
  }
}
