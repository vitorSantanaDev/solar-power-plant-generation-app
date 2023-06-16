export interface ErrorBody {
	detail: [
		{
			msg: string;
			type: string;
		}
	];
}

export class ApiError extends Error {
	constructor(
		public readonly response: Partial<Response>,
		public readonly responseBody: ErrorBody
	) {
		super();
		this.name = 'Api Error';
		this.response = response;
		this.message =
			responseBody.detail[0].msg ||
			`${response.status} - ${response.statusText}`;
	}
}
