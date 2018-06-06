FROM node:8
LABEL Julian Salas juliansalas080@gmail.com

#Environment variables
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
ENV USER=desarrollo
ENV HOME_DIR=home/desarrollo
ENV SHELL=/bin/bash

# ADD yarn.lock /yarn.lock 
# ADD package.json /package.json

#Layer most-frequently changing at the end
ADD . $HOME_DIR/





