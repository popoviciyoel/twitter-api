# twitter-api

The files that comprise the API are `app.js`, the router files, the model schema and the controller files.
  1.  `App.js` includes connection string to the database.  
  2.  `User Schema`  
    * name - String  
    * login - String. It represents the login a user will use to authenticate into the application system.  
    *  password - String and a required field. User authentication to the application stack you will use the login and password combination to authenticate a user.  
    *  email - String and required.  
    *  tweets - 
```javascript
tweets: [{  
  type: Schema.Types.ObjectId,  
  ref: 'Tweet'  
}]  
```  
  3.  `Tweet Schema` 
  You need to define the Tweet Schema inside of `models/Tweet.js`. A Tweet has the following 3 fields:  
    * content - String 
    * likes - Number  
    * dislikes - Number
    4.  `users router`  
    endpoints are inside of `routes/api/v1/Users.js`.  
      * `/api/v1/users` - thisreturns all the documents inside the `users` collection.    
      * `/api/v1/user`  - this generates a new user document inside of the `users` collection.   
      * `/api/v1/tweets` - this returns all the documents inside the `tweets` collection.   
      * `/api/v1/user/:id` - this generates a new document inside the `tweets` collection as well as generate a reference to the document inside the `users` collection that has a value of `:id` for its `_id` field.   
      * `/api/v1/users/:id` - this will return the document that matches the `:id` request param as well as all the tweets that it references.
