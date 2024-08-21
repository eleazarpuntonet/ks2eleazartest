# Etapa de construcción
FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY ./frontend-vuetify/package*.json ./
RUN npm install

COPY ./frontend-vuetify .

RUN npm run build

# # Etapa de producción
# FROM nginx:alpine

# COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
