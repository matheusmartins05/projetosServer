import "dotenv/config";
import app from "./src/app.js";

CORS_ALLOWED_ORIGINS = [
  "http://localhost:3000",
]
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("servidor escutando!");
});