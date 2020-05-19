FROM node:12-alpine
# RUN npm i -g @nestjs/cli
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["npm","run","start:prod"]