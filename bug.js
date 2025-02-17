The Firebase SDK might throw an error if you try to access a property of a document snapshot before the data has fully loaded.  This often happens when you're trying to access data within a callback function that hasn't yet received the result from the database query. For example:

```javascript
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  console.log(doc.data().myField); // Error: myField might not exist yet
});
```