#!bin/bash

export MONGODB_URI=mongodb+srv://vothanhdo2602:gPUsgDVsS6E8OjtT@cluster0.egsexyi.mongodb.net/?retryWrites=true&w=majority
export MONGODB_DATABASE=notification
export COMMON_PORT=10000
export COMMON_JWT_SECRET=loveOanh

dev:
	npm run dev
