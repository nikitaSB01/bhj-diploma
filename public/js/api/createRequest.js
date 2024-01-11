/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {};

/* 

const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  if (options.method === "GET") {
    let response = xhr.response;
    let err = xhr.DONE === 4 ? null : xhr.statusText;

    let url =
      options.url +
      `?mail=${options.data.mail}&password=${options.data.password}`;

    xhr.open("GET", url);
    xhr.send();
    //?     console.log(true, url);
  } else if (options.method === "POST") {
    let response = xhr.response;
    let err = xhr.DONE === 4 ? null : xhr.statusText;

    formData = new FormData();
    formData.append("mail", options.data.mail);
    formData.append("password", options.data.password);

    xhr.open("POST", options.url);
    xhr.send(formData);
    //?     console.log(false);
  }
  //
  callback: (err, response) => {
    if (err === null) {
      console.log(err);
      console.log(response);
    } else {
      console.log(err);
    }
  };
};
const varOne = {
  url: "https://example.com",
  data: {
    mail: "ivan@biz.pro",
    password: "odinodin",
  },
  method: "GET",
};
createRequest(varOne);
*/
