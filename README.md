# Next.js Template (TypeScript + Tailwind + shadcn/ui + Auth)

A modern, feature-rich Next.js starter template with essential tools and configurations for building production-ready applications.

## Features

- **Next.js 14** - Latest version with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Authentication** - NextAuth.js integration
- **State Management** - React Query for server state
- **API Integration** - Axios with interceptors
- **Mock Data** - Structured dummy data for development
- **Testing** - Jest and React Testing Library
- **Code Quality** - ESLint, Prettier, Husky, lint-staged
- **Project Structure** - Well-organized folder structure

## Project Structure

```
src/
├── app
│   ├── api
│   ├── (auth)
│   ├── dashboard
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   ├── shared
│   └── layouts
├── lib
│   ├── apiClient.ts
│   └── auth.ts
├── hooks
│   └── useUser.ts
├── types
│   └── index.ts
├── utils
│   └── index.ts
├── models
│   └── dummy
│       ├── users.json
│       └── products.json
├── styles
│   └── globals.css
└── tests
    └── setupTests.ts
```

## Quickstart

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd njs-shadcn
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file:
   ```
   NEXTAUTH_SECRET=your-random-secret
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

### Mock Data

The template includes structured dummy data for development:

- User data: `src/models/dummy/users.json`
- Product data: `src/models/dummy/products.json`

You can easily switch between mock data and real API calls by modifying the environment variables.

### Authentication

Authentication is set up using NextAuth.js with credentials provider. Customize the authentication flow in:

- API endpoint: `src/app/api/auth/[...nextauth]/route.ts`
- Auth utilities: `src/lib/auth.ts`
- User hook: `src/hooks/useUser.ts`

### UI Components

The project uses [shadcn/ui](https://ui.shadcn.com/), a collection of re-usable components built with Radix UI and Tailwind CSS. Add new components as needed:

```bash
npx shadcn-ui@latest add [component-name]
```

## Testing

Tests are configured with Jest and React Testing Library. Example tests are provided to demonstrate:

- Component testing
- Hook testing
- Utility function testing

Run tests with:

```bash
npm test
```

## Code Quality

The project includes the following tools to maintain code quality:

- **ESLint** - Linting JavaScript and TypeScript files
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files

The pre-commit hook automatically runs Prettier and ESLint on staged files.

## Deployment

This project is ready to be deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fnjs-shadcn)

## License

MIT
