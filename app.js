const WebSocket = require('ws');
const express = require('express');
const app = express();

const server = app.listen(9876);

const wss = new WebSocket.Server({
    server: server
})

wss.on('connection', function(ws){
    ws.on('message', function(data){
        const buffer = Buffer.from(data);
        const str = buffer.toString('utf-8');
        console.log(str);

        // using readyState
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(str)
            }
        })
    })
})