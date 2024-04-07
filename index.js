const fetch = require("isomorphic-unfetch");
const querystring = require("querystring");

class FSAirlines {
	constructor(config) {
		this.api_key = config.api_key;
		this.basePath =
			"https://www.fsairlines.net/va_interface2.php?function=";
	}

	request(action = "", options = {}) {
		let url = new URL(this.basePath);
		url.search = new URLSearchParams({
			function: action,
			format: "json",
			apikey: this.api_key,
		});

		for (const [key, value] of Object.entries(options)) {
			if (key != "method") {
				url.searchParams.append(key, value);
			}
		}

		let headers = {
			"Content-type": "application/json",
		};

		let config = {
			...options,
			...headers,
		};

		return fetch(url, config)
			.then((r) => {
				if (r.ok) {
					return r.json();
				}
				throw new Error(r);
			})
			.then((data) => {
				if (data.error) {
					throw new Error(data.error);
				}

				if (data.data == null) return data;
				return data.data;
			});
	}

	// Aircraft Data

	getAircraftData(va_id, ac_id) {
		let config = {
			method: "GET",
			va_id: va_id,
			ac_id: ac_id,
		};
		return this.request("getAircraftData", config);
	}

	getAircraftDBData(va_id, acdb_id) {
		let config = {
			method: "GET",
			va_id: va_id,
			acdb_id: acdb_id,
		};
		return this.request("getAircraftDBData", config);
	}

	getAircraftDBList(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getAircraftDBList", config);
	}

	getAircraftList(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getAircraftList", config);
	}

	getAircraftStats(va_id, ac_id) {
		let config = {
			method: "GET",
			va_id: va_id,
			ac_id: ac_id,
		};
		return this.request("getAircraftStats", config);
	}

	getFleetAircraftList(va_id, fleet_id) {
		let config = {
			method: "GET",
			va_id: va_id,
			fleet_id: fleet_id,
		};
		return this.request("getFleetAircraftList", config);
	}

	getFleetList(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getFleetList", config);
	}

	getFleetStats(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getFleetStats", config);
	}

	getLeasedAircraftList(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getLeasedAircraftList", config);
	}

	getPeriodFleetStats(va_id, from_ts, to_ts) {
		let config = {
			method: "GET",
			va_id: va_id,
			from_ts: from_ts,
			to_ts: to_ts,
		};
		return this.request("getPeriodFleetStats", config);
	}

	// Airport Data

	getAirportData(va_id, icao) {
		let config = {
			method: "GET",
			va_id: va_id,
			icao: icao,
		};
		return this.request("getAirportData", config);
	}

	getAirportList(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getAirportList", config);
	}

	// Airline Data

	getAirlineData(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getAirlineData", config);
	}

	getAirlineStats(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getAirlineStats", config);
	}

	getCountryStats(va_id, country) {
		let config = {
			method: "GET",
			va_id: va_id,
			country: country,
		};
		return this.request("getCountryStats", config);
	}

	getRankList(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getRankList", config);
	}

	// Financial Data

	getLast10Transactions(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getLast10Transactions", config);
	}

	getNegTransactionSums(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getNegTransactionSums", config);
	}

	getPosTransactionSums(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getPosTransactionSums", config);
	}

	// Flight Data
	getActiveFlights(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getActiveFlights", config);
	}

	getBookedFlights(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getBookedFlights", config);
	}

	getFlightReports(va_id, acdb_id, ac_id, pilot_id) {
		let config = {
			method: "GET",
			va_id: va_id,
			acdb_id: acdb_id,
			ac_id: ac_id,
			pilot_id: pilot_id,
		};
		return this.request("getFlightReports", config);
	}

	getReportDetail(va_id, report_id) {
		let config = {
			method: "GET",
			va_id: va_id,
			report_id: report_id,
		};
		return this.request("getReportDetail", config);
	}

	getRouteData(va_id, route_id) {
		let config = {
			method: "GET",
			va_id: va_id,
			route_id: route_id,
		};
		return this.request("getRouteData", config);
	}

	getRouteList(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getRouteList", config);
	}

	// Pilot Data

	getPeriodPilotStats(va_id, from_ts, to_ts) {
		let config = {
			method: "GET",
			va_id: va_id,
			from_ts: from_ts,
			to_ts: to_ts,
		};
		return this.request("getPeriodPilotStats", config);
	}

