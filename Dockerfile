#Stage One: Base
FROM node:19-alpine AS base
WORKDIR /app
COPY package*.json ./

#Stage Two: Final
FROM base AS final
RUN npm install --production
COPY ./
EXPOSE 3000
CMD npm start