import React from 'react'
import Cards from './Cards'
import LoadingButton from './LoadingButton'
import {useTypeSelector} from '../../Hooks/useTypeSelector'


const DisplayCards: React.FC = () => {
  const { totalCount, books } = useTypeSelector(state => state.main)
  return (
    <div>
      {books.length &&
        <div>
          <h4 className={'info'}>Find {totalCount} results</h4>
          <Cards />
          <LoadingButton />
        </div>
      }
    </div>
  )
}

export default DisplayCards
