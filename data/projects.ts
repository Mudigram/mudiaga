export type ProjectStatus = 'shipped' | 'experiment' | 'concept';
export type ProjectCategory = 'product' | 'sdk' | 'backend' | 'ai' | 'tool' | 'fullstack';

export type ProjectCaseStudy = {
    problem: string;
    insight: string;
    approach: string;
    build: string;
    technicalDecisions: string;
    challenges: string;
    outcome: string;
    reflection: string;
};

export type Project = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    href: string;
    status: ProjectStatus;
    category: ProjectCategory;
    role: string;
    year: string;
    tier: 1 | 2 | 3;
    highlight?: boolean;
    heroImage?: string;
    images?: string[];
    githubUrl?: string;
    liveUrl?: string;
    keyInsight?: string;
    caseStudy?: ProjectCaseStudy;
};

export const projects: Project[] = [
    {
        slug: 'nexgen',
        title: 'NEXGEN Capital Fund',
        description: 'Institutional venture capital intake and grant acceleration platform deploying ₦30,000,000 in non-dilutive capital, PAU-EDC executive training, and venture acceleration for Nigerian founders.',
        tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Venture OS'],
        href: '/projects/nexgen',
        status: 'shipped',
        category: 'product',
        role: 'Solo Builder',
        year: '2026',
        tier: 1,
        highlight: true,
        heroImage: '/projects/nexgen/hero.png',
        images: [
            '/projects/nexgen/hero.png',
            '/projects/nexgen/mobile.png'
        ],
        githubUrl: 'https://github.com/Mudigram/Pangea-app',
        liveUrl: 'https://pangea-app.vercel.app/',
        keyInsight: 'Institutional grant allocation in emerging markets often fails at the intake level — pairing structured due diligence with clear non-dilutive tranche milestones creates transparency that attracts top-tier founders and syndicate capital.',
        caseStudy: {
            problem: `Early-stage founders in Nigeria face immense capital friction. While millions in grants and development finance exist on paper, the distribution pipeline is bogged down by opaque paper forms, scattered due diligence standards, and cumbersome compliance checkpoints. Most grant intake portals look archaic, lack institutional credibility, and fail to provide founders with clear transparency regarding disbursement tranches, selection criteria, or milestones.`,
            insight: `Venture capital and non-dilutive grant allocation requires an institutional-grade digital interface that treats founders like enterprise partners rather than charity applicants. High-performing founders evaluate the platform's rigor before committing sensitive balance sheets and CAC documentation. By designing a high-trust, editorial web platform with clear tranche breakdowns (working capital, executive training, venture acceleration) and upfront eligibility benchmarks, the intake process can weed out low-intent submissions while accelerating verified candidates.`,
            approach: `I engineered the platform around institutional clarity and operational momentum. I structured the program into three compounding value pillars: direct seed disbursement, executive training at Pan-Atlantic University EDC, and a 5-month sprint at Lagos Innovation Hub ending with an institutional Demo Day. The UI needed to feel authoritative, calm, and unmistakably premium—using an architectural grid layout, restrained monochromatic typography, subtle ambient glows, and interactive tranche breakdown cards.`,
            build: `Built with Next.js 16 and React 19, the platform showcases the ₦30,000,000 allocation model, program milestones across four distinct phases (Intake, Jury, Residence, and Demo Day), and an audited alumni wall of fame highlighting previous cohort achievements (such as EcoBarter's ₦180M Series A and Scrapays' $1.2M seed round). It features a 3-step digital intake application portal, due diligence checklist verification, tranche value calculators, and responsive mobile navigation.`,
            technicalDecisions: `I used Next.js 16 with Turbopack for lightning-fast compilation and static optimization. Tailwind CSS enabled meticulous typographic rhythm and custom architectural grid patterns without runtime styling overhead. Lucide icons provide lightweight, sharp iconography. The application uses modern responsive CSS clamping for editorial headlines that maintain proportional balance across both ultra-wide monitors and compact mobile screens.`,
            challenges: `Balancing high-density institutional information with an engaging, breathable visual hierarchy was the core challenge. Financial grant structures involve dense legal disclaimers, partner logos, and multi-tier eligibility rules. I resolved this by chunking information into interactive editorial cards, sticky phase timelines, and visual due-diligence badges so founders can absorb the prerequisites in seconds without feeling overwhelmed.`,
            outcome: `The platform is live at pangea-app.vercel.app, establishing an institutional digital presence for the 2026 Cohort VI grant cycle. It successfully communicates prestige and non-dilutive transparency, positioning the alliance (Meridian Investment Group, PAU-EDC, and Lagos Innovation Hub) as a premier venture launchpad in West Africa.`,
            reflection: `In future iterations, I plan to integrate automated CAC certificate verification via Nigerian corporate registry APIs and a live founder applicant portal where finalists can track jury scoring and tranche disbursements directly in real time.`
        }
    },
    {
        slug: 'proofa',
        title: 'Proofa',
        description: 'Mobile-first receipt and invoice generator designed for Nigerian SMEs to instantly share professional documents on WhatsApp.',
        tags: ['Next.js', 'TypeScript', 'Supabase', 'PWA'],
        href: '/projects/proofa',
        status: 'shipped',
        category: 'product',
        role: 'Solo Builder',
        year: '2026',
        tier: 1,
        highlight: true,
        heroImage: '/projects/proofa/logo.jpeg',
        images: [
            '/projects/proofa/proofa-1.jpeg',
            '/projects/proofa/proofa-2.jpeg',
            '/projects/proofa/logo.jpeg'
        ],
        githubUrl: 'https://github.com/Mudigram/Proofa',
        liveUrl: 'https://proofa.ng',
        keyInsight: 'Nigerian SMEs need professional receipts they can share instantly on WhatsApp — not complex accounting software.',
        caseStudy: {
            problem: `Many small business owners in Nigeria, from Instagram vendors to independent contractors, rely on WhatsApp for customer communication. However, when it comes to issuing receipts or invoices, they either use paper receipt booklets and send blurry photos, or they struggle with clunky accounting software built for large enterprises. There was a glaring gap for a fast, mobile-friendly way to generate professional transaction documents on the go.`,
            insight: `The insight was simple: the end-goal for most of these businesses isn't maintaining a complex ledger, but rather generating a trustworthy image they can drop into a WhatsApp chat. The product didn't need to be an accounting suite; it needed to be a document generator optimized for mobile screens and immediate sharing.`,
            approach: `I approached Proofa with a mobile-first mindset. Since internet connectivity can be intermittent, the core generation flow had to be resilient. I decided to build it as a Progressive Web App (PWA) with local storage support so users could maintain a history of their documents without relying heavily on a continuous server connection. The UI had to be dead simple, mimicking the familiar layout of physical receipts while adding digital conveniences like logo uploads and automatic calculations.`,
            build: `I built Proofa using Next.js 16 and React 19, taking advantage of the latest features for performance. It supports multiple document types: Payment Receipts, Simple Invoices, and Order Summaries. Users can choose from three aesthetic templates (Minimalist, Bold, Classic) and toggle localized features like the Naira (₦) symbol and standard 7.5% VAT. The core functionality culminates in a highly optimized PNG export mechanism that creates crisp images perfectly sized for WhatsApp sharing.`,
            technicalDecisions: `I chose Next.js and TypeScript for a robust frontend experience. Tailwind CSS 4 allowed for rapid UI iteration. For the backend and authentication, I used Supabase because it provided exactly what I needed without the overhead of maintaining custom infrastructure. The decision to rely on \`localStorage\` for document history was deliberate, ensuring fast access and offline capabilities for returning users. The image generation utilizes client-side rendering to convert DOM elements to canvas, ensuring the server doesn't get bottlenecked rendering images.`,
            challenges: `One of the main challenges was ensuring the generated PNGs looked identical across different mobile browsers (Safari on iOS vs. Chrome on Android). Font rendering and exact pixel alignments would sometimes shift during the DOM-to-canvas conversion. It took quite a bit of tweaking with CSS and the rendering library to get a consistent, sharp output regardless of the user's device. Handling custom logo uploads also required careful image resizing and compression to prevent the final receipt images from becoming bloated.`,
            outcome: `Proofa is currently live and is my first product to gain traction with real users. Independent vendors and small service providers are actively using it to legitimize their transactions. Seeing people abandon their paper receipt books for a tool I built has been incredibly rewarding. It validates the hypothesis that simplicity and focused utility win over feature bloat for this demographic.`,
            reflection: `If I were to build it again, I would incorporate a slightly more robust offline-first synchronization strategy early on, perhaps using IndexedDB instead of \`localStorage\`, to handle larger document histories and complex queries. Going forward, I plan to add more localized payment links directly onto the digital invoices, bridging the gap between invoicing and getting paid.`
        }
    },
    {
        slug: 'sureprice',
        title: 'SurePrice',
        description: 'Physical QR-triggered digital price tag and product information SaaS for brick-and-mortar retail stores and pop-ups.',
        tags: ['Next.js', 'TypeScript', 'Supabase', 'QR Systems'],
        href: '/projects/sureprice',
        status: 'shipped',
        category: 'product',
        role: 'Solo Builder',
        year: '2026',
        tier: 1,
        highlight: true,
        heroImage: '/projects/sureprice/hero.jpeg',
        githubUrl: 'https://github.com/Mudigram/sureprice-v2',
        liveUrl: 'https://qarty.ng',
        keyInsight: 'Physical retail stores still use paper price tags that go stale within days — QR codes can make pricing real-time without any app download.',
        caseStudy: {
            problem: `Physical retail stores, supermarkets, and pop-up vendors in Nigeria struggle with price management. With frequent currency fluctuations and inflation, updating paper shelf tags is labor-intensive, error-prone, and leads to discrepancies where the price on the shelf doesn't match the price at the checkout counter. This frustrates shoppers and creates friction for store owners.`,
            insight: `Shoppers already carry smartphones with native camera QR scanners. Instead of relying on expensive electronic shelf labels or constantly printing paper tags, a physical QR code placed on the shelf can serve as a permanent portal to real-time price data. Store owners update prices once in the cloud, and customers scan to see current pricing instantly without downloading an app.`,
            approach: `I designed SurePrice as a multi-tenant platform. The architecture needed to balance two distinct user experiences: a fast, sub-second scanning portal for shoppers on mobile networks, and a comprehensive management dashboard for store owners. It had to support store-modular pricing across different physical locations, role-based access control (RBAC), and a batch print studio for generating physical QR tags.`,
            build: `I built SurePrice v2 using Next.js 16, React 19, and Supabase. The platform includes an instant scan resolver (\`/q/[code]\`) that loads in milliseconds, a batch print studio that formats QR codes into printable shelf tags, A6 tent cards, and sticker sheets, and store-level catalog management. It also features a 7-day scan freshness tracker that flags prices that haven't been updated recently to prevent stale data.`,
            technicalDecisions: `Supabase with PostgreSQL and Row-Level Security (RLS) provided the multi-tenant isolation required for separate stores. For QR generation and scanning, I used \`qrcode\` and \`html5-qrcode\` with nano IDs for compact, collision-resistant URLs. Tailwind CSS with dynamic themes allowed creating distinct visual styles for the shopper-facing interface versus the administrative dashboard.`,
            challenges: `Optimizing the shopper scan experience for low-bandwidth mobile connections was critical. Every kilobyte mattered. I had to strip down the scan-resolution page to its absolute essentials, minimizing JavaScript payload and eliminating unnecessary dependencies. Designing the batch print studio to output pixel-perfect, printer-friendly CSS for physical shelf tags across standard paper sizes (A4 grids, sticker sheets) also required extensive trial and error.`,
            outcome: `SurePrice v2 is currently in its pilot phase with pre-provisioned merchant test stores. The system proves that physical-to-digital retail bridges can be built simply and cost-effectively, solving real operational friction for brick-and-mortar merchants.`,
            reflection: `In hindsight, I would have integrated barcode scanner compatibility alongside QR codes earlier in the development process to make initial inventory ingestion faster for stores that already use standard UPC/EAN barcodes. Future iterations will focus on automated inventory sync with popular point-of-sale systems.`
        }
    },
    {
        slug: 'japadesk',
        title: 'JapaDesk',
        description: 'AI-powered Graduate Admission & Relocation Operating System streamlining international study applications and credential conversions.',
        tags: ['Next.js', 'TypeScript', 'Claude AI', 'Supabase'],
        href: '/projects/japadesk',
        status: 'shipped',
        category: 'product',
        role: 'Solo Builder',
        year: '2026',
        tier: 1,
        highlight: true,
        heroImage: '/projects/japadesk/hero.png',
        images: [
            '/projects/japadesk/jdesk.png',
            '/projects/japadesk/jd2.png',
            '/projects/japadesk/jd3.png'
        ],
        githubUrl: 'https://github.com/Mudigram/study-abroad',
        liveUrl: 'https://japa-desk.vercel.app/',
        keyInsight: 'Students applying abroad juggle 10+ disconnected tools — spreadsheets, WhatsApp groups, Reddit threads — when they need one mission control.',
        caseStudy: {
            problem: `The process of applying for graduate programs abroad (colloquially known as "Japa" in Nigeria) is a grueling, fragmented logistical nightmare. Prospective students track university deadlines on Excel, draft essays in Word, calculate complex credential conversions manually, and scour Reddit for visa requirements. Missing a single deadline or misunderstanding a specific university's GPA conversion rule can cost a year of progress.`,
            insight: `While there are many fragmented tools and forums, there was no single "Operating System" tailored to the entire lifecycle of studying abroad—from shortlisting universities to tracking applications and finally securing a visa. Furthermore, generic AI chatbots hallucinate too much for critical admission tasks. I realized I could use closed-context AI to provide specific, reliable assistance.`,
            approach: `I designed JapaDesk as a centralized hub. The core organizing principle is a Kanban board for application tracking, enriched with automated countdown timers. Around this core, I built a suite of specialized tools handling the most painful parts of the process: grading conversions, document preparation, and financial planning. The AI integration had to be strictly grounded to prevent harmful hallucinations regarding university requirements.`,
            build: `The platform features a comprehensive Kanban board, an AI Syllabus Fit Check, and an SOP (Statement of Purpose) coach that evaluates drafts against multiple rubrics. I built a robust international credential converter that accurately handles the German Bavarian Formula, US 4.0 GPA, UK Honours, and French 20-point systems. To manage the relocation phase, it includes a 16-country visa checklist suite and a Proof of Funds simulator tailored for systems like the German Sperrkonto, UK 28-day rule, and Canadian GIC. Finally, I added a CRM for managing professor outreach and recommender coordination.`,
            technicalDecisions: `I chose Next.js and Supabase for a reliable, real-time foundation. For the AI features, I integrated the Anthropic Claude API. I specifically chose Claude for its larger context window and superior ability to adhere to strict system prompts, which is crucial for the closed-context syllabus fit checks. By grounding the AI queries in provided university documentation, the system acts as a reliable assistant rather than a generic text generator.`,
            challenges: `Building the credential converter was surprisingly complex. The rules for converting a Nigerian 5.0 CGPA to the German Bavarian formula aren't strictly linear and require handling various edge cases and grading scales across different universities. Implementing the closed-context AI prompts required extensive testing and tweaking to ensure the model wouldn't confidently output incorrect university requirements. Ensuring the UI remained uncluttered despite the vast amount of tools and data was a continuous design challenge.`,
            outcome: `JapaDesk successfully centralizes a chaotic process into a manageable workflow. The feedback on the Proof of Funds simulator and the credential converter has been particularly strong, as these tools save users hours of manual calculation and anxiety. It acts as a comprehensive digital companion for a very stressful life transition.`,
            reflection: `Looking back, I would have integrated a community or peer-review aspect earlier. While the AI SOP coaching is powerful, getting feedback from successfully admitted students is invaluable. Future iterations will likely include a way to securely share application profiles with mentors or peers for human feedback.`
        }
    },
    {
        slug: 'bayse-sdk',
        title: 'Bayse Markets SDK',
        description: 'Published TypeScript SDK on npm providing typed programmatic access, automated order execution, and live WebSocket streaming for prediction markets.',
        tags: ['TypeScript', 'Node.js', 'npm', 'WebSocket'],
        href: '/projects/bayse-sdk',
        status: 'shipped',
        category: 'sdk',
        role: 'Solo Builder',
        year: '2026',
        tier: 1,
        highlight: true,
        heroImage: '/projects/bayse-sdk/hero.png',
        images: [
            '/projects/bayse-sdk/hero.png'
        ],
        githubUrl: 'https://github.com/Mudigram/bayse-sdk',
        liveUrl: 'https://www.npmjs.com/package/bayse-markets-sdk',
        keyInsight: 'Prediction markets are only as powerful as their developer tooling — an ergonomic, typed SDK turns raw endpoints into an active trading ecosystem.',
        caseStudy: {
            problem: `Developers and algorithmic traders building on emerging prediction market platforms frequently struggle with raw, evolving REST and WebSocket APIs. Without typed client libraries, developers must manually construct payloads, manage authentication headers, handle subtle network reconnects, and parse undocumented responses—drastically slowing down bot development, market integrations, and widget embedding.`,
            insight: `A prediction platform's ecosystem thrives when external builders can get from \`npm install\` to placing their first programmatic trade in under two minutes. By wrapping market discovery, automated AMM order placement, CLOB execution, and real-time WebSocket feeds into a cohesive, fully-typed TypeScript library, I could eliminate the integration friction entirely.`,
            approach: `I designed \`bayse-markets-sdk\` with developer ergonomics and zero runtime bloat in mind. It needed strict end-to-end type safety, dual ESM/CommonJS distribution, structured error classes for predictable exception handling, and an automated WebSocket manager that transparently reconnects and streams real-time market ticks and FX rates.`,
            build: `I built and published \`bayse-markets-sdk\` on npm. It provides complete type definitions for markets, orders, quotes, and balances; automated order routing supporting both instant AMM fills and Central Limit Order Book (CLOB) actions; portfolio and wallet balance tracking; and live WebSocket streaming for real-time market updates and crypto/FX price rates (USD/NGN, BTC, ETH, SOL).`,
            technicalDecisions: `I implemented strict TypeScript 5.4+ with dual compilation outputs (ESM and CJS) via \`tsc\` to ensure compatibility with Node.js servers, edge workers, and modern bundlers. I created custom typed error classes (\`BayseAuthError\`, \`BayseRateLimitError\`, \`BayseNotFoundError\`, \`BayseApiError\`) so consuming applications can handle network or validation failures gracefully. The WebSocket layer was built using the native \`ws\` client with custom ping/pong heartbeats to prevent ghost disconnections.`,
            challenges: `Ensuring seamless real-time WebSocket event dispatching without memory leaks or race conditions during rapid market tick bursts required disciplined event listener management. Another challenge was maintaining strict backward compatibility across public beta API adjustments while keeping the SDK surface clean and intuitive for downstream consumers.`,
            outcome: `The SDK is published and live on npm (\`bayse-markets-sdk\`), powering the official \`bayse-embed\` widget library and serving as the primary programmatic gateway for external developers and trading bots to interact with Bayse Markets.`,
            reflection: `In future versions, I plan to introduce built-in automatic rate-limit queuing and configurable exponential backoff strategies directly within the HTTP transport layer, providing even greater resilience for high-frequency trading clients.`
        }
    },
    {
        slug: 'openhealth-ng',
        title: 'OpenHealth NG',
        description: 'Geospatial directory and API for finding 2,000+ healthcare facilities across Nigeria with sub-50ms query performance.',
        tags: ['Next.js 15', 'Supabase', 'PostGIS', 'Geospatial'],
        href: '/projects/openhealth-ng',
        status: 'shipped',
        category: 'fullstack',
        role: 'Solo Builder',
        year: '2026',
        tier: 1,
        highlight: true,
        heroImage: '/projects/openhealth-ng/openhealth-ng-hero.png',
        images: [
            '/projects/openhealth-ng/openhealth-faclities-map.png',
            '/projects/openhealth-ng/openhealth-endpoints.png',
            '/projects/openhealth-ng/ppenhealth-emergency.png'
        ],
        githubUrl: 'https://github.com/Mudigram/openhealth',
        liveUrl: 'https://openhealth-one.vercel.app/',
        keyInsight: 'Nigeria has thousands of healthcare facilities but no single reliable API or directory to find them — especially during emergencies.',
        caseStudy: {
            problem: `Healthcare data in Nigeria is heavily fragmented. While there are thousands of clinics, hospitals, and pharmacies, finding accurate, location-based information about them is surprisingly difficult. During an emergency, people rely on word-of-mouth or outdated Google Maps listings. There is no unified, developer-friendly API or accessible public directory for this critical infrastructure.`,
            insight: `The data exists, but it is siloed in various government PDFs, unstructured datasets, and disparate registries. By aggregating, cleaning, and geocoding this data, I could build a reliable foundational layer. A fast, map-based interface would serve the public, while an API could empower other developers to build health tech solutions on top of this dataset.`,
            approach: `My approach started with data engineering. I needed to build a pipeline to ingest messy data, standardize the schema, and accurately plot it on a map. Performance was key; querying thousands of geospatial points can quickly become sluggish. The UI needed to be intuitive, functioning as a simple search engine for healthcare with specific filters for emergency services and operational hours.`,
            build: `I developed OpenHealth NG, featuring a database of over 2,000 Nigerian healthcare facilities. The core of the application is a map interface built with React-Leaflet, backed by a powerful search and filtering system. Users can filter by emergency services, facility type, and explore by state. Under the hood, I built a data cleaning pipeline that utilizes OpenStreetMap's Nominatim for accurate geocoding of facility addresses.`,
            technicalDecisions: `I chose PostgreSQL with the PostGIS extension (hosted on Supabase) because it is the gold standard for geospatial databases. I utilized spatial indexing (GIST) and optimized queries using \`ST_DWithin\` to handle proximity searches efficiently. For the frontend, Next.js 15 provides the necessary performance. By offloading the heavy lifting to PostGIS, I was able to optimize geospatial query response times from ~800ms down to ~50ms.`,
            challenges: `The biggest hurdle was the data cleaning process. Address formats in Nigeria can be highly irregular, making automated geocoding prone to errors. I had to write custom scripts to parse and format addresses before passing them to Nominatim, and manually verify edge cases. On the database side, learning to write and optimize complex PostGIS queries to maintain sub-100ms response times as the dataset grew was a significant learning curve.`,
            outcome: `OpenHealth NG now serves as a fast, reliable directory for healthcare facilities. It proves that building robust, public-interest data infrastructure is feasible with modern web tools. The performance optimizations ensure that the map remains responsive even on lower-end devices, which is critical for accessibility.`,
            reflection: `If I were to expand this, I would implement a crowdsourced verification system. Static datasets eventually become stale, so allowing users or facility managers to suggest edits and verify listings would ensure the data remains accurate over time. I'm also looking into standardizing the API to encourage more open-source health projects in the region.`
        }
    },
    {
        slug: 'energy-backend',
        title: 'Energy Production Backend',
        description: 'Robust FastAPI and PostgreSQL backend implementing Domain-Driven Design for oil and gas production logging with immutable audit trails.',
        tags: ['FastAPI', 'Python', 'PostgreSQL', 'DDD'],
        href: '/projects/energy-backend',
        status: 'shipped',
        category: 'backend',
        role: 'Solo Builder',
        year: '2025',
        tier: 2,
        heroImage: '/projects/energy-backend/energy-swagger-ui.png',
        images: [
            '/projects/energy-backend/reports-swagger.png',
            '/projects/energy-backend/services-code-snippet.png',
            '/projects/energy-backend/test-code.png'
        ],
        githubUrl: 'https://github.com/Mudigram/pls',
        liveUrl: 'https://github.com/Mudigram/pls',
        keyInsight: 'Oil and gas production logging is still done with spreadsheets and paper forms — errors cost millions in misallocated revenue.'
    },
    {
        slug: 'choplife-ib',
        title: 'ChopLife IB',
        description: 'A comprehensive city discovery and review platform tailored for exploring restaurants, events, and attractions in Ibadan. Features social authentication, an admin dashboard, and dynamic user reviews.',
        tags: ['Next.js', 'Supabase', 'Redux Toolkit', 'TypeScript'],
        href: '/projects/choplife-ib',
        status: 'shipped',
        category: 'fullstack',
        role: 'Solo Builder',
        year: '2025',
        tier: 2,
        heroImage: '/projects/choplife/homepage.jpg',
        githubUrl: 'https://github.com/Mudigram/choplife_ib',
        liveUrl: 'https://choplife-city.vercel.app/'
    },
    {
        slug: 'bayse-embed',
        title: 'Bayse Embed',
        description: 'Framework-agnostic, embeddable prediction market widgets. Built using Web Components with a React wrapper, ensuring the library remains under 5KB gzipped and integrates effortlessly into React, Vue, Svelte, or vanilla HTML sites.',
        tags: ['TypeScript', 'Web Components', 'React', 'Vite'],
        href: '/projects/bayse-embed',
        status: 'shipped',
        category: 'sdk',
        role: 'Solo Builder',
        year: '2026',
        tier: 2,
        githubUrl: 'https://github.com/Mudigram/bayse-embed',
        liveUrl: 'https://bayse-markets-embed.vercel.app/'
    },
    {
        slug: 'weekly-quiz',
        title: 'Weekly Quiz',
        description: 'A gamified blockchain education platform featuring speed-based scoring, live leaderboards powered by Supabase Realtime, Discord OAuth integration, and comprehensive anti-cheat measures.',
        tags: ['Next.js', 'Zustand', 'Supabase', 'Gamification'],
        href: '/projects/weekly-quiz',
        status: 'shipped',
        category: 'fullstack',
        role: 'Solo Builder',
        year: '2026',
        tier: 2,
        heroImage: '/projects/weekly-quiz/Hero.png',
        githubUrl: 'https://github.com/Mudigram/quiz',
        liveUrl: 'https://tirualquiz.vercel.app/'
    },
    {
        slug: 'ai-knowledge-assistant',
        title: 'AI Knowledge Assistant',
        description: 'A cost-free, RAG-based document Q&A system. It utilizes FastAPI, ChromaDB, HuggingFace embeddings, and the Groq API to allow users to query uploaded documents through a Next.js drag-and-drop interface without relying on paid dependencies.',
        tags: ['Python', 'FastAPI', 'ChromaDB', 'RAG'],
        href: '/projects/ai-knowledge-assistant',
        status: 'shipped',
        category: 'ai',
        role: 'Solo Builder',
        year: '2026',
        tier: 2,
        githubUrl: 'https://github.com/Mudigram/ai-knowledge-assistant'
    },
    {
        slug: 'newmehomes',
        title: 'NewMe Homes',
        description: 'A modern, responsive marketing and accommodations platform designed and built for an independent & transitional living facility in Fort Worth, Texas.',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'Client Work'],
        href: '/projects/newmehomes',
        status: 'shipped',
        category: 'fullstack',
        role: 'Freelance Engineer',
        year: '2026',
        tier: 2,
        githubUrl: 'https://github.com/Mudigram/newmehomes',
        liveUrl: 'https://www.newmehomes.org/'
    },
    {
        slug: 'julian-designs',
        title: 'Julian Designs',
        description: 'A bespoke creative portfolio and visual identity showcase engineered for a multi-disciplinary brand designer, featuring interactive project galleries and inquiry flows.',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'Client Work'],
        href: '/projects/julian-designs',
        status: 'shipped',
        category: 'fullstack',
        role: 'Freelance Engineer',
        year: '2026',
        tier: 2,
        githubUrl: 'https://github.com/Mudigram/jd',
        liveUrl: 'https://julian-designs.vercel.app/'
    },
    {
        slug: 'csv-analyzer',
        title: 'CSV Analyzer',
        description: 'High-performance Rust CLI tool for rapid parsing, statistical aggregation, and filtering of large CSV datasets.',
        tags: ['Rust', 'CLI', 'Data'],
        href: 'https://github.com/Mudigram/csv-analyzer',
        status: 'experiment',
        category: 'tool',
        role: 'Solo Builder',
        year: '2025',
        tier: 3,
        githubUrl: 'https://github.com/Mudigram/csv-analyzer'
    },
    {
        slug: 'file-organizer',
        title: 'File Organizer CLI',
        description: 'Fast system utility in Rust that scans directories and automatically organizes files by type, creation date, and customizable rules.',
        tags: ['Rust', 'CLI', 'Systems'],
        href: 'https://github.com/Mudigram/file_organizer',
        status: 'experiment',
        category: 'tool',
        role: 'Solo Builder',
        year: '2025',
        tier: 3,
        githubUrl: 'https://github.com/Mudigram/file_organizer'
    },
    {
        slug: 'bavic-migration',
        title: 'Bavic Product Migration',
        description: 'Python data cleaning and automated migration scripts that parsed, sanitized, and migrated 800+ legacy catalog products into WordPress WooCommerce.',
        tags: ['Python', 'Automation', 'Data'],
        href: 'https://github.com/Mudigram/Bavic-Product-Migration',
        status: 'experiment',
        category: 'tool',
        role: 'Solo Builder',
        year: '2025',
        tier: 3,
        githubUrl: 'https://github.com/Mudigram/Bavic-Product-Migration'
    }
];