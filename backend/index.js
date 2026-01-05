import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

//Middlewares
app.use(express.json());

//routes

app.get('/', (req, res) =>{
    res.send('API workking');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}) 