# Build stage for frontend
FROM node:18-alpine AS client-build

WORKDIR /app/client

COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# Runtime stage
FROM node:18-alpine

WORKDIR /app

# Install backend dependencies
COPY server/package*.json ./server/
RUN cd server && npm install --production

# Copy backend code
COPY server/ ./server/

# Copy frontend build from previous stage
COPY --from=client-build /app/client/build ./client/build

EXPOSE 5000

ENV NODE_ENV=production

CMD ["node", "server/server.js"]