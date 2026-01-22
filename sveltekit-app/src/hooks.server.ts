
// /*
//   When developing, this hook will add proxy objects to the `platform` object which
//   will emulate any bindings defined in `wrangler.toml`.
// */
// import { dev } from '$app/environment';
// let platform: App.Platform;

// if (dev) {
//     const { getPlatformProxy } = await import('wrangler');
//     platform = await getPlatformProxy();
//     console.log('Development platform proxy initialized:', platform);
// }

// export const handle = async ({ event, resolve }) => {
//     if (platform) {
//         event.platform = {
//             ...event.platform,
//             ...platform
//         };
//     }

//     return resolve(event);
// };