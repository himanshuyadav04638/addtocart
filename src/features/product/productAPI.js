import axios from 'axios'
export function fetchProduct() {
  return axios.get('https://fakerapi.it/api/v1/books')
}


