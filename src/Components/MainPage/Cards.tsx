import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTypeSelector } from '../../Hooks/useTypeSelector'
import { filterByCategory } from '../../store/actions'
import { filterArrayByCategory } from '../../SubsidiaryFunc/filterArrayByCategory'

const Cards: React.FC = () => {
  const { filtered, books, category } = useTypeSelector(state => state.main)
  const router = useHistory()
  const dispatch = useDispatch()

  const memoizedFilteredArr = useCallback(
    (books: any[], category: string) => filterArrayByCategory(books, category),
    []
  )

  useEffect(() => {
    if (category === 'all') {
      dispatch(filterByCategory(books))
    } else {
      dispatch(filterByCategory(memoizedFilteredArr(books, category)))
    }
  }, [category, books.length, dispatch, memoizedFilteredArr])

  return (
    <div className='row row-cols-2 row-cols-md-5 g-3 mx-3'>
      {filtered &&
        (filtered as Array<any>).map(book => {
          return (
            <div className='col' key={book.id}>
              <div className='card'>
                <img
                  src={`${book.volumeInfo.imageLinks?.thumbnail && book.volumeInfo.imageLinks.thumbnail}`}
                  className='card-img-top card__image'
                  alt=''
                />
                <div className='card-body text-secondary'>
                  <h4 className='card-title'>{book.volumeInfo.title.slice(0, 23) + '...'}</h4>
                  <p className='card-text'>
                    {book.volumeInfo.categories ? book.volumeInfo.categories[0] : 'Without Category'}
                  </p>
                  <p className='card-text'>
                    {book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Without Authors'}
                  </p>
                  <button className={'btn btn-secondary'} onClick={() => router.push(`/book/${book.id}`)}>
                    About
                  </button>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Cards
