var con = require('./connection');
const express = require('express');
const cors = require('cors');
const app = express()

const port = 8095;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello there!')
})

app.listen(port, () => {
    console.log(`listening at ${port}`)
})

app.post('/registration', async (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const email = req.body.email;
    const mobileNo = req.body.mobileNo;

    con.connect(function (error) {
        if (error) throw error;


        var sql = "INSERT INTO registration(userName,password,confirmPassword,email,mobileNo) VALUES(?, ?, ?, ?, ?)";
        con.query(sql, [userName, password, confirmPassword, email, mobileNo], function (error, result) {
            if (error) throw error;
            res.send('Registration successfull' + result.insertedId);
        });
    });

});
