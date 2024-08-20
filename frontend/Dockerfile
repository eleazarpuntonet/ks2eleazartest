# frontend/Dockerfile

FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./frontend/frontend-files .

RUN npm run build

RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "dist"]
