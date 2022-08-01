function ajax(url, method, callback, body={}) {
  let request = new XMLHttpRequest();
  request.overrideMimeType("application/json");
  request.open(method, url, true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status == "200") {
        callback(request.responseText);
    }
  };
  
  const parsedBody = Object.entries(body).map(([key, value]) => `${key}=${value}`).join('&');
  request.send(parsedBody);
}