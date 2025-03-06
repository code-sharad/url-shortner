import express from "express";
import connectDB from "./db.js";
import Link from "./models/link.js";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// Setup basic Express configurations
const app = express();
const PORT = 3000;
const WEBSITE_URL = "http://localhost:3000/";

// Setup ES Module __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Setup Express middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to Database
connectDB();

// Home page - Show form and all links
app.get("/", async (req, res) => {
  const allLinks = await Link.find({});
  res.render("create_url_shortner", { urls: allLinks.reverse() });
});

// Handle short link redirects
app.get("/:code", async (req, res) => {
  const { code } = req.params;
  try {
    const link = await Link.findOne({
      shortLink: `${WEBSITE_URL}${code}`,
    });

    if (link) {
      // Increase click count
      await Link.findOneAndUpdate(
        { shortLink: `${WEBSITE_URL}${code}` },
        { clicks: link.clicks + 1 }
      );

      // Add https if not present
      const finalUrl = link.longLink.includes("https")
        ? link.longLink
        : `https://${link.longLink}`;

      res.redirect(finalUrl);
    } else {
      res.send("Link not found!");
    }
  } catch (error) {
    res.send("Something went wrong!");
  }
});

// Create new short link
app.post("/shorten", async (req, res) => {
  const { link } = req.body;
  const code = Math.floor(Math.random() * 1000);

  const newLink = new Link({
    longLink: link,
    shortLink: `${WEBSITE_URL}${code}`,
  });

  await newLink.save();
  res.redirect("/");
});

// Delete a link
app.delete("/link/:id", async (req, res) => {
  try {
    await Link.findByIdAndDelete(req.params.id);
    res.send("success");
  } catch (error) {
    res.send("Failed to delete");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
