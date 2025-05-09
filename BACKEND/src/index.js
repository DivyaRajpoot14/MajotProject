import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    console.log("Hello World");
});

try {
    app.listen(4500,()=>{
        console.log("Server is running on port 4500");
    });
    
} catch (error) {
    console.log(error);
    
}