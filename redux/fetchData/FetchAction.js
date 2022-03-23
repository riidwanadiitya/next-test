import axios from 'axios'
import * as t from './FetchTypes'

export const fetchUserRequest = () => {
  return {
    type: t.FETCH_USER_REQUEST,
  }
}

export const fetchUserSuccess = (users) => {
  return {
    type: t.FETCH_USER_SUCCESS,
    payload: users,
  }
}

export const fetchUserFailure = (error) => {
  return {
    type: t.FETCH_USER_FAILURE,
    payload: error,
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest)
    axios
      .get(`https://randomuser.me/api/?results=3`)
      .then((response) => {
        const users = response.data.results
        dispatch(fetchUserSuccess(users))
      })
      .catch((error) => {
        const errorMsg = 'Koneksi gagal'
        dispatch(fetchUserFailure(errorMsg))
      })
  }
}

export const addNewUser = (data) => {
  return {
    type: t.ADD_NEW_USER,
    payload: data,
  }
}

export const editUser = () => {
  return {
    type: t.EDIT_USER,
  }
}

export const deleteUser = (data, index) => {
  return {
    type: t.DELETE_USER,
    payload: data,
    datas: index,
  }
}

export const searchUser = (text) => {
  return {
    type: t.SEARCH_USER,
    payload: text,
  }
}
