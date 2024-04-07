# FSAirlines

FSAirlines is a powerful and flexible JavaScript library for interacting with the FS Airline Interface (VA Interface). It provides a simple and consistent API for making HTTP requests to the VA Interface, allowing you to easily retrieve and manipulate data related to aircraft, airports, airlines, financial data, flight data, pilot data, flight booking, and more.

## Installation

To use FSAirlines in your project, you need to install it first. You can do this using npm:

```bash
npm install @tabit/fsairlines
```

````

## Usage

To use FSAirlines, you need to create an instance of the `FSAirlines` class and pass your API key as a configuration option:

```javascript
import FSAirlines from "@tabit/fsairlines";

const config = {
	api_key: "your_api_key_here",
};

const fsAirlines = new FSAirlines(config);
```

Once you have an instance of the `FSAirlines` class, you can use its methods to make HTTP requests to the VA Interface. Here's an example of how you can retrieve the list of all airports:

```javascript
fsAirlines
	.getAirportList("your_va_id_here")
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error(error);
	});
```

FSAirlines provides a wide range of methods for interacting with the VA Interface. You can find a complete list of available methods in the [API documentation](https://github.com/tabit/fsairlines/blob/master/docs/API.md).

## Contributing

We welcome contributions to FSAirlines! If you find a bug or have an idea for a new feature, please open an issue or submit a pull request. Before you start working on a new feature, please make sure to read our [contribution guidelines](https://github.com/tabit/fsairlines/blob/master/CONTRIBUTING.md).

## License

FSAirlines is licensed under the MIT License. See the [LICENSE](https://github.com/tabit/fsairlines/blob/master/LICENSE) file for more information.

```
````
