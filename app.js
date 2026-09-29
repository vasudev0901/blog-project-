const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());


// LOGIN PAGE
app.get("/login", (req, res) => {
    res.render("login", { error: null });
});


// LOGIN
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    if (email === "admin@gmail.com" && password === "12345") {

        res.cookie("user", email);

        res.redirect("/");

    } else {

        res.render("login", {
            error: "Invalid email or password"
        });

    }
});


// HOME PAGE
app.get("/", (req, res) => {

    const user = req.cookies.user;

    if (!user) {
        return res.redirect("/login");
    }

    res.render("index", {
        user: user
    });
});


// LOGOUT
app.get("/logout", (req, res) => {

    res.clearCookie("user");

    res.redirect("/login");
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});