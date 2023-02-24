exports.sayHello = (req, res) => {
    const response = {
      message: 'Hi Brachio'
    };
  
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  };