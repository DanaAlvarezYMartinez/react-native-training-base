import { bookProps } from '@app/components/AppNavigator';

export interface State {
  book: { bookList: bookProps[]; booksListLoading: boolean; booksListError: null | string };
}
