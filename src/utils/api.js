import axios from 'axios';

export const AXIOS_KIT = async (method, endPoint, data) => {
  const header = {
    'Content-Type': 'application/json',
  };
  const auth = axios.create({
    baseURL: 'https://www.breakingbadapi.com',
    headers: header,
  });

  return new Promise((resolve, reject) => {
    switch (method) {
      case 'POST':
        auth
          .post(endPoint, data, header)
          .then(res => {
            resolve(res);
          })
          .catch(e => {
            reject(e.response);
          });
        break;

      case 'GET':
        auth
          .get(endPoint, header)
          .then(res => {
            resolve(res);
          })
          .catch(e => {
            reject(e.response);
          });
        break;
    }
  });
};
