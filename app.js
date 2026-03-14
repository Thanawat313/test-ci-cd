const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ 
        message: "DevSecOps Mini Project Running" 
    });
});


module.exports = app;


if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}