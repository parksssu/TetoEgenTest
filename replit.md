# replit.md

## Overview

This is a Korean personality quiz application called "테토-에겐 성격유형 테스트" (Teto-Egen Personality Type Test) that analyzes users' hormone-based personality types. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, designed to determine whether users fall into one of four personality categories: 테토남 (Teto Male), 에겐남 (Egen Male), 테토녀 (Teto Female), or 에겐녀 (Egen Female).

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared components:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Shared**: Common schemas and types shared between frontend and backend
- **Database**: PostgreSQL with Drizzle ORM for data persistence
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management

## Key Components

### Internationalization (i18n)
- **Multi-language Support**: Korean (default) and English language support
- **Language Detection**: Auto-detects browser language or uses saved preference
- **Dynamic Content**: All UI text, quiz questions, and results translated
- **Translation Files**: Centralized translation system in `client/src/lib/i18n.ts`
- **Language Toggle**: Real-time language switching with persistent storage

### Database Layer
- **Drizzle ORM**: Used for database operations with PostgreSQL
- **Schema Definition**: Centralized in `shared/schema.ts` with two main tables:
  - `users`: For user authentication (username/password)
  - `quiz_results`: For storing quiz completion data including scores and results
- **Database Configuration**: Uses environment variable `DATABASE_URL` for connection

### Backend Architecture
- **Express Server**: RESTful API server handling quiz result submissions
- **Storage Interface**: Abstracted storage layer with both memory and database implementations
- **API Endpoints**:
  - `POST /api/quiz/result`: Save quiz completion results
  - `GET /api/quiz/stats`: Retrieve quiz statistics (optional)
- **Development Setup**: Hot reload with Vite integration in development mode

### Frontend Architecture
- **React SPA**: Single-page application with multiple routes
- **Component Structure**: Organized into pages and reusable UI components
- **Quiz Flow**: Multi-step process including gender selection, questions, and results
- **UI Components**: Comprehensive set of shadcn/ui components for consistent design
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Data Flow

1. **User Journey**:
   - Homepage (`/`) → Gender selection
   - Quiz page (`/quiz`) → 12-question personality assessment
   - Results page (`/result`) → Personalized personality type display

2. **Quiz Logic**:
   - Questions stored in `client/src/lib/quiz-data.ts`
   - Each answer has weighted scores for "teto" or "egen" traits
   - Results calculated based on cumulative scores and gender
   - Final personality type determined by highest score combination

3. **Data Persistence**:
   - Quiz results saved to database via API
   - Results include gender, answers (JSON), personality type, and individual scores
   - Statistics can be retrieved for analysis

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL database connection for serverless environments
- **drizzle-orm & drizzle-kit**: Database ORM and migration tools
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing

### UI and Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Monetization
- **Google AdSense**: Integrated ad system with strategic placements throughout quiz flow
- **Ad Configuration**: Centralized ad management system for easy optimization

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Type safety across the application
- **tsx**: TypeScript execution for development

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

- **Build Process**: Vite builds the frontend, esbuild bundles the backend
- **Production Server**: Express serves both API and static files
- **Database**: PostgreSQL module configured in Replit environment
- **Port Configuration**: Server runs on port 5000, exposed as port 80 externally
- **Environment**: Uses `NODE_ENV` to distinguish between development and production modes

The deployment follows a standard Node.js application pattern with separate build and start commands, suitable for autoscale deployment targets.

## Changelog

Changelog:
- June 20, 2025. Initial setup
- June 20, 2025. Added dark/light mode toggle with theme persistence
- June 20, 2025. Fixed result graph dark mode styling 
- June 20, 2025. Added home button to quiz navigation
- June 20, 2025. Updated question count text from 12 to 20
- June 20, 2025. Added "bad compatibility" section to results with distinct styling
- June 20, 2025. Implemented comprehensive multi-language support (Korean/English)
- June 22, 2025. Integrated Google AdSense with strategic ad placements (home, loading, results) without disrupting quiz flow
- June 23, 2025. Implemented real-time quiz result statistics with PostgreSQL database integration

## User Preferences

Preferred communication style: Simple, everyday language.