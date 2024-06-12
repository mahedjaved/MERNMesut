import express from 'express';

const app = express();
// port 3000 is ideal
app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});