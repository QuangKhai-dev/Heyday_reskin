# Stage 1: Build stage
FROM node:20.11.0-alpine AS builder

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy file package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt phụ thuộc
RUN npm install --force

# Copy toàn bộ mã nguồn
COPY . .

# Build ứng dụng Next.js
RUN npm run build

# Stage 2: Production stage
FROM node:20.11.0-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy từ build stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Cài đặt chỉ phụ thuộc cần thiết cho production
RUN npm install --production --force

# Expose port mà Next.js sẽ lắng nghe (thường là 3000)
EXPOSE 3131

# Chạy ứng dụng
CMD ["npm", "start"]