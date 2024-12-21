import express, { Request, Response } from "express"
import cors from 'cors'
const app = express();

// parser 

app.use(cors());
app.use(express.json());

  


app.get('/', (req:Request, res:Response) => {
  res.status(200).json({
    success : true, 
    message : "successfully get server 😋🤣💖", 
    data : "your server is ok 😎💕"
  })
})
 



export default app