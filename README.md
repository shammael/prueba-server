# Disruptive Studio

 Crypto app

## Backend

Crypto app

### Author info

Shammael Bien-Aisé
[Email](mailto:shammamnd2015@gmail.com)
[Github](https://github.com/shammael)

### Project Repo

[Github](https://github.com/shammael/prueba-server)

### Some Tech used

1. [nodeJS](https://nodejs.org/dist/latest-v18.x/docs/api/)
2. [socket.io](https://socket.io/)
3. [Typescript](https://www.typescriptlang.org/)

### Scripts

```javascript
{
  "test": "vitest",
  "dev": "nodemon",
  "build": "tsc",
  "start": "node ./build/index.js"
}
```

In this project, we use yarn

We use the class Server to handle routes, middlewares, socket connections in a very restrictives order and organized

```javascript
class Server {
  private app: Application;
  readonly port: number = parseInt(process.env.PORT!) || 3000;
  private server: http.Server;
  private io: socketIO.Server;
  private static instance: Server;

  private constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = new socketIO.Server(this.server, {
      cors: {
        origin: "*",
      },
    });
    this.middlewares();
    this.sockets();
    this.routes();
  }

  private routes() {
    this.app.use("/api/v1", calculatorRoute);
    this.app.use(errorRoute);
  }

  static getInstance(): Server {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }

  private sockets() {
    // this.io.of("/api/v1/stream").on("connection", getDataMiddleware);
    this.io.of("/api/v1/stream/metric").on("connection", getMetricMiddleware);
    this.io
      .of("/api/v1/stream/bi")
      .on("connection", (client) => getCtyptoData(client, this.io));
  }

  private middlewares() {
    this.app.use(helmet());
    this.app.use(
      cors({
        origin: "*",
      })
    );
    this.app.use(limiter);
  }

  public start(callback: () => void) {
    this.server.listen(this.port, callback);
  }
}

export default Server;
```

The index file is just simple as this 😁,**beautifull**

```javascript
const server = Server.getInstance();

server.start(() => console.log("Server running on port "));
```

### Calculator

Our calculator use a regular fetch call and can be accessed with the following endpoint

```javascript
  fetch(`/api/v1/calculator?crypto=${value.crypto}&amount=${value.amount}`)
```

the crypto can be bitcoin, ethereum and cardano, but just for validation, we can pass it other crypto
And the amount, the value we wanna pass

### Responses

* **BadRequestError**

```javascript
  {
    status: 400,
    message: 'Crypto not supported'
  }
```

* **InternalServerError**

```javascript
  {
    status: 500,
    message: 'An error have occured'
  }
```

* **Success**

```javascript
  {
    status: 200,
    anualAmount: 24562,
    cryptoPrice: 28452145,
    percentage: 4,
  }
```

The calculator are wrapped in an errorHandler Route to prevent handle error in a fancy way, very simple 😁. No need of try catch in controller anymore

```javascript
const errorHandler =
  <Request, Response>(
    fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
  ) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);
export default errorHandler;
```

### Sockets

For realtime support socket.io came to save us 🐱‍👤

First we use namespace to simulate the route handling like express js, as a route handler **/api/stream**

And let's discover our first route 😁, no, namespace, you know what ? whatever, in this context route

#### For fetching the price of every crypto

We use the binance API stream to handle stream, very easy to use and no restrictive at this moment

```javascript
io.of("/api/v1/stream/bi").on("connection", (client) => priceMiddleware(client, this.io));
```

The server expect the client to emit a symbol event where he passed a symbol. It can be btc, eth, ada and others. Things very interesting, we use a advanced feature of socket.io the room feature. If the room exist, join that client and if not create one and join that client. 😁

We use the API Binance to get crypto prices

#### /api/v1/stream/bi Responses

* **TooManyRequestError**

```javascript
  server
  .of("/api/v1/stream/bi")
  .to(btc)
  .emit('error', {
    status: 429,
    message: 'Too many request'
  })
```

* **InternalServerError**

```javascript
  server
  .of("/api/v1/stream/bi")
  .to(btc)
  .emit('error', {
    status: 500,
    message: 'An error have occurred'
  })
```

* **Success**

```javascript
 server
  .of("/api/v1/stream/bi")
  .to(btc)
  .emit(`btc-metrics`, data);
```

NB: Data is type number

#### Getting metrics Data

We use the messari.io api

```javascript
io
  .of("/api/v1/stream/metric")
  .on("connection", getMetricMiddleware)
```

We have to emit an event from the client named symbol and after every 5 seconds we fetch Data from the messari api and stream back the response to the client

#### /api/v1/stream/metric Responses

* **TooManyRequestError**

```javascript
  server
  .of("/api/v1/stream/bi")
  .to(btc)
  .emit('too-request-error', {
    status: 429,
    message: 'Too many request'
  })
```

* **InternalServerError**

```javascript
  server
  .of("/api/v1/stream/bi")
  .to(btc)
  .emit('internal-error', {
    status: 500,
    message: 'An error have occurred'
  })
```

* **Success**

```javascript
 server
  .of("/api/v1/stream/bi")
  .to(btc)
  .emit(`btc-metrics`, data);
```

***data example***

```javascript
{
  id: "sasdsadsg54fd",
  symbol: "btc",
  marketcapUSD: 0,
  percentChangeUSD1h: 4,
  percentChangeUSD24h: 10,
  realVolume24h: 35555412558,
  slug: 'bitcoin'
}
```
