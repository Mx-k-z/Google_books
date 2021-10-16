import React from 'react'
import Header from './Header'
import Input from './Input'

const Form: React.FC = () => {
  return (
    <>
      <div className={'main-image d-flex justify-content-center align-items-center flex-column'}>
        <Header />
        <Input />
      </div>
    </>
  )
}

export default Form
