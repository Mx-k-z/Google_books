import React from 'react'
import Cards from './Cards'
import LoadingButton from './LoadingButton'
import {useTypeSelector} from '../../Hooks/useTypeSelector'


const DisplayCards: React.FC = () => {
  const { totalCount, books } = useTypeSelector(state => state.main)
  return (
    <div>
      {books.length ?
        <div>
          <h4 className={'info__results'}>Find {totalCount} results</h4>
          <Cards />
          <LoadingButton />
        </div> : <h1 className={'header__empty__body'}>Start searching for books...</h1>
      }
    </div>
  )
}

export default DisplayCards
