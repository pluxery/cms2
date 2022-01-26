const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");


const app = express()

app.use(cors());

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/pizza', require("./routes/pizza.routes"))
app.use('/api/drink', require("./routes/drink.routes"))
app.use('/api/dessert', require('./routes/dessert.routes'))
app.use('/api/order', require('./routes/order.routes'))

const PORT = 5000
const mongoUrl1 ='mongodb+srv://sema:123@cluster0.2hlcl.mongodb.net/cafe?retryWrites=true&w=majority'
const mongoUrl2 = "mongodb+srv://bobiklovik7:1234qwer@cluster0.iqtby.mongodb.net/default?retryWrites=true&w=majority"

async function start() {
    try {
        await mongoose.connect(mongoUrl1), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
start()