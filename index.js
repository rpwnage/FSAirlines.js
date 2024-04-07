const fetch = require("isomorphic-unfetch");
const querystring = require("querystring");

class FSAirlines {
	constructor(config) {
		this.api_key = config.api_key;
		this.basePath = "https://dev.to/api";
	}

	request(endpoint = "", options = {}) {
		let url = this.basePath + endpoint;

		let headers = {
			api_key: this.api_key,
			"Content-type": "application/json",
		};

		let config = {
			...options,
			...headers,
		};

		return fetch(url, config).then((r) => {
			if (r.ok) {
				return r.json();
			}
			throw new Error(r);
		});
	}

	getArticles(options) {
		let qs = options ? "?" + querystring.stringify(options) : "";

		let url = "/articles" + qs;
		let config = {
			method: "GET",
		};
		return this.request(url, config);
	}
}
