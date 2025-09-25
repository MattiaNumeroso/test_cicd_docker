FROM node:18

# Create app directory
WORKDIR /usr/src/app

Copy package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]