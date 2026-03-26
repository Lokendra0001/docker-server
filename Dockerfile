FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm install pm2@latest -g
RUN npx prisma generate
EXPOSE 5001
CMD ["sh", "-c", "sleep 5 && npx prisma db push && npm run start:pm2"]