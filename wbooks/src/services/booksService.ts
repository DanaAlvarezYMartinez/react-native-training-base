// import api from "src/config/api";
import { BOOKS_MOCK } from '@constants/mockBooks';

// API is down so i mcoked the data
// const booksService = () => api.get('/books');

// const getBooks = async () => {
//     await booksService().then(response => console.log(response.data.results));
//   };

const booksService = () => Promise.resolve(BOOKS_MOCK);

const getBooks = async () => {
  await booksService().then(response => console.log(response));
};

export default getBooks;
