FROM node:18

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm ci

COPY index.css index.html vite.config.js /app/

COPY src /app/src

RUN npm run build

CMD ["npx", "serve", "dist/", "-l", "5173"]