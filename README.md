# SvelteKit Durable Object Local Usage Example

## Summary

This monorepo is an example project that demonstrates how to use a Cloudflare Durable Object as a stateful backend for a SvelteKit application, particularly in a local development environment.

Here’s a breakdown of its structure and purpose:

*   **Backend (`do-kv-worker`):** This directory contains a Cloudflare Worker that defines a **Durable Object**. Durable Objects are a Cloudflare feature for creating stateful, coordinated instances at the edge. This worker serves as the application's backend.

*   **Frontend (`sveltekit-do-app`):** This is a standard SvelteKit application that provides the user interface. It's configured to communicate with the Durable Object backend to send and receive data.

*   **Local Development:** A key feature is the unified local development setup. The `dev.mjs` script at the root uses Cloudflare's `wrangler` CLI to run the Durable Object worker locally. Once the backend is running, it automatically starts the SvelteKit development server. This setup allows the SvelteKit app to make live requests to the local Durable Object, simulating the deployed Cloudflare environment.

In essence, this repository serves as a boilerplate and a guide for developers looking to build applications with a SvelteKit frontend and a stateful Cloudflare Durable Object backend.


It ensures that both apps are using the same instance of KV namespace by specifying the workers directory using 
---

This is a simple example that shows how to use [`getPlatformProxy`](https://developers.cloudflare.com/workers/wrangler/api/#getplatformproxy) to get access to a local [Durable Object](https://developers.cloudflare.com/durable-objects/) declared and exposed by a [Cloudflare Worker](https://developers.cloudflare.com/workers/).

To run the example:

- install the dependencies:

```sh
$ pnpm i
```

- run the worker and the svelteKit application with:

```sh
$ pnpm start
```

- navigate to the svelteKit home (default `http://localhost:5173/`), you should see the following:

    ![home](./home.png)

    showing a message that gets fetched from the Worker's durable object and displayed in the SvelteKit application

## Deploying to Cloudflare

- create a KV Namespace 
 
 ```sh
 $ pnpm dlx wrangler kv namespace create EXAMPLE_KV
 ```

- update both wrangler files with the kv namespace id

 in both app directories execute the following:

 ```sh
 $ pnpm run deploy
 ```

