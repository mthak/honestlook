// handle user media capture
export function captureUserMedia(callback) {
  let params = { audio: false, video: true };

  navigator.getUserMedia(params, callback, (error) => {
    alert(JSON.stringify(error));
  });
};

// handle S3 upload
function getSignedUrl(file) {
  console.log('getSignedUrl', file.id, file.type)


  // let filename = file.id
  // let mimeType = file.type
  // let ext = '.' + findType(mimeType);
  // let fileKey = filename + ext;

  // let s3 = new aws.S3();

  // let params = {
  //   Bucket: S3_BUCKET,
  //   Key: fileKey,
  //   Expires: 600,
  //   ContentType: mimeType,
  //   ACL: options.ACL || 'private'
  // };




  // let queryString = '?objectName=' + file.id + '&contentType=' + encodeURIComponent(file.type);
  // return fetch('/s3/sign' + queryString)
  // .then((response) => {
  //   return response.json();
  // })
  // .catch((err) => {
  //   console.log('error: ', err)
  // })
}

function findType(string) {
  let n = string.lastIndexOf('/');
  return string.substring(n+1);
}


function createCORSRequest(method, url) {
  // let xhr = new XMLHttpRequest();

  // if (xhr.withCredentials != null) {
  //   xhr.open(method, url, true);
  // } else if (typeof XDomainRequest !== "undefined") {
  //   xhr = new XDomainRequest();
  //   xhr.open(method, url);
  // } else {
  //   xhr = null;
  // }

  // return xhr;
};

export function S3Upload(fileInfo) { //parameters: { type, data, id }
  return new Promise((resolve, reject) => {
    console.log('S3Upload', fileInfo)
    getSignedUrl(fileInfo)
    resolve()

    // getSignedUrl(fileInfo)
    // .then((s3Info) => {
    //   // upload to S3
    //   var xhr = createCORSRequest('PUT', s3Info.signedUrl);

    //   xhr.onload = function() {
    //     if (xhr.status === 200) {
    //       console.log(xhr.status)
    //       resolve(true);
    //     } else {
    //       console.log(xhr.status)
          
    //       reject(xhr.status);
    //     }
    //   };

    //   xhr.setRequestHeader('Content-Type', fileInfo.type);
    //   xhr.setRequestHeader('x-amz-acl', 'public-read');

    //   return xhr.send(fileInfo.data);
    // })
  })
}