FROM node:16-alpine as build
WORKDIR /app
COPY . .
COPY yarn.lock .

RUN yarn install --no-immutable
RUN yarn run build

# production environment
FROM nginx:stable-alpine
# Copy the build artifacts into the nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom nginx configuration
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["sh", "-c", "nginx -g 'daemon off;' && yarn run build"]