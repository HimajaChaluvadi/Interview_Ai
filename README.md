" Interview AI Project" 

Interview AI is a comprehensive platform designed to streamline recruitment processes, enhance user career development, and provide AI-powered mock interviews and career coaching. The platform offers distinct roles and tailored features.The Interview with AI project is a web-based application built using Node.js and Express.js. It provides three user panels—Admin, User, and Recruiter—to streamline the process of skill development, course enrollment, and interview management.



## Tech Stack
- **Frontend**: React
- **Compiler**: Vite
- **Style**: Tailwind CSS
- **API Call**: axios
- **Hosting**: Render and Vercel
- **Other**: Datepicker, react-paginate, swiper, etc...

Backend: Node.js, Express.js

Database: MongoDB (for storing user, course, and exam information)

## Backend Technologies

The **backend** of the Society Management System is responsible for handling business logic, user authentication, data management, and communication with the database. Below are the technologies used:

### 1. **Node.js**

- Node.js is used as the runtime environment for running JavaScript code on the server. It allows us to handle backend operations and create APIs efficiently.

### 2. **Express**

- Express is a web application framework for Node.js. It simplifies the creation of routes, middleware, and API endpoints for the application.

### 3. **JWT (JSON Web Token)**

- JWT is used for secure authentication and authorization. It allows users to log in and access protected resources in the application.

### 4. **Bcrypt**

- Bcrypt is used for hashing passwords. It helps in securely storing user passwords in the database by encrypting them.

### 5. **Cloudinary**

- Cloudinary is used for managing and uploading images and other media files. It helps store images like profile pictures and document uploads in the cloud.

---

# Steps

**Clone the repository:**

git clone https://github.com/swiftrut/Interview_AI-backend


**Install dependencies:**
```
npm install
```

**Create a .env file in the root directory with the following variables:**

PORT=3000
MONGO_URI=mongodb://localhost:27017/interview_ai
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
CLOUDINARY_CLOUD_NAME=cloud_name
CLOUDINARY_API_KEY=cloud_key
CLOUDINARY_API_SECRET=cloud-secret
Client_ID = cloud_client_id
Client_secret = client_secret
GEMINI_API_KEY=gemini_api_key


### THANK YOU !


## 🚀 Installation
- Clone the Repository
```
git clone https://github.com/swiftrut/Interview_AI-frontend.git
```
- Install dependencies
```
npm install
```
- Run the development server
```
npm run dev
```
- Build for production
```
npm run build
```
