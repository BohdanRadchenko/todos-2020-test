const express = require('express')
const path = require('path')

const PORT = process.env.PORT|| 5000

const app = express()

app.use('/', express.static(path.join(__dirname, "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

const start = async () => {
        app.listen(PORT, () => console.log(`app hes been started on port ${PORT} ...`))
    } catch (e) {
        process.exit(1)
    }
}

start()