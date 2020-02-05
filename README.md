# magic-bot
### _a bot for our friends. really no use to anyone outside our playgroup._
[![follow the boys](https://img.shields.io/badge/follow%20the%20boys-blue?style=social&logo=twitter)](https://twitter.com/mandofortheboys) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)


![](https://media.wizards.com/2019/images/daily/cardart_original_Sol-Ring-2.jpg)

#### Install:

* `$ git clone https://github.com/aaronjhauck/magic-bot.git`
* `$ npm install`

#### Configure:

* install docker || install docker-compose

#### Test:

| Generate Sentence   |   Full Suite  |
|---------------------|:-------------:|
| `$ npm run local`   |  `$ npm test` |

#### Build

|   docker-compose (reccomended) |            docker              |
|--------------------------------|:------------------------------:|
| `$ docker-compose build`       |  `$ docker build -t magic-bot` |

#### Run

|   docker-compose (reccomended) |            docker              |
|--------------------------------|:------------------------------:|
| `$ docker-compose up -d`       |  `$ docker run -d magic-bot`   |

> magic-bot utilizes nodemon to deploy hot-fixes if using docker-compose
> run docker-compose up --build -d to push local changes to the container