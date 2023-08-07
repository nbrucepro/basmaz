import express from 'express';

const app = express();

const port =process.env.port || 4400;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})