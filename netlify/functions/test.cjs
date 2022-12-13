exports.handler = async (event, context) => {
	return JSON.stringify(event.body);
};
