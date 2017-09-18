
FROM node:8


## Environmentvariables
ENV NAME_PROJECT=library_app
ENV WORKDIR=home


# Create dir
RUN mkdir $/WORKDIR/$NAME_PROJECT

### add root project
ADD app $/WORKDIR/$NAME_PROJECT

### add package.json
ADD package.json $/WORKDIR/$NAME_PROJECT
 
RUN npm install --prefix $/WORKDIR/$NAME_PROJECT

### Install dependencies to project
#RUN cd $WORKDIR/$NAME_PROJECT && npm install 

#Work dir to development
 #$(ls | awk '{if($1 != "node_modules"){ print $1 }}')
RUN chown -R 1000:1000 $/WORKDIR/$NAME_PROJECT
WORKDIR $/WORKDIR/$NAME_PROJECT
CMD npm start
