const express = require("express");
const path = require("path");
const port = 4000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'view'));

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

let products = [];

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'view/index.html'));
});

app.route("/showproducts").get(function(req, res) {
    res.status(200).render({products}); 
});

app.post("/api/addproducts", (req, res, next) => {
    const { name, price } = req.body;
    products.push({ name, price });
    res.status(201).send("product added");
});

app.route("/api/products/:productIndex").get((req, res) => {
    let { productIndex } = req.params;
    productIndex = Number(productIndex); 
    if (!products[productIndex]) {
        return res.status(400).send("no product found");
    }
    res.status(200).send(products[productIndex]);
});

app.route("/api/update/:productIndex").put((req, res) => {
    let { productIndex } = req.params;
    const { name, price } = req.body;  
    productIndex = Number(productIndex); 
    if (!products[productIndex]) {
        return res.status(400).send("no product found");
    }
    products[productIndex].name = name;
    products[productIndex].price = price;
    res.status(200).send(products);
});

app.route("/api/delete/:productIndex").delete((req, res) => {
    let { productIndex } = req.params;
    productIndex = Number(productIndex); 
    if (!products[productIndex]) {
        return res.status(404).send("not found");
    }
    products.splice(productIndex, 1);
    res.status(200).send("deleted");
});

app.listen(port, () => console.log(`server is running at port ${port}`));
