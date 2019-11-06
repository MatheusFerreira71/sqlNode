# sqlNode
Node JS with SQL using Sequelize.

#1 Add the following packs: Express, pg, pg-hstore and sequelize -- If you are using yarn type: yarn add express pg pg-hstore sequelize
                                                            If you are using npm type: npm install express pg pg-hstore sequelize --save

#2 Add the following devDependencies - First sequelize-cli then nodemon - If you are using yarn type: yarn add sequelize-cli -D; yarn add nodemon -D.                                                                  If you are using npm type: npm install nodemon -D.

*Note that you can config globally but in my case I did by project.

3# You'll need to create a js file with an object with the database configuration, you'll also need to create a .sequelizerc file linking the database config to the sequelize because i'm not using the config.json file that it requires. 

4# To create your migrations you'll need to link the path of the migration's directory in the same .sequelizerc file used in step 3, the type in your terminal - yarn sequelize migration:create --name=your_migration_name or npx sequelize migration:create --name=your_migration_name. After created you'll need write the code you desire in the method up of your migration, then type in the terminal yarn db:migration or npx db:migration. To undo the last migration write the code in the down method of your migration then type yarn db:migration:undo or npx db:migration:undo.

5# Each table will need a model of it self containing methods that will be necessary futher more in the project, then import then in the index page of the database using the connection object imported from the database's config file. 

6# To create the methods or better saying, your queries, you'll need to create a controller exporting all methods. Check sequelize's documentation for more information. 

7# Finally you'll need to create a file with all your routes running the methods created, don't forget to initialize them in the index file of your database. 


I hope that this project help you trail your path. Good Luck!

P.S. Special thanks to Rocketseat for sharing their knowledge. 
