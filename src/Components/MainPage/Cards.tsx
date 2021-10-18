import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTypeSelector } from '../../Hooks/useTypeSelector'
import { filterByCategory } from '../../store/actions'
import { filterArrayByCategory } from '../../SubsidiaryFunc/filterArrayByCategory'

const Cards: React.FC = () => {
  const router = useHistory()
  const dispatch = useDispatch()
  const { filtered, books, category } = useTypeSelector(state => state.main)

  useEffect(() => {
    if (category === 'all') {
      dispatch(filterByCategory(books))
    } else {
      dispatch(filterByCategory(filterArrayByCategory(books, category)))
    }
  }, [category, books.length])

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
                  <h4 className='card-title'>{book.volumeInfo.title}</h4>
                  <p className='card-text'>{book.volumeInfo.categories && book.volumeInfo.categories[0]}</p>
                  <p className='card-text'>{book.volumeInfo.authors && book.volumeInfo.authors.join(' ')}</p>
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
