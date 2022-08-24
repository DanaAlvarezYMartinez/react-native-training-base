const initialState = {
  bookList: []
};

interface Action {
  type: string;
  data: any;
}

function reducerBook(state = initialState, action: Action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        bookList: action.data
      };

    default:
      return state;
  }
}

export default reducerBook;
