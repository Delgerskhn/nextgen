FROM node:alpine as builder
ENV PORT 3000
WORKDIR /app/node/react
COPY package*.json ./
COPY . .
RUN npm install
RUN npx prisma generate
RUN npm run prisma:migrate:dev
RUN npm run build

# production 
FROM nginx:stable-alpine
COPY --from=builder /app/node/react/.next /app/node/react
EXPOSE 3000
CMD ["npm","start"]