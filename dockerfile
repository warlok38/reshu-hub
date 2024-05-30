FROM  huecker.io/library/node:16 as build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# Use Nginx as the production server
FROM huecker.io/library/nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]