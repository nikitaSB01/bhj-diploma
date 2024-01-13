/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  if (options) {
    const xhr = new XMLHttpRequest();
    let formData = new FormData();
    let urlObj = options.url;
    if (options.method !== "GET") {
      Object.entries(options.data).forEach(([key, value]) => {
        formData.append(key, value);
      });
    } else {
      formData = "";
      if (!urlObj.includes("/account")) {
        urlObj += "?";
        Object.entries(options.data).forEach(
          ([key, value]) => (urlObj += `${key}=${value}&`)
        );
        //? // // // // // //
        urlObj = urlObj.slice(0, -1);
      }
    }
    try {
      xhr.open(options.method, urlObj);
      xhr.send(formData);
    } catch (err) {
      options.callback(err, null);
    }
    xhr.responseType = "json";
    //? что именно => ...
    xhr.load = () => {
      options.callback(null, xhr.response);
    };
    /*   xhr.addEventListener("readystatechange", function () {
      if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
        options.callback(null, xhr.response);
      }
    }); */
  }
};