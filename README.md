# Next.js + Shadcn UI Template

A modern, feature-rich starter template for building beautiful web applications with Next.js, Shadcn UI, TypeScript, and more. Perfect for quickly bootstrapping admin dashboards, SaaS applications, or any modern web project.

![Dashboard Overview](./public/dashboard-screenshot.png)

## Features

- **Next.js 14+** - Latest version with App Router and Server Components
- **React 19** - Using the latest React version
- **TypeScript** - Fully typed codebase for better developer experience
- **Shadcn UI** - Beautiful, accessible UI components built with Radix UI and Tailwind CSS
- **Tailwind CSS v4** - For styling with the latest utility-first CSS framework
- **Dark Mode** - Built-in dark mode support with next-themes
- **Authentication** - NextAuth.js integration with login, signup, and logout flows
- **State Management** - React Query for server state management
- **Form Management** - React Hook Form with Zod validation
- **API Integration** - Axios with interceptors for API requests
- **Data Tables** - TanStack Table for powerful data grid functionality
- **Mock Data** - Structured dummy data for development
- **Responsive Design** - Mobile-first approach for all layouts and components
- **Toast Notifications** - Using Sonner for beautiful notifications
- **Icons** - Lucide React and Tabler Icons included
- **Testing** - Jest and React Testing Library setup
- **Code Quality** - ESLint, Prettier, Husky, lint-staged for consistent code style
- **Project Structure** - Well-organized folder structure with best practices

## Dashboard Features

The template includes a fully functional dashboard with:

- Overview statistics cards with dynamic data
- User management section
- Products management section
- Settings page
- Authentication flow (login, signup, logout)
- Responsive sidebar navigation
- User profile dropdown
- Theme toggle (light/dark mode)
- Loading states and skeletons

## Project Structure

```bash
src/
├── app                     # Next.js App Router structure
│   ├── api                 # API routes
│   │   └── auth            # Authentication API endpoints
│   ├── (auth)              # Authentication pages
│   │   ├── login
│   │   ├── signup
│   │   └── logout
│   ├── dashboard           # Dashboard pages
│   │   ├── users           # User management
│   │   ├── products        # Product management
│   │   └── settings        # Settings page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components              # React components
│   ├── ui                  # Shadcn UI components
│   │   ├── avatar.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── sidebar.tsx
│   │   ├── table.tsx
│   │   └── ...
│   ├── shared              # Shared components
│   └── layouts             # Layout components
├── lib                     # Utility libraries
│   ├── apiClient.ts        # Axios setup with interceptors
│   └── auth.ts             # Authentication utilities
├── hooks                   # Custom React hooks
│   └── useUser.ts          # User authentication hook
├── types                   # TypeScript type definitions
├── utils                   # Utility functions
├── models                  # Data models and mock data
│   └── dummy               # Mock data for development
│       ├── users.json
│       └── products.json
├── styles                  # Global styles
│   └── globals.css         # Tailwind imports and global CSS
└── tests                   # Test setup and configurations
```

## Quickstart

1. Clone the repository:

   ```bash
   git clone https://github.com/yaskhare0/njs-shadcn.git
   cd njs-shadcn
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file:

   ```bash
   NEXTAUTH_SECRET=your-random-secret
   NEXTAUTH_URL=http://localhost:3000
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
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

### Dashboard Layout

The dashboard includes:

- Responsive sidebar navigation with collapsible menu
- Header with user profile dropdown
- Theme toggle for light/dark mode
- Main content area with routing

### UI Components

The project uses [shadcn/ui](https://ui.shadcn.com/), a collection of re-usable components built with Radix UI and Tailwind CSS. Add new components as needed:

```bash
npx shadcn-ui@latest add [component-name]
```

Available components include:

- Button
- Card
- Dialog
- Dropdown Menu
- Form
- Input
- Table
- Avatar
- Checkbox
- Separator
- Tooltip
- Sheet
- Skeleton
- Theme Provider

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

[![Deploy with Vercel](https://vercel.com/button)]

## License

MIT
