const express= require('express');
const fs= require('fs');

const router= express.Router();

router.get('/chat', (req, res, next)=>{
    fs.readFile('username.txt', (err, data)=>{
        if(err) {
            data="No Chat Exists";
        }
        res.send(
            `<pre>${data}</pre> <form action='/chat' onsubmit="document.getElementById('username').value = localStorage.getItem('username')" method="POST">
            <input type="text" id="message" name="message">
            <input type="hidden" name="username" id= "username">
            <button type ="submit"> Send </button>
            </form>`
            
        )
    })
})

router.post('/chat', (req, res, next)=>{
    console.log(`${req.body.username}: ${req.body.message} `)
    fs.writeFileSync(
        "username.txt",` ${req.body.username} : ${req.body.message}`,{ flag: "a" }
      );
      res.redirect("/chat");
    });

module.exports = router;