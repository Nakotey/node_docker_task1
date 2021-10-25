# syntax=docker/dockerfile:1

FROM node:alpine as  base
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

FROM base as test
RUN npm ci
RUN npm install -g mocha
COPY . .
CMD [ "npm", "run", "test" ]


FROM base as prod
RUN npm ci --production
RUN npm install -g nodemon
COPY . .
CMD [ "nodemon", "./bin/www" ]



