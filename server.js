const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


//import routes

const websiteBlogImageRoutes = require('./routes/websiteBlogImage');
const websiteBlogRoutes = require('./routes/websiteBlog');
// const staticRoutes = require('./routes/static');
// const aboutRoutes = require('./routes/about');

// var corsOptions = { origin: "http://localhost:3000"}



//app
const app = express();

//db
mongoose
.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true
})
.then(() => console.log('db connected'))
.catch(err => console.log(err));







//middleware
// app.use(cors(corsOptions));

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//route middlewre
app.use('/api', websiteBlogRoutes);
app.use('/api', websiteBlogImageRoutes);

// app.use('/api', staticRoutes);
// app.use('/api', aboutRoutes);









//port
const port= process.env.PORT||8000
app.listen(port,() => console.log(`Server is running on port ${port}`));

