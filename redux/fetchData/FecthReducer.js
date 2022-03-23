import * as t from './FetchTypes'

const initialState = {
  users: [],
  loading: false,
  error: '',
  searchUser: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.FETCH_USER_REQUEST:
      return { ...state, loading: true }
    case t.FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      }
    case t.FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      }
    case t.ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      }
    case t.EDIT_USER:
      // const data = state.users
      // const newData = state.users.splice(action.datas, 0, action.payload)
      return {
        ...state,
        users: [
          // { title: 'some other title', text: 'some other text' },
          ...state.users.slice(0, action.datas),
          ...state.users.slice(action.datas + 1),
          ...state.users.splice(action.datas, 0, action.payload),
          ...state.users.slice(0, action.datas),
          ...state.users.slice(action.datas + 1),
        ],
      }
    case t.DELETE_USER:
      return {
        ...state,
        users: [
          ...state.users.slice(action.payload, 1),
          // ...state.users.slice(0, action.payload),
          // ...state.users.slice(action.payload + 1),
        ],
      }
    case t.SEARCH_USER:
      return {
        ...state,
        searchUser: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
