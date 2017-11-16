var pg = require('pg');

var parseConnectionString = require('pg-connection-string');

// const configuration = 'postgres://root:root@localhost/test';

var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/bulletinboard';

export POSTGRES_USER=jon
export POSTGRES_PASSWORD=mypassword

// what is the 'Set an environment variable by opening either ~/.bash_profile for OSX or ~/.bashrc for Linux???'
//what is the environment variable? should these be in the db as values in other tables that we relate to the messages table?
//how do you know who is logged in? should we make a login page?
