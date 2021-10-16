export enum ActionTypes {
  FETCH_BOOKS = 'FETCH_BOOKS',
  FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
  FETCH_BOOKS_TOTALCOUNT = 'FETCH_BOOKS_TOTALCOUNT',
  GET_TITLE_BOOK = 'GET_TITLE_BOOK',
  FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY',
  CHANGE_CATEGORY = 'CHANGE_CATEGORY',
  CHANGE_ORDER = 'CHANGE_ORDER',
}

export interface BookState {
  filtered: Array<any>
  books: Array<any>
  loading: boolean
  totalCount: number
  title: string
  category: string
  order: string
}

interface FetchBookAction {
  type: ActionTypes.FETCH_BOOKS
}

interface FetchBookSuccessAction {
  type: ActionTypes.FETCH_BOOKS_SUCCESS
  payload: any[]
}

interface GetTitleBookAction {
  type: ActionTypes.GET_TITLE_BOOK
  payload: string
}

interface FilterByCategoryAction {
  type: ActionTypes.FILTER_BY_CATEGORY
  payload: any[]
}

interface FetchBookTotalCountAction {
  type: ActionTypes.FETCH_BOOKS_TOTALCOUNT
  payload: number
}

interface ChangeCategory {
  type: ActionTypes.CHANGE_CATEGORY
  payload: string
}

interface ChangeOrderAction {
  type: ActionTypes.CHANGE_ORDER
  payload: string
}

export interface Params {
  id: string
}

export interface IBook {
  volumeInfo?: any
}

export type BookAction =
  | FetchBookAction
  | FetchBookSuccessAction
  | FetchBookTotalCountAction
  | GetTitleBookAction
  | FilterByCategoryAction
  | ChangeCategory
  | ChangeOrderAction
