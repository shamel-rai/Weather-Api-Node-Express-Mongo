const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' })


const app = require('./app');


const DB = process.env.DATABASE_CONNECT;
console.log('EEEE', DB);


mongoose.connect(DB)
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Failed to connect Database', err))


const port = process.env.PORT;


app.listen(port, () => { 
    console.log(`Server is running in ${port}`);
    
})
