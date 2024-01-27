const cloudinary = require("cloudinary").v2;
// cloudinary is api
require("dotenv").config();
exports.cloudinaryConnect = () => {          // contains image audio video other files
	try {
		cloudinary.config({
			
			cloud_name: process.env.CLOUD_NAME,
			api_key: process.env.API_KEY,
			api_secret: process.env.API_SECRET,
		});
		console.log("cloudniary connected")
	} catch (error) {
		console.log(error);
	}
};
