import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { fetchCurrentBook, getById } from '../SubsidiaryFunc/fetchBook'
import { IBook, Params } from '../Types/types'
import InfoAboutBook from '../Components/CurrentBook/InfoAboutBook'
import Description from '../Components/CurrentBook/Description'

const BookPage = () => {
  const historyBrowser = useHistory()
  const params: Params = useParams()
  const [bookInfo, setBookInfo] = useState<IBook>({
    volumeInfo: '',
  })

  let fetchSpecificBook = fetchCurrentBook(async (id: string) => {
    const res = await getById(id)
    setBookInfo(res.data)
  })

  useEffect(() => {
    fetchSpecificBook(params.id)
  }, [])

  return (
    <div>
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
      <button type={'button'} className={'btn btn-secondary back__button'} onClick={historyBrowser.goBack}>
        Back
      </button>
    </div>
  )
}

export default BookPage
