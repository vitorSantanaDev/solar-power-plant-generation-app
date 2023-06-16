import { ApiError } from '.';

describe('ApiError', () => {
	it('should show a brief description of the error and its respective status code', () => {
		try {
			const response: Partial<Response> = {
				ok: true,
				status: 400,
				type: 'basic',
				redirected: false,
				statusText: 'Bad Request',
				url: 'http://localhost:3000',
			};

			throw new ApiError(response, {
				detail: [
					{
						msg: 'value is not a valid',
						type: 'some type',
					},
				],
			});
		} catch (e) {
			const error = e as any;
			expect(error.message).toBe('value is not a valid');
		}
	});

	it('it should show generic status text when body error message does not exist', () => {
		try {
			const response: Partial<Response> = {
				ok: true,
				status: 400,
				type: 'basic',
				redirected: false,
				statusText: 'Bad Request',
				url: 'http://localhost:3000',
			};

			throw new ApiError(response, {
				detail: [
					{
						msg: '',
						type: 'some type',
					},
				],
			});
		} catch (e) {
			const error = e as any;
			expect(error.message).toBe('400 - Bad Request');
		}
	});
});
