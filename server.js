import express from 'express';
import initalize from './app/services/app.js';


const app = express();
initalize(app);
const port = 8000;
app.listen(port,() => console.log(`Server is running on the port ${port}`));
