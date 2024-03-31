import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();

const add = (a:number, b:number) => a + b

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log(add(5,7));
    
    res.send('Hello types');
})

app.listen(8000, () => {
    console.log('server running');

})