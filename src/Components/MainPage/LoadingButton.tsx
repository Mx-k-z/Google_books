import React from 'react'
import { useDispatch } from 'react-redux'
import {fetchMoreBook} from '../../store/actions'
import {useTypeSelector} from '../../Hooks/useTypeSelector'


const LoadingButton: React.FC = () => {
  const { title, books, category, order } = useTypeSelector(state => state.main)
  let dispatch = useDispatch()

  const loadMoreBook = async () => {
    await dispatch(fetchMoreBook(title, 30, books.length + 1, category, order))
  }

  return (
    <div className={'loading__button'}>
      <button type='button' className='btn btn-secondary' onClick={loadMoreBook}>
        Load more
      </button>
    </div>
  )
}

export default LoadingButton
