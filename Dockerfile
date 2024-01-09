FROM node:20.10.0-alpine
WORKDIR /app
USER node

CMD ["node", "dist/src/main"]

