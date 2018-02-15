// async function fetchData(params) {
//   const response = await fetch('http://spatz.web-y.ru/api/v1', {
//     method: 'GET',
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     })
//   });
//   const json = await response.json();
//   console.log('json');
//   console.log(json);

//   return json;
// }


 async function fetchData(params) {
  const response = await fetch('http://spatz.web-y.ru/api/v1', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
      })
  });
  const json = await response.json();
  console.log('Запустился lang.js, смотрим переменную dataspatz');
  console.log(json);

  return json;

}

export const result = fetchData();
