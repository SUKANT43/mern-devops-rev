#use node.js image
FROM node:18

#set the working directory in the container
WORKDIR /user/src/app


#./ this stands for WORKDIR /user/src/app this path
COPY package.json ./

#run the npm install file
RUN npm install

#this is for copying the whole file on this folder
COPY . .


# exposing my port
EXPOSE 5000

CMD ["npm","start"]

#docker run -p 5000:5000  backend
#docker network create mern-network -->create network for communicating backend and frontend
# docker run --name backend --network mern-network -p 5000:5000 mern-backend
# docker run --name mongo --network mern-network -p 2017:2017 mongo