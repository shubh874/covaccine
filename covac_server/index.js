const express= require("express");
const callVaccApi = require("./service/vaccApi")
const app = express();
const cors = require('cors');
const rateLimit = require("express-rate-limit");
const path = require('path')

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 75, // limit each IP to 75 requests per windowMs
  message:
    "Too many accounts created from this IP, please try again after 5 minutes"
});

//  apply to all requests
app.use(limiter)


const PORT = process.env.PORT || 8080;

app.use(express.json())


app.get('/findbypin', cors(),async (req,res)=>{
    try {
        const remainingLimit = req.rateLimit;
        console.log(remainingLimit)
        const pin = req.query.pin;
        const date = req.query.date;
        const response = await callVaccApi(pin, date);
        console.log("hittttttt....")
        console.log(response)
        res.status(200).json(response);
    } catch (error) {
        console.error(error)
        res.json({error})
        
    }
})

if (process.env.NODE_ENV === 'production'){
    
app.use(express.static('covac_client/build'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'covac_client/build', 'index.html'));
  })


}


app.listen(PORT,()=>{
    console.log("server is running on port "+ PORT)
})