const cv = require("opencv4nodejs");
const image = cv.imread("lenna.jpg");
cv.imshowWait("Image", image);
