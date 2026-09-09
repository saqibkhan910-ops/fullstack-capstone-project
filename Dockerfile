FROM node:20

WORKDIR /app

COPY frontend/package*.json ./frontend/

RUN cd frontend && npm install

COPY frontend ./frontend

EXPOSE 3000

CMD ["npm", "start", "--prefix", "frontend"]