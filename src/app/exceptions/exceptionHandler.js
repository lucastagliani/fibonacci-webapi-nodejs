const newException = (status, message) => {
	return {
		error: true,
		status: status,
		message: message
	}
};

module.exports = {
	newException
}