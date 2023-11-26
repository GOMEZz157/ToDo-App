const express = require("express")

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send("Salve lets")
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})