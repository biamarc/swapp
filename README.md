# Simple Web App
This is a simple web application that do nothing.

It was created only for testing purposes.

## Endpoint

The app has only 3 endpoint:

* /hello?name=Someone: the endpoint respond with status 200 and text/plain message: "Hello Someone"; change the value of query parmater name to change the printed name
* /health: endpoint used to retrieve status
* /: the root endpoint give minimal explanation to use the app 


## Usage

Run in dev-mode:
```sh
 npm run dev
```

Build application
```sh
npm run build
```
