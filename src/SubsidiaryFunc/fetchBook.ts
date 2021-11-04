import axios from 'axios'

export async function getById(id: string) {
  return await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
}
