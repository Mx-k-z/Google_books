import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getById } from '../SubsidiaryFunc/fetchBook'
import { IBook, Params } from '../Types/types'
import InfoAboutBook from '../Components/CurrentBook/InfoAboutBook'
import Description from '../Components/CurrentBook/Description'
import Loader from '../Components/MainPage/Loader'

const BookPage = () => {
  const historyBrowser = useHistory()
  const params: Params = useParams()
  const [loadBook, setLoadBook] = useState<boolean>(true)
  const [bookInfo, setBookInfo] = useState<IBook>({ volumeInfo: '' })

  const fetchSpecificBook = useCallback(async (id: string) => {
    const res = await getById(id)
    setBookInfo(res.data)
    setLoadBook(false)
  }, [])

  useEffect(() => {
    fetchSpecificBook(params.id)
  }, [params.id, fetchSpecificBook])

  return (
    <div className={'book__page'}>
      {!loadBook ? (
        <>
          <div className={'container__book'}>
            <img
              className={'book_img'}
              src={bookInfo.volumeInfo.imageLinks && bookInfo.volumeInfo.imageLinks.thumbnail}
              alt={bookInfo.volumeInfo.title}
            />
            <div className={'bookInfo__book'}>
              <h1 style={{ marginBottom: '10px' }}>{bookInfo.volumeInfo.title}</h1>
              <InfoAboutBook bookInfo={bookInfo.volumeInfo.categories} title={'Categories'} />
              <InfoAboutBook bookInfo={bookInfo.volumeInfo.authors} title={'Authors'} />
              <Description bookInfo={bookInfo.volumeInfo.description} title={'Description'} />
            </div>
          </div>
          <button type={'button'} className={'btn btn-success back__button'} onClick={historyBrowser.goBack}>
            Back
          </button>
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default BookPage
