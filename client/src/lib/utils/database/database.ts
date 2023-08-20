/* eslint-disable @typescript-eslint/no-explicit-any */

const mainUrl = 'https://carnet-db.herokuapp.com/';
const userUrl = mainUrl + 'user/';
const trainsUrl = mainUrl + 'trains/';

async function login(mail: string, password: string) {
	const data = {
		mail,
		password
	};
	const loginUrl = userUrl + 'login';
	let response: any = await fetch(loginUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	response = await response.json();
	return response;
}

async function signup(mail: string, password: string) {
	const data = {
		mail,
		password
	};
	const loginUrl = userUrl + 'signup';
	let response: any = await fetch(loginUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	response = await response.json();
	return response;
}

async function getTrains() {
	let response: any = await fetch(trainsUrl, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	response = await response.json();
	return response;
}

async function myTickets(userid: string) {
	const ticketsUrl = userUrl + 'mybookings';
	let response: any = await fetch(ticketsUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ userid })
	});
	response = await response.json();
	return response;
}

async function resetPassword(password: string, userid: string) {
	const data = {
		password,
		userid
	};
	const loginUrl = userUrl + 'resetpassword';
	let response: any = await fetch(loginUrl, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	response = await response.json();
	return response;
}

async function resetMail(mail: string, userid: string) {
	const data = {
		mail,
		userid
	};
	const loginUrl = userUrl + 'resetmail';
	let response: any = await fetch(loginUrl, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	response = await response.json();
	return response;
}

async function searchTrains(from: string, to: string) {
	const data = {
		from,
		to
	};
	const searchUrl = trainsUrl + 'search';
	let response: any = await fetch(searchUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	response = await response.json();
	return response;
}

async function bookTickets(
	from: string,
	to: string,
	date: string,
	coach: string,
	trainid: string,
	userid: string,
	departure: string,
	arrival: string
) {
	const searchUrl = trainsUrl + 'bookticket';
	const data = {
		from,
		to,
		date,
		coach,
		trainid,
		userid,
		departure,
		arrival
	};
	let response: any = await fetch(searchUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	response = await response.json();
	return response;
}

export { login, signup, getTrains, resetPassword, resetMail, searchTrains, bookTickets, myTickets };
