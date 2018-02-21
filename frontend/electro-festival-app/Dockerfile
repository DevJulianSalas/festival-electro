FROM node:8
MAINTAINER Julian Salas juliansalas080@gmail.com


ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

ADD yarn.lock /yarn.lock 
ADD package.json /package.json

RUN yarn

WORKDIR /app

#Layer most-frequently changing at the end
ADD . /app


ENTRYPOINT ["/bin/bash", "/app/run.sh"]
CMD ["start"]



