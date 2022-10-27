import data from '../../mockData/product.json'

export const fakeServer = start =>
  new Promise((resolve, reject) => {
    let newArr
    newArr = data.slice(start, start+20);
    setTimeout(() => {
      resolve(newArr);
    }, 3000);
  });
