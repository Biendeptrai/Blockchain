const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const orderRoutes = require("./routes/order.routes");
const authRoutes = require("./routes/auth.routes"); 
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

const productRoutes = require("./routes/product.routes");
app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("🚀 Server chạy tại http://localhost:3000");
});
