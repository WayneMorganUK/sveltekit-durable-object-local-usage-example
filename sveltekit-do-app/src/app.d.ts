// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {
        interface Platform {
            env: Env
            cf: CfProperties
            ctx: ExecutionContext
            caches: CacheStorage;
        }

        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}
interface Env {
    MY_DO: DurableObjectNamespace;
    EXAMPLE_KV: KVNamespace;
}

export { };