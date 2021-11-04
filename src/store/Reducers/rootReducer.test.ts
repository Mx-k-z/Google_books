import { rootReducer } from './rootReducer'
import { ActionTypes, BookState } from '../../Types/types'

const state: BookState = {
  filtered: [],
  books: [],
  loading: false,
  totalCount: 0,
  title: '',
  category: 'all',
  order: 'relevance',
}

it('Получение названия книги', () => {
  let newState = rootReducer(state, {
    type: ActionTypes.GET_TITLE_BOOK,
    payload: 'JavaScript',
  })

  expect(newState.title).toEqual('JavaScript')
})

it('установка loading в true', () => {
  let newState = rootReducer(state, {
    type: ActionTypes.FETCH_BOOKS,
  })

  expect(newState.loading).toEqual(true)
})

it('Загрузка книг', () => {
  let newState = rootReducer(state, {
    type: ActionTypes.FETCH_BOOKS_SUCCESS,
    payload: [[1], [2], [3], [4], [5]],
  })

  expect(newState.books).toEqual([[1], [2], [3], [4], [5]])
})

it('Установка значения всех установленных книг', () => {
  let newState = rootReducer(state, {
    type: ActionTypes.FETCH_BOOKS_TOTALCOUNT,
    payload: 42,
  })

  expect(newState.totalCount).toEqual(42)
})

it('Фильтрация по категрии', () => {
  let newState = rootReducer(state, {
    type: ActionTypes.FILTER_BY_CATEGORY,
    payload: [1, 2, 3, 4, 5],
  })

  expect(newState.filtered).toEqual([1, 2, 3, 4, 5])
})

it('Изменение категории', () => {
  let newState = rootReducer(state, {
    type: ActionTypes.CHANGE_CATEGORY,
    payload: 'Art',
  })

  expect(newState.category).toEqual('Art')
})

it('Изменение типа сортировки', () => {
  let newState = rootReducer(state, {
    type: ActionTypes.CHANGE_ORDER,
    payload: 'newest',
  })

  expect(newState.order).toEqual('newest')
})
