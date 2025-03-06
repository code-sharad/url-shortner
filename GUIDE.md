# Understanding URL Shortener - A Learning Guide

## 1. Web Server Basics (Express.js)
### What is Express.js?
- A lightweight web framework for Node.js
- Handles HTTP requests and responses
- Manages routing and middleware

### Key Express.js Concepts Used:
```javascript
// Basic server setup
import express from "express";
const app = express();

// Middleware setup
app.use(express.json());                         // Handle JSON data
app.use(bodyParser.urlencoded({extended: true})) // Handle form data

// Route handling
app.get("/", (req, res) => {                    // Handle GET requests
    res.render("homepage");                      // Render view
});
```

## 2. Database Management (MongoDB)
### Why MongoDB?
- NoSQL database (flexible data structure)
- Easy to use with JavaScript/Node.js
- Perfect for simple document storage

### Schema Design:
```javascript
const linkSchema = {
    longLink: String,  // Store original URL
    shortLink: String, // Store shortened version
    clicks: Number     // Track usage
}
```

## 3. Template Engine (EJS)
### Understanding EJS:
- Embedded JavaScript templating
- Allows dynamic HTML generation
- Syntax similar to JavaScript

### Example Usage:
```html
<!-- Loop through data -->
<% urls.map((url) => { %>
    <div class="card">
        <%= url.shortLink %>
    </div>
<% }) %>
```

## 4. CRUD Operations
### Create:
```javascript
// Creating a new short URL
app.post("/shorten", async (req, res) => {
    const newLink = new Link({
        longLink: req.body.link,
        shortLink: generateShortLink()
    });
    await newLink.save();
});
```

### Read:
```javascript
// Fetching all links
const allLinks = await Link.find({});
```

### Update:
```javascript
// Updating click count
await Link.findOneAndUpdate(
    { shortLink: url },
    { clicks: currentClicks + 1 }
);
```

### Delete:
```javascript
// Deleting a link
await Link.findByIdAndDelete(id);
```

## 5. Frontend Development
### HTML Structure:
- Form for URL input
- Cards to display shortened URLs
- Click statistics display

### CSS Concepts Used:
- Flexbox for layout
- Box shadow for depth
- Transitions for interactivity
- Responsive design

## 6. Async Programming
### Understanding Async/Await:
```javascript
// Async function example
async function handleRedirect(req, res) {
    try {
        const link = await Link.findOne({...});
        // Handle success
    } catch (error) {
        // Handle errors
    }
}
```

## 7. Error Handling
### Best Practices:
- Use try-catch blocks
- Provide user feedback
- Log errors for debugging
```javascript
try {
    // Attempt operation
} catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
}
```

## 8. Project Structure
```
project-101/
├── models/      # Database schemas
├── views/       # EJS templates
├── index.js     # Main server file
└── db.js        # Database connection
```

## Workshop Exercises

1. **Basic Setup**
   - Install dependencies
   - Configure Express server
   - Connect to MongoDB

2. **Feature Implementation**
   - Create URL shortening logic
   - Implement click tracking
   - Add delete functionality

3. **Styling Challenge**
   - Style the form
   - Design URL cards
   - Make it responsive

4. **Debug Practice**
   - Fix common errors
   - Handle edge cases
   - Improve error messages

## Common Issues & Solutions

1. **MongoDB Connection**
   - Check connection string
   - Ensure MongoDB is running
   - Verify network access

2. **URL Processing**
   - Handle invalid URLs
   - Add https if missing
   - Prevent duplicate entries

3. **Error Handling**
   - Database errors
   - Invalid requests
   - Network issues
