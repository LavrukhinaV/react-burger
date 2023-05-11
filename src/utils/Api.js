const BASE_URL = 'https://norma.nomoreparties.space/api';

function checkResponse (res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status)
};

function request(url, options) {
  return fetch(url, options).then(checkResponse)
}

export const getIngredients = () => {
  return request(`${BASE_URL}/ingredients`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
};

export const submitOrder = (ingredients) => {
  return request(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ingredients: ingredients
    })
  })
};