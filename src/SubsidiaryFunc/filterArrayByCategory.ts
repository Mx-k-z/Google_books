export const filterArrayByCategory = (books: any[], category: string) => {
  let replace: number = 123
  let book = books.map(book => (book.volumeInfo.categories !== undefined ? book : replace))
  let filteredBooks = book.filter(book => book.volumeInfo)
  return filteredBooks.filter(book => book.volumeInfo.categories.includes(category))
}
