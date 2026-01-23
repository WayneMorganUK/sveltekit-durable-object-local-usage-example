export interface Env {
	MY_DO: DurableObjectNamespace;
	EXAMPLE_KV: KVNamespace;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const doId = env.MY_DO.idFromName('my-do-name');

		const doObj = env.MY_DO.get(doId);

		const resp = await doObj.fetch(request.url);

		const txt = await resp.text();

		return new Response(`Response from DO: \n\n\n${txt}`);
	},
};

export class DurableObjectClass {
	env;
	constructor(public state: DurableObjectState, env: Env) {
		this.state = state;
		this.env = env;
	}
	async fetch() {
		console.log('DO: Received request');

		try {
			await this.env.EXAMPLE_KV.put("my_key", "Hello back to you");
			console.log('DO: KV write completed');

			const readBack = await this.env.EXAMPLE_KV.get("my_key");
			console.log('DO: Read back from KV:', readBack);

			return new Response(`Hello from DO! Wrote to KV and read back: ${readBack}`);
		} catch (error) {
			console.error('DO: Error with KV:', error);
			return new Response(`DO Error: ${error}`, { status: 500 });
		}
	}
}