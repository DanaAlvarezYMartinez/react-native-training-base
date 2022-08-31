// import api from "src/config/api";
import { BOOKS_MOCK } from '@constants/mockBooks';

export const getBooks = () => Promise.resolve({ ok: true, data: BOOKS_MOCK }) as Promise<any>;
