const BASE_URL = 'https://norma.nomoreparties.space/api';

function checkResponse (res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status)
};

function request(url, options) {
  // принимает два аргумента: урл и объект опций, как и `fetch`
  return fetch(url, options).then(checkResponse)
}

export const getIngridients = () => {
  return request(`${BASE_URL}/ingredients`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
};

export const submitOrder = (ingridients) => {

  return request(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ingredients: ingridients
    })
  })
};