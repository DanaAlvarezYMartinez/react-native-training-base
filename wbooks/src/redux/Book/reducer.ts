const initialState = {
  bookList: []
};

interface Action {
  type: string;
  data: any;
}

export function books(state = initialState, action: Action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return action.data;

    default:
      return state;
  }
}
