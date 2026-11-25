From node:22-alpine

WORKDIR /home/app

COPY package*.json .
RUN npm install

COPy . . 

EXPOSE 5001

CMD ["node","server.js"]