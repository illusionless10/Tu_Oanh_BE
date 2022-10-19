# server-chat

- NodeJS: v16.15.1


- Install deps
```
npm install
```

- Run
```
make dev
```

- redis-cli KEYS "user:*" | xargs redis-cli DEL
- redis-cli KEYS "room:*" | xargs redis-cli DEL