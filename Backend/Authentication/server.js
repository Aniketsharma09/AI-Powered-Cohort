const app = require('./src/app');
const connectToDb = require('./src/db/db');
const userRouter = require('./src/routes/auth.routes');

app.use('/auth',userRouter);
connectToDb();
app.listen(3000, (req, res) => {
    console.log("Server is runing on the port 3000");
})