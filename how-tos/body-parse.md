# How to: body parse

> ***To pass attributes from a view´s form to the controller***: 
> within app/server.js

`// body parsing
app.use(
    express.urlencoded({
        extended: false
    })
);`