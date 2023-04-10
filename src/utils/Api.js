const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';

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
  return request(BASE_URL, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
};