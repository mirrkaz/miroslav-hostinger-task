class ErrorLog {
  static post(err, request, path, header, res) {
    console.log(`-------- Path ----------`);
    console.log(path);

    console.log(`-------- Header ----------`);
    console.log(header);

    console.log(`-------- Request ----------`);
    console.log(JSON.stringify(request, null, 4));

    if (res) {
      if (res.data?.result) {
        console.log(`-------- Response Data Result ----------`);
        console.log(JSON.stringify(res.data.result, null, 4));
      } else if (res.data) {
        console.log(`-------- Response Data ----------`);
        console.log(JSON.stringify(res.data, null, 4));
      }
    }

    if (err.response) {
      if (err.response.data) {
        console.log(`-------- Error Response Data ----------`);
        console.dir(err.response.data, { depth: null });
      } else {
        console.log(`-------- Error Response ----------`);
        console.dir(err.response, { depth: null });
      }
    } else {
      console.log(`-------- Error ----------`);
      console.error(err);
    }
  }
}

export default ErrorLog;
