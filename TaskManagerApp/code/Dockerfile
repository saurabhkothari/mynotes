FROM --platform=linux/amd64 node:19.4.0
ENV DB_HOST=mongodb
ENV DB_PORT=27017
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]


