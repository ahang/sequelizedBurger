# burger

# About
Created a burger logger with MySQL, Node, Express, Handlebars and custom ORM. Followed MVC design pattern using Node & MySQL to query and route the data, and Handlebars to generate HTML

### How to use

Setup and Running the App

1. Clone Repo and extract to accessible location
2. Navigate in `Git` to root of the folder of `burger`
3. Type in `npm-install`
4. Open up the folder in your favorite text editor. Or for sublime users type in `subl .`
5. Use `schema.sql` to create the necessary database and tables. Use `seeds.sql` to input data into the table.
6. Navigate to `connection.js` contained within the `config` folder and update the password field with your MySQL password.
7. Go back to `Git` and type in `node server.js`
8. Open up your browser in type in `localhost:3000/`
9. Enjoy!

### App Functionality

1. It's a resturant app that allows users to input the names of burgers they'd like to eat
2. Whenever a user submits a burger's name, the app will display the burger on the left side of the page - waiting to be eaten.
3. Each burger in the waiting area has a `Devour It!` button. When the user clicks on it, the burger will move to the right side of the page.
4. The App will store every burger in a database, whether devoured or not.
