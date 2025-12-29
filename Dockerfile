FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

# RUN npm i -g pnpm@latest && pnpm i

COPY . .

# Build the app
# RUN pnpm build
RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "start"]