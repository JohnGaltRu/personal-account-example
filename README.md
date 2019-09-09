## This project is an my example of personal account. It developed with using react.js, create-react-app, php, MySQL, materializeCSS.

In this application you can:
- sign up a new account, 
- log in using it or other account, 
- entered cabinet page you can change info you wrote when signed up.

## This project have four branches: 
- master = with-php-backend
- gh-pages = only-frontend.

To use any version on your device firstly you need to clone/download repository and in your directory use commands npm install on your command line.

On gh-pages or only-frontend as you might have guessed no backend (php, MySQL). So you can not sign up or login for real. 
You can enter cabinet page by adding '/cabinet' to basic URL, but all the fields there will be empty or contain 'undefined'.
To use on your device you need to enter commands npm install + npm run start.

To use master or with-php-backend branches you need to have local server (for example, OpenServer) and created database in it named 'cabinet' with table 'users' with columns: 'id', 'name', 'email', 'password', 'birthday', 'sex' in it.
To use on your device you need to enter commands npm install + npm run build. And then transfer the files from the build folder to the folder of your local server according to its documentation.






