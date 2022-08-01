FROM node:alpine as builder
ENV PORT 3000
WORKDIR /app/node/react
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

# production 
FROM nginx:stable-alpine
COPY --from=builder /app/node/react/.next /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g","daemon off;"]