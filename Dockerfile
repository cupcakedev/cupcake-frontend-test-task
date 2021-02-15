FROM node:14.15.4-alpine
RUN npm install pm2 -g
WORKDIR /usr/app
COPY . .
RUN yarn install --pure-lockfile --non-interactive
EXPOSE 3000
RUN yarn build
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]