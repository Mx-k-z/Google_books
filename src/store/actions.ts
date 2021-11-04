import { ActionTypes, BookAction } from '../Types/types'
import axios, { AxiosResponse } from 'axios'
import { API_KEY } from '../API_KEY'
import { Dispatch } from 'react'

const addBook = (data: any[]): any => ({
  type: ActionTypes.FETCH_BOOKS_SUCCESS,
  payload: data,
})

function setTotalCount(count: number): any {
  return {
    type: ActionTypes.FETCH_BOOKS_TOTALCOUNT,
    payload: count,
  }
}

export const changeOrder = (order: string) => ({
  type: ActionTypes.CHANGE_ORDER,
  payload: order,
})

export const changeCategory = (category: string) => ({
  type: ActionTypes.CHANGE_CATEGORY,
  payload: category,
})

export const filterByCategory = (filter: any[]): any => ({
  type: ActionTypes.FILTER_BY_CATEGORY,
  payload: filter,
})

export const getTitleBook = (title: string) => ({
  type: ActionTypes.GET_TITLE_BOOK,
  payload: title,
})

export const fetchBook = (
  bookname: string,
  maxres: number,
  startindex: number,
  category?: string,
  sorting?: string
) => {
  return async (dispatch: Dispatch<BookAction>) => {
    try {
      dispatch({ type: ActionTypes.FETCH_BOOKS })
      const res: AxiosResponse<any> = await axios.get(
        `https://www.googleapis.com/books/v1/volumes` +
          `?q=${bookname}+subject=${category}&maxResults=${maxres}` +
          `&startIndex=${startindex}&orderBy=${sorting}&key=${API_KEY}`
      )
      dispatch(addBook(res.data.items))
      dispatch(setTotalCount(res.data.totalItems))
    } catch (e) {
      console.log(e)
    }
  }
}

export const fetchMoreBook = (
  bookname: string,
  maxresult: number,
  startindex: number,
  category: string,
  sorting: string
) => {
  return async (dispatch: Dispatch<BookAction>) => {
    try {
      const res: AxiosResponse<any> = await axios.get(
        `https://www.googleapis.com/books/v1/volumes` +
          `?q=${bookname}+subject=${category}&maxResults=${maxresult}` +
          `&startIndex=${startindex}&orderBy=${sorting}&key=${API_KEY}`
      )
      dispatch(addBook(res.data.items))
      dispatch(setTotalCount(res.data.totalItems))
    } catch (e) {
      console.log(e)
    }
  }
}
