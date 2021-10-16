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
        loading: false,
        totalCount: state.totalCount,
        title: action.payload,
        category: state.category,
        order: state.order,
        books: [],
        filtered: [],
      }
    case ActionTypes.FETCH_BOOKS:
      return {
        ...state,
        loading: true,
        totalCount: state.totalCount,
        category: state.category,
        order: state.order,
        title: state.title,
        books: [...state.books],
      }
    case ActionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        totalCount: state.totalCount,
        title: state.title,
        category: state.category,
        order: state.order,
        books: [...state.books, ...action.payload],
      }
    case ActionTypes.FETCH_BOOKS_TOTALCOUNT:
      return {
        ...state,
        loading: false,
        totalCount: action.payload,
        category: state.category,
        order: state.order,
        title: state.title,
        books: [...state.books],
      }
    case ActionTypes.FILTER_BY_CATEGORY:
      return {
        ...state,
        loading: false,
        totalCount: state.totalCount,
        title: state.title,
        category: state.category,
        order: state.order,
        books: [...state.books],
        filtered: [...action.payload],
      }
    case ActionTypes.CHANGE_CATEGORY:
      return {
        ...state,
        loading: false,
        totalCount: state.totalCount,
        title: state.title,
        category: action.payload,
        order: state.order,
        books: [...state.books],
        filtered: [...state.filtered],
      }
    case ActionTypes.CHANGE_ORDER:
      return {
        ...state,
        loading: false,
        totalCount: state.totalCount,
        title: state.title,
        category: state.category,
        order: action.payload,
        books: [...state.books],
        filtered: [...state.filtered],
      }
    default:
      return state
  }
}
