# Little Branch Project Guidelines

## Commands
- Build: `npm run build`
- Development server: `npm run dev`
- Lint: `npm run lint`
- Preview production build: `npm run preview`

## Code Style Guidelines
- **TypeScript**: Strict mode enabled, use explicit types for function parameters and returns
- **React**: Use functional components with hooks, avoid class components
- **Imports**: Group imports by external libraries first, then internal components
- **Naming**: camelCase for variables/functions, PascalCase for components/interfaces, ALL_CAPS for constants
- **Component Structure**: Props at top, hooks, helper functions, then return statement
- **CSS**: Use Tailwind classes with consistent patterns for responsive design
- **Error Handling**: Use try/catch for async operations, provide user-friendly error messages
- **State Management**: Use React useState/useEffect for simple state, consider context for deeper state
- **Form Handling**: Controlled components with onChange handlers and form validation
- **Comments**: Add comments for complex logic or non-obvious implementations

## Library Stack
- React 18+ with TypeScript
- Vite for bundling and development
- Tailwind CSS for styling
- lucide-react for icons