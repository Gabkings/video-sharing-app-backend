FROM node:lts-alpine
WORKDIR /usr/src/app
COPY video-sharing-app-backend/package*.json ./
RUN npm install
COPY video-sharing-app-backend ./
RUN ls -l
CMD ["npm", "run", "prod"]
