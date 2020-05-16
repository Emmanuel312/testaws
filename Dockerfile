FROM node:alpine
RUN npm i -g @nestjs/cli
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .

EXPOSE 3000
CMD ["npm","run","delploy"]