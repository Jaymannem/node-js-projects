require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const bookRoutes = require("./routes/book-routes");
const productsRoutes = require("./routes/products-routes")

const app = express();
const PORT = process.env.PORT || 3000

//connect to our database
connectToDB();

//middleware
app.use(express.json());

//routes here
app.use("/api/books", bookRoutes);
app.use("/api/products", productsRoutes)

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});