// middleware handler for getting s3 signed url
const aws = require('aws-sdk');
const express = require('express');

function S3Router(options) {
  let S3_BUCKET = options.bucket;

  if (!S3_BUCKET) {
    throw new Error("S3_BUCKET is required.");
  }

  let router = express.Router();

  function findType(string) {
    let n = string.lastIndexOf('/');
    return string.substring(n+1);
  }

  router.get('/sign', function(req, res) {
    let filename = req.query.objectName;
    let mimeType = req.query.contentType;
    let ext = '.' + findType(mimeType);
    let fileKey = filename + ext;

    let s3 = new aws.S3();

    let params = {
      Bucket: S3_BUCKET,
      Key: fileKey,
      Expires: 600,
      ContentType: mimeType,
      ACL: options.ACL || 'private'
    };

    s3.getSignedUrl('putObject', params, function(err, data) {
      if (err) {
        console.log(err);
        return res.send(500, "Cannot create S3 signed URL");
      }

      console.log('data: ', data)
      res.json({
        signedUrl: data,
        publicUrl: 'https://s3.amazonaws.com/'+ S3_BUCKET + '/' + fileKey,
        filename: filename
      });
    });
  });

  return router;
}

module.exports = S3Router;