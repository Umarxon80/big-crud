import express from "express";
import { PORT } from "./config/dotenv.config.js";
import ConnectDB from "./database/mongo.js";
import BrandRouter from "./routes/Brand.routes.js";
import CustomerRouter from "./routes/Customer.routes.js";
import ModelRouter from "./routes/Model.routes.js";
import Order_detailRouter from "./routes/Order_detail.routes.js";
import OrderRouter from "./routes/Order.routes.js";
import PhoneRouter from "./routes/Phone.routes.js";

const app = express();
app.use(express.json())

app.use("/Brand", BrandRouter)
app.use("/Customer", CustomerRouter)
app.use("/Model", ModelRouter)
app.use("/Order_detail", Order_detailRouter)
app.use("/Order", OrderRouter)
app.use("/Phone", PhoneRouter)


// Сначала подключаемся к базе
ConnectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });
