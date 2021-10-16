import React from 'react'
import { useDispatch } from 'react-redux'
import { changeCategory, changeOrder } from '../../store/actions'

const Select = () => {
  const dispatch = useDispatch()

  const filterByCategories = (e: any) => {
    dispatch(changeCategory(e.target.value))
  }

  const orderHandler = (e: any) => {
    dispatch(changeOrder(e.target.value))
  }

  return (
    <>
      <div className='d-flex align-items-center justify-content-space-around text-white select__container'>
        <span style={{ fontSize: '1.2rem', padding: '0 10px' }}>Categories</span>
        <select className='form-select' onClick={filterByCategories}>
          <option defaultValue={'All'}>all</option>
          <option value='Art'>art</option>
          <option value='Biography'>biography</option>
          <option value='Computers'>computers</option>
          <option value='History'>history</option>
          <option value='Medical'>medical</option>
          <option value='Poetry'>poetry</option>
        </select>
        <span className={'label'}>Sorting by</span>
        <select className='form-select' onClick={orderHandler}>
          <option defaultValue={'relevance'}>relevance</option>
          <option value='newest'>newest</option>
        </select>
      </div>
    </>
  )
}

export default Select
