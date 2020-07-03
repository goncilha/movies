import mongoose from 'mongoose'

const database = () => {
  mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('mongodb is connected')
  });
}

export default database