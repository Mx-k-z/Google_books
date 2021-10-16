import axios from 'axios'

export async function getById(id: string) {
  return await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
}

export const fetchCurrentBook = (call: any) => {
  return async (...args: any) => {
    try {
      await call(...args)
    } catch (e) {
      console.log(e)
    }
  }
}
