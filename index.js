// HINTS:
// 1. Import express and axios
import express from 'express';
import axios from 'axios';

// 2. Create an express app and set the port number.
const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";

// 3. Use the public folder for static files.
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
    
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

    try{
        const response = await axios.get(API_URL);
        const secret = response.data.secret;
        const user = response.data.username;
        res.render("index", { secret, user });
    }catch(error){
        console.error("Error fetching secret:", error);
        res.status(500).send("Internal Server Error");
    }
});


// 6. Listen on your predefined port and start the server.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});