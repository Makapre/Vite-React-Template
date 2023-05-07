FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -ddd

COPY . .

EXPOSE 4711

CMD [ "npm", "run", "dev" ]
