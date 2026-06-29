FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Port expose කරන්න (ඔබේ app එකේ port එකට වෙනස් කරන්න)
EXPOSE 8080

# Start the app
CMD ["npm", "start"]