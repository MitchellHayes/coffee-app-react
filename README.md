# Coffee Brew Tracker App

A simple React web application for tracking coffee brewing history. Keep track of your favorite brew style, roast date, coffee weight, brand, and blend.

<!-- ## Live App

You can access the live version of the app at [https://mitchellhayes.github.io/coffee-app/](https://mitchellhayes.github.io/coffee-app/) -->

## Getting Started

Clone this repository to your local machine and navigate to the project folder:

```bash
git clone https://github.com/[YOUR_GITHUB_USERNAME]/coffee-app-react.git
cd coffee-app-react
```

Install the dependencies by running the following command:

```bash
npm ci
```

Start the development server by running the following command:

```bash
npm run dev
```
The app should be up and running on http://localhost:3000/.

## Deploying to Cloudflare

The app deploys as a [Cloudflare Worker with static assets](https://developers.cloudflare.com/workers/static-assets/) using Wrangler. Configuration lives in `wrangler.jsonc`; the Vite build output in `dist/` is uploaded with single-page-app fallback so React Router deep links resolve.

Wrangler needs Node 22 or newer. If you use nvm, `nvm use` picks up the version from `.nvmrc`.

```bash
npx wrangler login   # one time
npm run deploy       # builds, then runs `wrangler deploy`
npm run cf:preview   # builds, then serves the production build locally via `wrangler dev`
```

For Git-based deploys, connect the repository in the Cloudflare dashboard (Workers & Pages → Create → Import a repository) and set the build command to `npm run build` and the deploy command to `npx wrangler deploy`.

## License

[MIT](https://choosealicense.com/licenses/mit/)
