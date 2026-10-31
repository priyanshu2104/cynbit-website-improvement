# Cynbit Website Improvement — Interactive Lead Experience & Reviewer Console

**Candidate:** Priyanshu Shekhar  
**Role:** Full Stack Developer Intern Assessment  
**Task:** Identify a meaningful improvement on Cynbit's website and implement a working prototype  
**Live URL:** [https://cynbit-website-improvement-rust.vercel.app/](https://cynbit-website-improvement-rust.vercel.app/)  
**Repository:** [https://github.com/priyanshu2104/cynbit-website-improvement](https://github.com/priyanshu2104/cynbit-website-improvement)  

---

## The Idea & Motivation

While analyzing Cynbit Technologies' website ([cynbit.in](https://cynbit.in)), I evaluated the experience from both user engagement and technical conversion standpoints. Cynbit specializes in autonomous AI agents, enterprise software development, cloud systems, and specialized tools (like Revio and BitElevate). 

However, the primary point of contact on the website is a traditional static form. For an engineering company emphasizing autonomous agents and high-performance digital automation, relying solely on a plain form has significant drawbacks:
1. **Friction & Ambiguity:** Visitors often don't know whether their requirement fits under Autonomous AI Agents, Full-Stack Development, or Revio.
2. **Mobile Typing Fatigue:** Long multi-field forms on mobile devices have high abandonment rates.
3. **Lack of Immediate Qualification:** Static submissions often miss budget or timeline context, forcing manual back-and-forth discovery calls.

To solve this, I built **Aria**, an interactive conversational project inquiry assistant, integrated seamlessly into a replica of Cynbit's official design system, coupled with a **Live Reviewer Console** to inspect ingested leads in real-time.

---

## Core Capabilities & Implemented Features

### 1. Interactive Conversational Assistant (Aria)
- **Guided Dialogue:** Multi-step intake flow covering name, service selection, project scope, budget bracket, timeline, and work email.
- **Quick-Select Pills:** One-tap chips for services, budgets, and timelines, minimizing mobile typing friction.
- **Live Summary & Review Card:** Displays a structured overview of all user selections prior to final confirmation.
- **Enterprise Tracking ID & Clipboard Copy:** Automatically assigns an inquiry reference number (e.g. `#CYN-849201`) with a one-click copy confirmation button on the success screen.

### 2. Live Reviewer Lead Inspector Drawer
- **Real-Time Data Feed:** Accessible via the bottom-left floating badge (*Reviewer Lead Console*).
- **Instant Synchronization:** Connects directly to the `GET /api/leads` endpoint and auto-refreshes via custom events whenever an inquiry is submitted in the chatbot.
- **Evaluator-Friendly:** Allows reviewers to test submitting an inquiry in the chat and instantly inspect the stored record with timestamp, UUID, and categorization.

### 3. Service Card Deep-Linking
- On the **Domain Mastery** and **Foundational Pillars** sections, clicking *"Discuss Requirements →"* opens the assistant and dynamically passes relevant service context.

### 4. Official Cynbit Design Language
- Faithfully mirrors Cynbit's Material 3 design system:
  - Colors: Primary Cynbit Teal (`#006067`), Primary Container (`#007b83`), Light Surface (`#f7fafa`), and Amber accents (`#ffddb3`).
  - Assets: Official vector `logo.svg` and `favicon.svg`.
  - Components: Glassmorphic top navigation (`glass-nav`), Cynbit AI orbital graphic with animated dashed rings, Foundational Pillars, Domain Mastery, Footer, and Mobile Bottom Navigation Bar.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom Cynbit Design Tokens)
- **Transitions / Physics:** Framer Motion
- **Schema Validation:** Zod
- **Icons:** Lucide React
- **Deployment:** Vercel (Edge Network)

---

## Project Structure

```text
cynbit-chatbot/
├── app/
│   ├── api/leads/route.ts          # POST (Zod validation) & GET (lead list)
│   ├── globals.css                 # Cynbit glass-nav, theme tokens, & custom utilities
│   ├── layout.tsx                  # Root layout with metadata and favicon
│   └── page.tsx                    # Landing page embedding all sections & widgets
├── components/
│   ├── Navbar.tsx                  # Glassmorphic top navigation bar
│   ├── HeroSection.tsx             # Cynbit hero with animated orbital AI graphic
│   ├── TickerSection.tsx           # Quick service highlights bar
│   ├── PillarsSection.tsx          # Foundational pillars (Infrastructure, SaaS, Impact)
│   ├── ServicesSection.tsx         # Domain mastery cards with scoping triggers
│   ├── Footer.tsx                  # Official footer with Jaipur office info & contact
│   ├── BottomNav.tsx               # Mobile persistent bottom navigation bar
│   ├── LeadInspectorDrawer.tsx     # Reviewer slide-over console for live API records
│   └── chatbot/
│       ├── ChatbotWidget.tsx       # Floating launcher with hint bubble & external trigger
│       ├── ChatWindow.tsx          # State-machine conversation engine
│       ├── ReviewCard.tsx          # Pre-submission confirmation summary
│       ├── SuccessCard.tsx         # Reference ID generation & clipboard copy
│       └── TypingIndicator.tsx     # Dynamic loading animation
├── lib/
│   ├── chatScript.ts               # Dialog responses per conversational step
│   └── chatTypes.ts                # TypeScript types, step enum, and option sets
├── public/
│   ├── favicon.svg                 # Cynbit favicon
│   └── logo.svg                    # Official Cynbit logo
├── TECHNICAL_REPORT.md             # In-depth architectural & evaluation report
└── vercel.json                     # Production deployment configuration
```

---

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/priyanshu2104/cynbit-website-improvement.git
   cd cynbit-website-improvement
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## API Documentation

### `POST /api/leads`
Submits and validates a project inquiry payload.

```bash
curl -X POST https://cynbit-website-improvement-rust.vercel.app/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alex Miller",
    "email": "alex@example.com",
    "service": "ai-agents",
    "projectDescription": "Looking to build an autonomous workflow for our team",
    "budget": "5l-20l",
    "timeline": "1-month"
  }'
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Got it! We'll be in touch soon.",
  "id": "e4c7980f-96eb-4dc4-839e-d4c457317789"
}
```

### `GET /api/leads`
Fetches all stored inquiries (used by the Reviewer Lead Console).

```bash
curl https://cynbit-website-improvement-rust.vercel.app/api/leads
```
