FROM keymetrics/pm2:latest-alpine

# Bundle APP files
COPY app.js .
COPY package.json .
COPY ecosystem.config.js .

# Install app dependencies
RUN npm install 

# Expose the listening port of your app
EXPOSE 3000

# Show current folder structure in logs
RUN ls -al -R

CMD [ "pm2", "start", "ecosystem.config.js" ]