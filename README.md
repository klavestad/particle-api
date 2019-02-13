# Particle-api
> Particle-api utilizes an NodeJS express server for making the Particle Device Cloud API accessible through a RESTful API.


![screenshot of index.html](https://i.imgur.com/UDQ1gnS.png)

## Live Demonstration
Demo: [particle-api.now.sh](https://particle-api.now.sh)

## Installation

**OS X & Linux:**

```sh
git clone https://github.com/klavestad/particle-api
cd particle-api

## NPM:
npm install
node index.js

## YARN:
yarn install
yarn start
```

**Windows:**

```sh
### Coming soon..
```

## Usage examples

#### **/api**
> Returns `I'm a teapot`

#### **/api/login**
> Returns `particle user token`

#### **/api/devices**
> Returns all devices connected to the user
 
#### **/api/eventstream**
> Returns the newest event in the on-going event stream


_For more examples and usage, please see the [Particle-api-js](https://docs.particle.io/reference/SDKs/javascript/) documentatilas._


## Release History

* 0.1.0
    * The first proper release
    * CHANGE: Landing page
* 0.0.1
    * Initial upload

## Meta

Sindre Klavestad – [klave.no](https://klave.no) – sindreklavestad@gmail.com

[https://github.com/klavestad/particle-api](https://github.com/klavestad/particlie-api)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request