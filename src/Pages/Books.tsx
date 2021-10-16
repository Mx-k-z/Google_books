import React from 'react'
import { useTypeSelector } from '../Hooks/useTypeSelector'
import Form from '../Components/MainPage/Form'
import DisplayCards from '../Components/MainPage/DisplayCards'
import Loader from '../Components/MainPage/Loader'


const Books = () => {
  const { loading } = useTypeSelector(state => state.main)
  return (
    <div>
      <Form />
      <div>{!loading ? <DisplayCards /> : <Loader />}</div>
    </div>
  )
}

export default Books
