require('dotenv/config')

module.exports = {
	service: {
		endpoint: {
			url: process.env.NEXT_PUBLIC_BACKEND_URL,
			skipSSLValidation: true
		}
	}
}