# Etapa de compilación
FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY ./backend-files/package*.json ./
RUN npm install

COPY ./backend-files .

RUN npm run build

# Etapa de producción
# FROM node:18-alpine

# WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm install --only=production

# COPY --from=build /usr/src/app/dist ./dist

# EXPOSE 3000

# CMD ["node", "dist/main"]
