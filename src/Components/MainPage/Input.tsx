import React, { FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import {useTypeSelector} from '../../Hooks/useTypeSelector'
import {fetchBook, getTitleBook} from '../../store/actions'
import Select from './Select'

const Input: React.FC = () => {
  const dispatch = useDispatch()
  const { title, category, order } = useTypeSelector(state => state.main)

  const bookRequestHandler = (e: FormEvent) => {
    e.preventDefault()
    if (!title) {
      alert('Пустая строка')
      return null
    }
    dispatch(fetchBook(title, 30, 1, category, order))
  }

  return (
    <>
      <div style={{ width: '60%', zIndex: 2 }}>
        <form onSubmit={bookRequestHandler}>
          <div className='mb-3 input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Search Book...'
              value={title}
              onChange={event => dispatch(getTitleBook(event.target.value))}
            />
            <button className={'btn btn-primary'} type={'submit'}>
              Search
            </button>
          </div>
        </form>
        <Select />
      </div>
    </>
  )
}

export default Input
