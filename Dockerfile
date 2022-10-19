# stage 1

#FROM node:16.15.1-slim AS builder
FROM nikolaik/python-nodejs:python3.10-nodejs16-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y make build-essential

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --omit=dev --legacy-peer-deps

COPY . .

RUN npm install typescript --legacy-peer-deps
#RUN npx tsc
#RUN npm install -g @vercel/ncc
#RUN ncc build index.ts -o dist

# stage 2

#FROM node:16.15.1-slim
#WORKDIR /app
#COPY --from=builder /app/docs ./docs
#COPY --from=builder /app/dist/index.js .
RUN ls
CMD ["npx", "ts-node", "index.ts"]