FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["http-server", "dist", "-p", "8080", "--proxy", "http://localhost:8080?", "-c-1", "--history-api-fallback"]