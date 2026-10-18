# KrishiMitra — Farmer Friends

A syllabus-aligned full-stack agriculture information app built with **React + JavaScript + Vite** on the frontend and **Node.js + Express** on the backend. The code intentionally uses plain JavaScript and CSS rather than TypeScript or a UI framework, so the implementation is easier to study alongside a JavaScript/React/Node/Express syllabus.

## Features

- Responsive farmer dashboard with navigation
- Searchable crop advisory cards and season filter
- Live weather lookup by city using Open-Meteo geocoding and forecast APIs (no API key required)
- Market-price table with **clearly labelled demonstration values** and links to official market portals
- Selected government-scheme summaries linked to official portals
- Feedback form with backend validation
- Express routes, CommonJS modules (`require`/`module.exports`), middleware, CORS, JSON request parsing, and error handling

## Technology stack

- Frontend: React, JavaScript, Vite, CSS, Lucide React icons
- Backend: Node.js, Express.js, CORS
- API: Fetch API, JSON, async/await
- Weather provider: Open-Meteo (live lookup requires internet access)

## Run locally

Requirements: Node.js 18+ (Node 20+ recommended) and npm.

1. Extract this ZIP and open the `krishimitra-final` folder in VS Code.
2. Open a terminal in that folder and install the root helper dependency:

   ```bash
   npm install
   npm run install:all
   ```

3. Start frontend and backend in one terminal:

   ```bash
   npm run dev
   ```

4. Open the Vite URL shown in the terminal, usually `http://localhost:5173`.
5. Backend health check: `http://localhost:5000/api/health`.

You can also start them separately in two terminals:

```bash
cd backend
npm install
npm run dev
```

```bash
cd frontend
npm install
npm run dev
```

The frontend uses `http://localhost:5000` by default. To use a deployed API, create `frontend/.env` with:

```env
VITE_API_URL=https://your-backend-domain.example
```

Restart/rebuild the frontend after changing environment variables. Do not put secret keys in variables prefixed with `VITE_`.

## API endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | API health check |
| GET | `/api/crops` | List crop guides; optional `?q=wheat&season=Rabi` |
| GET | `/api/crops/:id` | One crop guide |
| GET | `/api/market-prices` | Demonstration market-price records |
| GET | `/api/weather?city=Delhi` | Live weather lookup by city |
| POST | `/api/feedback` | Validate and accept feedback JSON |

Example feedback body:

```json
{
  "name": "Farmer",
  "topic": "Crop advisory",
  "message": "Please add local crop guidance."
}
```

## Important limitations

- **Market values are fictional demonstration placeholders.** They are not current mandi prices and must not be used for trading decisions. Replace the data in `backend/routes/marketRoutes.js` with a reliable, permitted source before presenting it as live data.
- Crop information is general educational guidance, not location-specific agronomic advice. Verify planting, fertilizer and plant-protection decisions with a local agriculture department or Krishi Vigyan Kendra.
- Feedback is held in backend memory and disappears when the server restarts. There is no database or authentication in this version.
- Weather is live through Open-Meteo, so weather lookup requires internet access and the external service to be available.
- Government scheme eligibility and rules can change; follow the linked official portal for current details.
- This is a functional educational project, not a production-ready agricultural decision system.

## Build frontend

```bash
npm run build --prefix frontend
```

The production frontend files are generated in `frontend/dist`. Deploy the frontend and backend separately, configure `VITE_API_URL` to point to the deployed backend, and set the backend's `FRONTEND_URL` environment variable to your deployed frontend origin (comma-separated origins are supported).

## Deployment notes

- Frontend can be deployed to Vercel or another static hosting provider using `frontend` as the project root, build command `npm run build`, output directory `dist`.
- Backend can be deployed to a Node.js hosting provider using `backend` as the project root and start command `npm start`.
- Set `PORT` if required by the backend host. Set `FRONTEND_URL` to your deployed frontend URL to restrict browser CORS access.
- If your host uses a separate monorepo build configuration, configure the frontend and backend roots independently.

## Syllabus mapping

- Unit I: variables, functions, conditions, loops, array methods and event-driven UI logic
- Unit II: arrays/objects, destructuring, async/await, error handling, Fetch API and JSON
- Unit III: React components, Node.js, npm and modules (`require`, `module.exports`)
- Unit IV: Express routes, HTTP methods, request/response objects, middleware and CORS
