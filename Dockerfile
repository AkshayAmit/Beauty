FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV CLIENT_URL=http://localhost:3000
ENV CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
ENV DATA_FILE=data/salon_state.json

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
RUN mkdir -p data && chown -R node:node /app

USER node

EXPOSE 3000

CMD ["node", "server.js"]
