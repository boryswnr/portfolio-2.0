exports.handler = async (event, context) => {
	console.log(event);
	return {
		statusCode: 200,
		message: 'Done'
	};
};
