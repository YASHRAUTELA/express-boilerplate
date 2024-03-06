FROM node:20.11.1

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

COPY build .

EXPOSE 3000

CMD [ "npm", "start" ]
