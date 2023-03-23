import Express from "express"

const app = Express()

app.get('/', (req, res) => {
    res.send('2020bcs0003')
})

app.listen(8080, () => {
    console.log(`Listening on port 8080`)
})