FROM node:8
MAINTAINER Julian Salas juliansalas080@gmail.com


# Create homeroot path

RUN mkdir /home/app

RUN npm install nodemon -g

ADD ./app/package.json /home/app/package.json


WORKDIR /home/app

RUN npm install

ADD ./app/nodedemon.json /home/app/nodemon.json


CMD npm start