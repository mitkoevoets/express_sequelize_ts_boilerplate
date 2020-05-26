FROM node:14.2-alpine

WORKDIR /home/node

COPY . /home/node

RUN npm install


CMD ["npm", "run", "start"]
