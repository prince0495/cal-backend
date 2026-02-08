import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_, res) => {
    res.send('Calculator Home Page updated');
})

app.get('/home', (_, res) => {
    res.json({
        features: ['/sum', '/diff', '/mul', '/div']
    })
})

app.get('/sum/:a/:b', (req, res) => {
    const a:number = Number(req.params.a);
    const b:number = Number(req.params.b);
    res.json({result: a + b});
})
app.get('/diff/:a/:b', (req, res) => {
    const a:number = Number(req.params.a);
    const b:number = Number(req.params.b);
    res.json({result: a - b});
})
app.get('/mul/:a/:b', (req, res) => {
    const a:number = Number(req.params.a);
    const b:number = Number(req.params.b);
    res.json({result: a * b});
})
app.get('/div/:a/:b', (req, res) => {
    const a:number = Number(req.params.a);
    const b:number = Number(req.params.b);
    if(b == 0) {
        res.json({result: 'Cannot divide by 0'});
    }
    else {
        res.json({result: a / b});
    }
})

app.listen(PORT, () => console.log('calculator server started at PORT : ', PORT));