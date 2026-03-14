# ใช้ Image ที่ปลอดภัยและเบา
FROM node:20-alpine

# สร้างโฟลเดอร์ทำงาน
WORKDIR /usr/src/app

# คัดลอกไฟล์ package เพื่อลง dependencies
COPY package*.json ./
RUN npm install --only=production

# คัดลอกโค้ดทั้งหมด
COPY . .


EXPOSE 3000
CMD [ "node", "app.js" ]