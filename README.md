
## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd token-watchlist
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your API key:
```env
NEXT_PUBLIC_API_KEY=your-api-key
NEXT_PUBLIC_API_URL=https://assessment-backend-primary-5kgrn.ondigitalocean.app
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features
- Search tokens by name or ticker
- Add tokens to your watchlist
- Remove tokens from watchlist
- Copy token contract address to clipboard
- Dark mode support
- Responsive design

## Tech Stack
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- React Query (API Data Fetching)
- Shadcn UI (Component Library)
- Motion (Animations)
