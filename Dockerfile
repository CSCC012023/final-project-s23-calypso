#node version 16.x
FROM node:16 

#creates a working directory in the docker
WORKDIR /app

COPY package*.json ./

RUN npm install

#informs docker that the application listens on these 2 ports at runtime
EXPOSE 8080 3000

#copies all the code for the application into the container
COPY . .

CMD [ "node", "app.js" ]