	getPilotData(va_id, pilot_id) {
		let config = {
			method: "GET",
			va_id: va_id,
			pilot_id: pilot_id,
		};
		return this.request("getPilotData", config);
	}

	getPilotHours(va_id, pilot_id) {
		let config = {
			method: "GET",
			va_id: va_id,
			pilot_id: pilot_id,
		};
		return this.request("getPilotHours", config);
	}

	getPilotList(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getPilotList", config);
	}

	getPilotRatings(va_id, pilot_id) {
		let config = {
			method: "GET",
			va_id: va_id,
			pilot_id: pilot_id,
		};
		return this.request("getPilotRatings", config);
	}

	getPilotStats(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getPilotStats", config);
	}

	getPilotStatus(va_id, pilot_id) {
		let config = {
			method: "GET",
			va_id: va_id,
			pilot_id: pilot_id,
		};
		return this.request("getPilotStatus", config);
	}

	// Flight Booking

	bookFlight(va_id, pilot_id, token, route_id, ac_id) {
		let config = {
			method: "POST",
			va_id: va_id,
			pilot_id: pilot_id,
			token: token,
			route_id: route_id,
			ac_id: ac_id,
		};
		return this.request("bookFlight", config);
	}

	cancelFlight(va_id, pilot_id, token) {
		let config = {
			method: "POST",
			va_id: va_id,
			pilot_id: pilot_id,
			token: token,
		};
		return this.request("cancelFlight", config);
	}

	getBookableReoutes(va_id, pilot_id, token) {
		let config = {
			method: "GET",
			va_id: va_id,
			pilot_id: pilot_id,
			token: token,
		};
		return this.request("getBookableReoutes", config);
	}

	getBookableAircrafts(va_id, pilot_id, route_id, token) {
		let config = {
			method: "GET",
			va_id: va_id,
			pilot_id: pilot_id,
			route_id: route_id,
			token: token,
		};
		return this.request("getBookableAircrafts", config);
	}

	getBookStatus(va_id, pilot_id) {
		let config = {
			method: "GET",
			va_id: va_id,
			pilot_id: pilot_id,
		};
		return this.request("getBookStatus", config);
	}

	// Miscellaneous User Functions

	createAccount(
		va_id,
		givenname,
		surname,
		username,
		email,
		password,
		airport,
		accept_pp
	) {
		let config = {
			method: "POST",
			va_id: va_id,
			givenname: givenname,
			surname: surname,
			username: username,
			email: email,
			password: password,
			airport: airport,
			accept_pp: accept_pp,
		};
		return this.request("createAccount", config);
	}

	getPilotId(va_id, user, token) {
		let config = {
			method: "GET",
			va_id: va_id,
			user: user,
			token: token,
		};
		return this.request("getPilotId", config);
	}

	getPrivacyPolicy(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getPrivacyPolicy", config);
	}

	getTransferCost(va_id, arr, dep) {
		let config = {
			method: "GET",
			va_id: va_id,
			arr: arr,
			dep: dep,
		};
		return this.request("getTransferCost", config);
	}

	transferPilot(va_id, pilot_id, token, icao) {
		let config = {
			method: "POST",
			va_id: va_id,
			pilot_id: pilot_id,
			token: token,
			icao: icao,
		};
		return this.request("transferPilot", config);
	}

	getDistance(va_id, icao_from, icao_to) {
		let config = {
			method: "GET",
			va_id: va_id,
			icao_from: icao_from,
			icao_to: icao_to,
		};
		return this.request("getDistance", config);
	}

	getMetar(va_id, icao) {
		let config = {
			method: "GET",
			va_id: va_id,
			icao: icao,
		};
		return this.request("getMetar", config);
	}

	// Package Functions

	getAirportPackageSummary(va_id, icao) {
		let config = {
			method: "GET",
			va_id: va_id,
			icao: icao,
		};
		return this.request("getAirportPackageSummary", config);
	}

	getVaPackageSummary(va_id) {
		let config = {
			method: "GET",
			va_id: va_id,
		};
		return this.request("getVaPackageSummary", config);
	}

	getAircraftPackages(va_id, ac_id) {
		let config = {
			method: "GET",
			va_id: va_id,
			ac_id: ac_id,
		};
		return this.request("getAircraftPackages", config);
	}

	getCenterPackages(va_id, center_id) {
		let config = {
			method: "GET",
			va_id: va_id,
			center_id: center_id,
		};
		return this.request("getCenterPackages", config);
	}
}
