To resolve this, you need to ensure that you only access `doc.data().myField` after the data has loaded. Here's how you can do it:

```javascript
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  if (doc.exists) {
    const data = doc.data();
    if (data.myField) {
      console.log(data.myField); 
    } else {
      console.log('myField does not exist in this document.');
    }
  } else {
    console.log('No such document!');
  }
});
```

Alternatively, you can use optional chaining (?.) to safely access the property:

```javascript
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  console.log(doc.data()?.myField);
});
```

Or use async/await:

```javascript
async function getData() {
  const docRef = db.collection('myCollection').doc('myDoc');
  const doc = await docRef.get();
  if (doc.exists) {
    console.log(doc.data().myField);
  } else {
    console.log('No such document!');
  }
}

getData();
```