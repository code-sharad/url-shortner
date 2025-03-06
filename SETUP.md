# URL Shortener Project Setup Guide

## Prerequisites
- Node.js (v14 or higher)
- MongoDB installed locally
- Code editor (VS Code recommended)

## Step-by-Step Setup

1. **Clone the Project**
```bash
git clone <repository-url>
cd project-101
```

2. **Install Dependencies**
```bash
npm install express mongoose ejs body-parser
```

3. **Create Environment File**
Create a `.env` file in the root directory:
```
MONGODB_URI=mongodb://localhost:27017/url-shortener
PORT=3000
```

4. **Database Setup**
- Start MongoDB service on your computer
- The application will automatically create the database when it runs

5. **Run the Project**
```bash
node index.js
```

6. **Access the Application**
Open your browser and visit:
```
http://localhost:3000
```

## Project Structure
```
project-101/
├── models/
│   └── link.js
├── views/
│   ├── create_url_shortner.ejs
│   ├── show_urls.ejs
│   └── header.ejs
├── index.js
├── db.js
└── package.json
```

## Troubleshooting

1. **MongoDB Connection Issues**
- Ensure MongoDB is running
- Check if the connection URL is correct
- Verify network connectivity

2. **Port Already in Use**
- Change the port in `.env` file
- Kill the process using the current port

3. **Module Not Found Errors**
- Run `npm install` again
- Check if package.json has all dependencies
