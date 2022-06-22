
const grid = require('gridfs-stream');
const mongoose = require('mongoose');
const url = 'http://localhost:8000/api'
// const fs = require('fs');
// let gfs;


let gridFSBucket;


// let conn = mongoose.connection;

let conn = mongoose.createConnection(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
conn.once('open', () => {
  // console.log('open connection', conn)
  // gfs = grid(conn.db, mongoose.mongo);
  // gfs.collection('fs');

  gridFSBucket = grid(conn.db, mongoose.mongo);
  gridFSBucket.collection('fs');

  // console.log("found file break between", gfs.collection('fs'))
})




exports.uploadImage = (request, response) => {
  try {
    if (!request.file)
      return response.status(404).json('file not found');
    const imageURL = `${url}/file/${request.file.filename}`
    response.status(200).json(imageURL);
  } catch (error) {
    console.log('error while uploading image', error)
  }
}


exports.getImage = async (request, res) => {
  // console.log('enter in getImage')

  try {
    // const file = await gfs.files.findOne({ filename: request.params.filename });
    // const readStream = gfs.createReadStream(file.filename);
   
    
    const file = await gridFSBucket.files.findOne({ filename: request.params.filename });
    const readStream = gridFSBucket.createReadStream(file.filename);
    
    
    
    readStream.pipe(res);
    console.log('get image')
  } catch (error) {
   console.log(error)
    res.status(500).json("failed to fetch image")
  }
}



