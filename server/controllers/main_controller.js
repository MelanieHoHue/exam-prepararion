module.exports =  {
    showIndex: (req, res) => {
        console.log('mainController | requested: ', req.url);
        res.render("index");
    }
};