# Haven's Skincare Development Guide

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run lint` - Run ESLint

## Code Style Guidelines
- **Component Structure**: Use functional components with React.FC typing
- **TypeScript**: Use strict mode, explicit types, and avoid `any`
- **Imports**: Order - 1) React/hooks 2) Next.js 3) External libraries 4) Components 5) Utils
- **Component Files**: PascalCase for component files/folders
- **Variables/Functions**: camelCase for variables and functions
- **CSS**: Use Tailwind with custom classes defined in globals.css
- **Colors**: Use custom theme colors from tailwind.config.ts (haven-blue, seafoam, etc.)
- **Animations**: Use AOS for scrolling animations and custom transitions
- **Images**: Always use Next.js Image component with proper optimization
- **Error Handling**: Clean up event listeners in useEffect hooks
- **State Management**: Use React hooks for local state management