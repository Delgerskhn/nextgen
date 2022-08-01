FROM node:alpine as builder
ENV PORT 3000
WORKDIR /app/node/react
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

# production 
FROM nginx:stable-alpine
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/node/react/.next /usr/share/nginx/html
COPY nginx.conf /etc/nginx
EXPOSE 80
CMD ["npm","start"]