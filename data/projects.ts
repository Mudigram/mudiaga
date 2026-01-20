export type ProjectTabContent = {
    readme: string;
    architecture: string;
    demoUrl?: string;
    apiNotes?: string;
};

export type Project = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    href: string;
    highlight?: boolean;
    heroImage?: string;
    images?: string[];
    githubUrl?: string;
    liveUrl?: string;
    content?: ProjectTabContent;
};


export const projects: Project[] = [
    {
        slug: 'openhealth-ng',
        title: 'OpenHealth NG',
        description:
            'A fullstack platform providing standardized access to 2,000+ Nigerian healthcare facilities with geospatial search, emergency services, and interactive mapping.',
        tags: ['Next.js 15', 'Supabase', 'Geospatial', 'PostgreSQL'],
        href: '/projects/openhealth-ng',
        highlight: true,
        heroImage: '/projects/openhealth-ng/openhealth-ng-hero.png',
        images: [
            '/projects/openhealth-ng/openhealth-faclities-map.png',
            '/projects/openhealth-ng/openhealth-endpoints.png',
            '/projects/openhealth-ng/ppenhealth-emergency.png',
        ],
        githubUrl: 'https://github.com/Mudigram/openhealth',
        liveUrl: 'https://openhealth-one.vercel.app/',
        content: {
            readme: `## Problem

Nigeria's healthcare data is **fragmented across disconnected sources** - state agencies, outdated directories, and word-of-mouth. This makes it nearly impossible to build reliable health-tech solutions or locate facilities during emergencies.

OpenHealth NG centralizes **2,000+ verified facilities** with geospatial search, emergency filtering, and interactive mapping.

---

## Tech Stack

- **Next.js 15** (App Router) - Server components + API routes
- **TypeScript** - End-to-end type safety
- **Supabase** - PostgreSQL with PostGIS, RLS, and auth
- **React-Leaflet** - Interactive maps
- **Tailwind CSS** - Modern UI
- **Vercel** - Edge deployment

---

## Key Features

**Geospatial Search**  
Distance-based queries using PostGIS \`ST_DWithin\` – find facilities within a radius with sub-50ms performance.

**Interactive Map**  
React-Leaflet with cluster markers for dense areas. Click for facility details and directions.

**Emergency Services**  
Quick filter for 24/7 facilities, trauma centers, and ambulance services.

**State Explorer**  
Browse 36 states and LGAs. Export data for research and analysis.

---

## Technical Highlights

**Query Optimization**  
Reduced geospatial search from ~800ms to ~50ms using PostGIS GiST indexes and proper spatial functions.

**Data Cleaning Pipeline**  
Built geocoding pipeline with OpenStreetMap Nominatim, fuzzy deduplication, and phone validation for inconsistent government data.

**URL State Management**  
Filters stored in URL params for shareability and SEO-friendly server-side rendering.`,

            architecture: `## Architecture

**Fullstack Next.js Approach**  
Next.js 15 handles both frontend and backend, eliminating the need for a separate API server.

### Data Flow
1. User Request → Next.js Server Component
2. Server Component → Supabase Client (server-side)
3. Supabase → PostgreSQL + PostGIS spatial query
4. Response → Hydrated React component
5. Client → React-Leaflet updates map

---

## Supabase Implementation

**Row-Level Security (RLS)**
\`\`\`sql
-- Public read access
CREATE POLICY "Public read" ON facilities
FOR SELECT USING (is_verified = true);

-- Admin-only writes
CREATE POLICY "Admin write" ON facilities
FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
\`\`\`

**Geospatial Indexing**
\`\`\`sql
CREATE INDEX facilities_location_idx 
ON facilities USING GIST (location);
\`\`\`

---

## Why Supabase?

**Advantages:**
- Built-in auth and RLS
- Auto-generated REST API from schema
- Real-time subscriptions via WebSockets
- Native PostGIS support

**Trade-offs:**
- Less API design flexibility (schema-driven)
- Complex queries require database functions

---

## Component Structure

\`\`\`
app/
├── facilities/page.tsx    # Listing + map
├── emergency/page.tsx     # Emergency filter
├── explorer/page.tsx      # State-level view
└── api/                   # Future REST routes
\`\`\``,

            apiNotes: `## Current Data Access

Facilities are fetched via Supabase client in Server Components:

\`\`\`typescript
import { createClient } from '@/lib/supabase/server';

const { data } = await createClient()
  .from('facilities')
  .select('*')
  .eq('state', 'Lagos')
  .limit(50);
\`\`\`

---

## Suggested Next.js API Routes

For external integrations or mobile apps, implement REST endpoints:

### GET /api/facilities
\`\`\`typescript
export async function GET(request: NextRequest) {
  const { lat, lng, radius = '10' } = Object.fromEntries(
    new URL(request.url).searchParams
  );

  const { data } = await createClient()
    .rpc('facilities_nearby', {
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      radius_km: parseFloat(radius)
    });

  return NextResponse.json({ facilities: data });
}
\`\`\`

**Database Function:**
\`\`\`sql
CREATE FUNCTION facilities_nearby(lat FLOAT, lng FLOAT, radius_km FLOAT)
RETURNS TABLE (...) AS $$
  SELECT *, 
    ST_Distance(location, ST_Point(lng, lat)::geography) / 1000 AS distance_km
  FROM facilities
  WHERE ST_DWithin(location, ST_Point(lng, lat)::geography, radius_km * 1000)
  ORDER BY distance_km;
$$ LANGUAGE sql;
\`\`\`

---

## Learning: Next.js as Backend

**Key Takeaway:** Next.js API routes offer a lightweight Express alternative for many use cases.

**When to use:**
- Same-origin data needs (no CORS)
- TypeScript end-to-end
- Edge runtime for global performance
- Simple CRUD operations

**When to use traditional backend:**
- Worker queues and async jobs
- Microservices architecture
- Non-HTTP protocols (gRPC, custom WebSockets)
- Heavy background processing

Start with Next.js routes, extract only when necessary.`
        }
    },
    {
        slug: 'choplife-ib',
        title: 'ChopLife IB',
        description:
            'A premium, mobile-first discovery platform for trending spots and events in Ibadan, featuring real-time social engagement and admin dashboards.',
        tags: ['Next.js 16', 'Supabase', 'Redux Toolkit', 'React Query', 'TypeScript'],
        href: '/projects/choplife-ib',
        highlight: true,
        heroImage: '/projects/choplife/homepage.jpg',
        images: [
            '/projects/choplife/menu-view.jpg',
            '/projects/choplife/restaurant-gallery.jpg',
            '/projects/choplife/favorites-page.jpg',
            '/projects/choplife/review-restaurant.jpg',
            '/projects/choplife/about.jpg',
        ],
        githubUrl: 'https://github.com/Mudigram/choplife-ib',
        liveUrl: 'https://choplife-ib.vercel.app/',
        content: {
            readme: `## Problem

Finding reliable information about hangout spots in Ibadan is difficult due to scattered social media posts and outdated listings. Users lack a centralized, trustworthy platform for discovery.

**ChopLife IB** solves this by providing a curated, high-quality directory with real-time reviews, verified listings, and a premium mobile experience.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Framer Motion
- **State Management:**
  - **Redux Toolkit:** Complex UI state (modals, filters)
  - **TanStack Query:** Server state and caching
- **Backend:** Supabase (Auth, Database, Storage)
- **Forms:** React Hook Form + Zod

---

## Key Features

**Mobile-First Design**
Built with a "content-first" approach, featuring touch-optimized galleries, bottom sheets for navigation, and skeleton loaders for perceived performance.

**Admin Dashboard**
A protected admin area for listing management, analytics review, and user moderation, secured by Middleware and RLS.

**Social Auth**
Seamless onboarding with Google and Discord authentication via Supabase Auth.`,

            architecture: `## Architecture

**Hybrid State Management**
We separate concerns by using **Redux Toolkit** for client-only UI state (like active filters and navigation visibility) and **TanStack Query** for server data. This ensures the UI remains responsive while data is kept fresh.

### Authentication Flow
1. User signs in via OAuth provider (Google/Discord).
2. Supabase Mint JWT and sync with public.users table via Database Webhooks.
3. Next.js Middleware verifies session token on protected routes (/admin).
4. RLS policies enforce data access at the database level.

---

## Database Schema (Snippet)

\`\`\`sql
-- Public profiles linked to Auth
create table public.profiles (
  id uuid references auth.users not null,
  username text unique,
  avatar_url text,
  role user_role default 'user',
  primary key (id)
);

-- Row Level Security
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );
\`\`\`

---

## API & Performance

- **Optimistic Updates:** Immediate feedback on user actions (likes, reviews) before server confirmation.
- **Image Optimization:** Next.js Image component with blurred placeholders for improved LCP.`,
            demoUrl: "https://choplife-ib.vercel.app/"
        }
    },
    {
        slug: 'weekly-quiz',
        title: 'Weekly Quiz Challenge',
        description:
            'A high-performance gamified quiz platform used for blockchain education, featuring timed challenges, live leaderboards, and anti-cheat mechanisms.',
        tags: ['Next.js 16', 'Zustand', 'Supabase', 'Gamification'],
        href: '/projects/weekly-quiz',
        heroImage: '/projects/weekly-quiz/Hero.png',
        images: [
            '/projects/weekly-quiz/quiz.jpg',
            '/projects/weekly-quiz/profile.jpg',
            '/projects/weekly-quiz/flashcard.jpg',
        ],
        githubUrl: 'https://github.com/Mudigram/weekly-quiz',
        liveUrl: 'https://weekly-quiz.vercel.app/',
        content: {
            readme: `## Description

The Weekly Quiz Challenge is an interactive educational platform designed to onboard users into blockchain ecosystems through gamified learning. It features time-sensitive questions, instant scoring, and live competition.

---

## Tech Stack

- **Frontend:** Next.js 16, Tailwind CSS
- **State Management:** Zustand (Global store for quiz session)
- **Data Fetching:** TanStack Query
- **Backend:** Supabase
- **Auth:** Discord OAuth (Community integration)

---

## Core Mechanics

**Speed-Based Scoring**
Points are awarded based on how quickly a correct answer is selected.
\`Score = Base Points * (Time Remaining / Total Time)\`

**Anti-Cheat Measures**
- Server-side time validation.
- One-time submission usage constraints.
- Randomised question ordering.

**Live Leaderboard**
Real-time ranking updates using Supabase Realtime subscriptions.`,

            architecture: `## System Architecture

**State Management with Zustand**
Zustand is used to manage the active quiz session state (current question index, selected answer, timer status) to avoid prop drilling and ensure high-performance renders during the countdown.

\`\`\`typescript
interface QuizState {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  submitAnswer: (questionId: string, answerId: string) => void;
  nextQuestion: () => void;
}
\`\`\`

---

## Database Constraints

To ensure integrity, we rely heavily on database constraints rather than just application logic.

\`\`\`sql
-- Ensure one submission per user per quiz
CREATE UNIQUE INDEX unique_user_quiz_submission 
ON submissions (user_id, quiz_id);

-- Prevent submissions after deadline (Trigger)
CREATE TRIGGER check_submission_deadline
BEFORE INSERT ON submissions
FOR EACH ROW EXECUTE FUNCTION check_deadline();
\`\`\`

---

## Integration

**Discord OAuth**
Used to map quiz performance directly to community members, enabling role rewards and social recognition within the Discord server.`,
            apiNotes: `## API Implementation

**Submit Answer Endpoint**
Protected route that verifies the user session and calculates the score on the server to prevent client-side manipulation.

\`POST /api/quiz/submit\`

Payload:
\`\`\`json
{
  "quizId": "uuid",
  "answers": [
    { "questionId": 1, "optionId": "a" },
    { "questionId": 2, "optionId": "c" }
  ]
}
\`\`\``
        }
    },
    {
        slug: 'energy-backend',
        title: 'Energy Production Backend (REST API)',
        description:
            'A domain-driven backend system for oil & gas production logging, featuring strict audit trails, role-based access, and automated compliance reporting.',
        tags: ['FastAPI', 'Python', 'PostgreSQL', 'DDD', 'SQLAlchemy'],
        href: '/projects/energy-backend',
        heroImage: '/projects/energy-backend/energy-swagger-ui.png',
        images: [
            '/projects/energy-backend/reports-swagger.png',
            '/projects/energy-backend/services-code-snippet.png',
            '/projects/energy-backend/test-code.png',
        ],
        githubUrl: 'https://github.com/Mudigram/energy-backend',
        liveUrl: 'https://energy-api-docs.vercel.app/docs',
        content: {
            readme: `## Context

In the oil and gas industry, accurate production logging is critical for regulatory compliance and revenue allocation. Manual errors in volume reporting can lead to significant financial audits.

This project implements a **robust REST API** for field operators to log daily production figures (oil, gas, water) with strict validation and immutable audit trails.

---

## Tech Stack

- **Language:** Python 3.11+
- **Framework:** FastAPI (High performance, auto-documentation)
- **Database:** PostgreSQL
- **ORM:** SQLAlchemy (Async)
- **Migration:** Alembic
- **Testing:** Pytest

---

## Key Features

**Domain-Driven Design (DDD)**
The codebase is structured around bounded contexts (Production, Inventory, Personnel) ensures that business logic is decoupled from framework specifics.

**Immutable Audit Logs**
Every write operation generates an audit record. Historical data cannot be altered, only corrected via new adjusting entries.

**Role-Based Access Control (RBAC)**
- **Field Operator:** Can submit daily logs.
- **Supervisor:** Can approve/reject logs.
- **Auditor:** Read-only access to all history.`,

            architecture: `## Architecture

**Service Layer Pattern**
We use a service layer to isolate business logic from the API routers.

1. **Router:** Handles HTTP request/response.
2. **Schema (Pydantic):** Validates input data.
3. **Service:** Executes business logic (e.g., "calculate net oil volume").
4. **Repository:** Handles database persistence.

\`\`\`python
# Service Layer Example
class ProductionService:
    async def create_daily_log(self, data: DailyLogCreate, user: User):
        if not user.has_permission('log_production'):
            raise UnauthorizedError()
            
        # Business Logic: Validate against tank capacity
        tank = await self.tank_repo.get(data.tank_id)
        if data.volume > tank.capacity:
            raise ValidationError("Volume exceeds tank capacity")
            
        return await self.log_repo.create(data)
\`\`\`

---

## Deployment

Containerized using **Docker** and deployed via **CI/CD** pipelines that run automated tests before merging to the main branch.`,
            apiNotes: `## API Documentation

Building with FastAPI gives us automatic, interactive Swagger UI documentation.

**Key Endpoints:**

- \`POST /v1/production/logs\` - Submit a new daily log.
- \`GET /v1/production/reports/monthly\` - Generate aggregated monthly report.
- \`PATCH /v1/admin/users/{id}/role\` - Promote/demote user roles.`
        }
    },
    {
        slug: 'school-health',
        title: 'School Health Website',
        description:
            'A responsive health center website with emergency info, chatbot support, and department pages.',
        tags: ['Frontend', 'UX Design'],
        href: '/projects/school-health',
        content: {
            readme: "A production deployment for a regional health center focusing on accessibility and critical information delivery under high-stress situations.",
            architecture: "A Jamstack approach ensuring high availability even under limited connectivity scenarios."
        }
    },
];