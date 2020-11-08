import { enviroment } from "../../enviroments/enviroment";

const baseUrl = enviroment.URL;

const fetchWithoutToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;
  if(method === 'GET') {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json' 
      },
      body: JSON.stringify(data)
    });
  }
}

export {
  fetchWithoutToken,
}