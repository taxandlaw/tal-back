
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const storage = new GridFsStorage({
  url: 'mongodb+srv://sandhaya:G1fIBC2Qp9d4J7Dc@cluster0.lmswd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg", "image/jpeg"];
    //check spelling of mime
    if (match.indexOf(file.mimeType) === -1) 
     return `${Date.now()}-blog-${file.originalname}`;
      console.log('inside middleware')
    

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`

    }

  }

},
  console.log('end middleware'),

);
// export default multer ({storage});
const upload = multer({ storage });
module.exports = upload;



///Bezcoder

// const util = require("util");
// const multer = require("multer");
// const { GridFsStorage } = require("multer-gridfs-storage");
// const dbConfig = require("../config/db");

// var storage = new GridFsStorage({
//   url:  `mongodb+srv://sandhaya:G1fIBC2Qp9d4J7Dc@cluster0.lmswd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
//   options: { useNewUrlParser: true, useUnifiedTopology: true },
//   file: (request, file) => {
//     const match = ["image/png", "image/jpeg", "image/jpg"];
// console.log('file'+match);
// console.log('mimetype'+mimetype);
//     if (match.indexOf(file.mimetype) === -1) {
//       const filename = `${Date.now()}-bezkoder-${file.originalname}`;
//       console.log('filename'+filename);
//       return filename;
//     }

//     return {
//       bucketName: dbConfig.imgBucket,
//       filename: `${Date.now()}-bezkoder-${file.originalname}`
//     };
//   }
// });

// var uploadFiles = multer({ storage: storage }).single("file");
// var uploadFilesMiddleware = util.promisify(uploadFiles);
// module.exports = uploadFilesMiddleware;