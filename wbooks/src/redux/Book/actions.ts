export function getBooks(books: any) {
  return {
    type: 'GET_BOOKS',
    books
  };
}
