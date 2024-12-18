const fs = require("fs");
const path = require("path");

async function upload() {
  const one = fs.readFileSync("./image1.png");
  const two = fs.readFileSync("./image2.png");
  console.log({
    one,
    two,
  });
  const oneBlob = new Blob([one], { type: "image/png" });
  const twoBlob = new Blob([two], { type: "image/png" });

  const fileOne = new File([oneBlob], "image1.png", { type: "image/png" });
  const fileTwo = new File([twoBlob], "image2.png", { type: "image/png" });

  const body = {
    files: [fileOne, fileTwo],
  };

  const res = await fetch("http://localhost:3001/uploadthing", {
    method: "POST",
    body,
  });

  console.log(await res.text());
}

upload();
