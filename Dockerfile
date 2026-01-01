FROM node:18-alpine

WORKDIR /app

COPY app/package*.json ./
RUN npm install

COPY app/ .

COPY Dockerfile .
COPY jenkinsfile .

EXPOSE 3000

CMD ["npm", "run", "start"]
