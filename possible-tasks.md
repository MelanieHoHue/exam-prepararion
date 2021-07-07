# Possible Tasks

## useful
> add start script to /server/package.json: `"start": "nodemon server.js",` and run server console without mevn cli


## what I´ve done
> create user: view, route, controller action
> update user: view, route, controller action + redirectView
> delete user: route, controller action + redirectView

> added layout ejs with css
- for this I added
-- index.js to /routes
-- mainRoutes.js to /routes
-- main_controller.js to /controllers
- also:
-- installed express-ejs-layouts
-- required it: `layouts = require("express-ejs-layouts");`
-- added `app.use(layouts);` to server.js to register the layouts.ejs to get used by the app
-- changed `app.use(express.static(__dirname + '/views/'));` to `app.use(express.static("public"));`to catch the right folder for public files (css etc.)
-- added layout.ejs and index.ejs to /views
-- added navigation.ejs to /views/partials
-- added some custom.css to /public/css
-- added footer.ejs to /views/partials and integrated it into layouts.ejs

> added user authentication: see branch User-Auth
- installed:
-- express-session
-- cookie-parser
-- connect-flash
-- express-validator
-- passport
-- passport-local-mongoose
- added login.ejs to /views/users/login
- added /login post and get route to users.js in /routes
- added /login get route to users.js in /routes
- added controller actions for routes to users_controller.js
- refined user_schema.js and added email and password
- required `passport = require('passort');` in *server.js* and *users_controller.js*
