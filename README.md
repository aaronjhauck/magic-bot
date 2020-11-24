# magic-bot
### _a bot for our friends. really no use to anyone outside our playgroup._
[![follow the boys](https://img.shields.io/badge/follow%20the%20boys-blue?style=social&logo=twitter)](https://twitter.com/mandofortheboys)


![](https://media.wizards.com/2019/images/daily/cardart_original_Sol-Ring-2.jpg)

#### Install:

* `$ git clone https://github.com/aaronjhauck/magic-bot.git`
* `$ npm install`

#### Configure:

* install docker
* install docker-compose


#### Build:

|        docker-compose **       |            docker              |
|--------------------------------|:------------------------------:|
| `$ docker-compose build`       |  `$ docker build -t magic-bot` |

#### Run:

|        docker-compose **       |            docker              |
|--------------------------------|:------------------------------:|
| `$ docker-compose up -d`       |  `$ docker run -d magic-bot`   |

** reccomended

> IMPORTANT: 
> 
> magic-bot utilizes nodemon to deploy hot-fixes if using docker-compose
>
> run `$ docker-compose up --build -d` to push local changes to the container