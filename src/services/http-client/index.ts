import { ApiError } from '../../errors/api-error';

type MethodsParams = { path: string; options: RequestInit };

class HttpClient {
	constructor(private readonly baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async makeRequest({ path, options }: MethodsParams) {
		const headers = new Headers();

		if (options.body) {
			headers.append('Content-Type', 'application/json');
		}

		if (options.headers) {
			Object.entries(options.headers).forEach(([key, value]) => {
				headers.append(key, value);
			});
		}

		const response = await fetch(`${this.baseUrl}${path}`, {
			method: options.method,
			body: JSON.stringify(options.body),
			headers,
		});

		let responseBody = null;

		const contentType = response.headers.get('Content-Type');

		if (contentType?.includes('application/json')) {
			responseBody = await response.json();
		}

		if (response.ok) {
			return responseBody;
		}

		throw new ApiError(response, responseBody);
	}

	get({ path, options }: MethodsParams) {
		return this.makeRequest({
			path,
			options: { method: 'GET', headers: options?.headers },
		});
	}
}

export default HttpClient;
