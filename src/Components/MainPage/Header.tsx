import React from 'react'

const Header: React.FC = () => {
  return (
    <>
      <div className='overlay' />
      <h1 className='display-2 text-center text-white mb-3' style={{ zIndex: 2 }}>
        Google Books
      </h1>
    </>
  )
}

export default Header
