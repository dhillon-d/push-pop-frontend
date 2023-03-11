FROM node:18

WORKDIR /vite-project

COPY . .

RUN npm ci

RUN npm run build

CMD ["npx", "serve", "dist/", "-l", "5173"]