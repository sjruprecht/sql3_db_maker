/**
 * DB maker - Nodejs and sqlite3
 *
 * Note: Depends on the create.sql which defines SQL statements and
 * sqlite3 + deps must be installed!
 *
 * To use, place create_db.js and create.sql in project directory.
 * Then run:
 * $ node create_db.js
 *
 * -steve
 *
 */

var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();

fs.exists('database_name', function(exists) {
    db = new sqlite3.Database('database_name');

    if(!exists) {

        console.log('Creating a new database... waaaait for it...');

        fs.readFile('create.sql', 'utf8', function(err, data) {

           if(err) {
               throw err;
           }

           db.exec(data, function(err) {

               if(err) {
                   throw err;
               }

               console.log('Done.');
           });
        });
    }
});