# Technical Report: Cynbit Website Lead Experience & Architecture Improvement

- **Applicant:** Priyanshu Shekhar
- **Position:** Full Stack Developer Intern
- **Task:** Practical Technical Assessment — Improve Cynbit's Website
- **Live Deployment:** [https://cynbit-website-improvement-rust.vercel.app/](https://cynbit-website-improvement-rust.vercel.app/)
- **GitHub Repository:** [https://github.com/priyanshu2104/cynbit-website-improvement](https://github.com/priyanshu2104/cynbit-website-improvement)
- **Submission Date:** November 1, 2026

---

## 1. Executive Summary & Problem Analysis

When assessing Cynbit Technologies' website (`cynbit.in`), I evaluated the platform from both user experience and technical business operations standpoints.

Cynbit's primary identity centers on autonomous AI agents, enterprise software development, cloud systems, and specialized platforms (such as Revio and BitElevate). The visual presentation is clean and modern. However, analyzing the primary conversion path revealed a distinct friction point:

### The Friction in the Existing Contact Flow
1. **Static Contact Form vs. AI Brand Promise:** The primary engagement mechanism is a traditional static form. For an engineering company emphasizing autonomous agents and high-performance digital automation, a plain form feels disconnected from the core brand message.
2. **Ambiguity in Service Selection:** Prospective clients often have a business goal (e.g., *"automate client review responses across 10 locations"*) but may not know whether to inquire about Custom AI Agents, Full-Stack Development, or Revio. In a static form, they either write vague descriptions or bounce before completing.
3. **Mobile Typing Burden:** Long multi-field forms on mobile devices introduce unnecessary typing effort, depressing lead completion rates.
4. **Lack of Pre-Qualification Data:** Inbound leads from static forms frequently miss budget or timeline context, forcing manual back-and-forth discovery calls by sales engineers.

---

## 2. Proposed & Implemented Solution

To address these pain points, I designed and developed a comprehensive solution consisting of:

1. **Aria — Conversational Project Inquiry Assistant:**  
   A step-by-step guided assistant embedded as a floating widget on the site. It breaks down project scoping into progressive micro-commitments, uses quick-tap chips for services, budgets, and timelines, and provides instant pre-submission verification.

2. **Official Cynbit Design System Alignment:**  
   Rather than building an isolated prototype on an arbitrary dark theme, I replicated Cynbit's actual design language:
   - Primary Cynbit Teal (`#006067`) and container teal (`#007b83`).
   - Light surface (`#f7fafa`) with clean slate typography.
   - Cynbit's vector logo (`/logo.svg`) and favicon (`/favicon.svg`).
   - Top glassmorphic navigation (`glass-nav`), orbital AI graphic with animated dashed rings, Foundational Pillars, Domain Mastery, Footer, and Mobile Bottom Navigation Bar.

3. **Interactive Project Architecture & Cost Estimator:**  
   To resolve pricing and scoping opacity before prospective clients even open a contact form, I built an interactive self-service estimator directly onto the landing page. Users customize their project type, operational user volume, and architectural add-ons (such as Vector RAG or RBAC). The engine calculates sprint durations, budget projections, and dynamically synthesizes a tailored technology stack blueprint.

4. **Live Reviewer Console (Lead Inspector Drawer):**  
   To allow evaluators to immediately verify the full-stack data pipeline, I added a slide-over **Reviewer Lead Console** triggered from the bottom-left corner. It connects to the `GET /api/leads` endpoint in real-time, displaying stored records with timestamps, UUIDs, categorized service pills, and budgets.

5. **Inquiry Reference ID & Clipboard Copy:**  
   Upon successful submission, the system generates a unique enterprise reference code (e.g. `#CYN-849201`) with a one-click copy button, giving users tangible proof of receipt.

6. **Contextual Service Deep-Linking:**  
   Clicking *"Discuss Requirements →"* or *"Start Project With This Scope"* automatically triggers the assistant with the corresponding service and scope context.

---

## 3. Technology Stack & Architectural Decisions

### Frontend Layer
- **Next.js 14 (App Router):** Fast server-side rendering for landing page content paired with dynamic client components for the assistant and reviewer console.
- **TypeScript:** Strict type contracts across the conversation state machine, API payload schemas, and form fields.
- **Tailwind CSS:** Custom theme extending Cynbit's Material 3 palette and utility classes.
- **Framer Motion:** Spring-based transitions for chat bubbles, typing indicators, floating buttons, and the slide-over inspector.
- **Lucide React:** Lightweight, modern iconography.

### Backend & API Layer
- **Next.js Route Handlers (`app/api/leads/route.ts`):** Handles incoming JSON requests.
- **Zod:** Runtime validation verifying name length, email syntax, mandatory project overview (min 10 chars), and service identifiers.
- **Structured Error Responses:** Returns `422 Unprocessable Entity` with granular field error maps on failure, and `201 Created` with unique IDs on success.

---

## 4. Architectural Highlights

### 4.1 State-Driven Conversation Engine
The chat flow is governed by a declarative state machine (`ChatStep`):

```typescript
export type ChatStep =
  | 'welcome'
  | 'ask_name'
  | 'ask_service'
  | 'ask_description'
  | 'ask_budget'
  | 'ask_timeline'
  | 'ask_email'
  | 'review'
  | 'submitting'
  | 'success'
  | 'error'
```

Each step coordinates:
- The bot script resolution via `getBotMessage(step, data)`.
- Input modality (quick-tap choice pills vs formatted text input).
- Input validation prior to transitioning to the next step.

### 4.2 Real-Time Event Bus
To ensure seamless coordination between independent components:
- `cynbit-open-chat`: Dispatched by the Navbar, Hero, and Service cards to launch the assistant from anywhere on the page.
- `cynbit-lead-submitted`: Dispatched upon successful API response to instantly trigger an auto-refresh in the Reviewer Lead Console.

---

## 5. Comparative Evaluation

| Dimension | Existing Static Form | Implemented Solution |
|---|---|---|
| **Interaction Pattern** | Monolithic form with 5+ blank fields | Guided conversational flow, 1 question at a time |
| **Mobile UX** | High typing friction, screen keyboard shifts | One-tap selection pills for service, budget, and timeline |
| **Lead Qualification** | Budget and timeline often omitted | Standardized categorizations captured upfront |
| **Brand Alignment** | Generic contact form | Demonstrates Cynbit's AI automation capabilities live |
| **Verification & Trust** | Generic confirmation text | Live review card, unique reference ID, and copy function |
| **Evaluator Verification** | Hidden behind private inbox/backend | Live Reviewer Console directly on the page |

---

## 6. Recommended Next Steps for Full Production

1. **Database Integration:** Connect `/api/leads` to a persistent PostgreSQL database (e.g. Supabase or AWS RDS) with Prisma or Drizzle ORM.
2. **Sales Channel Notification:** Webhook integration to post new qualified leads directly into Cynbit's internal Slack `#leads` channel and CRM (HubSpot/Zoho).
3. **Hybrid Dynamic LLM Fallback:** Enable Aria to answer open-ended questions about Cynbit's past case studies or pricing before gracefully transitioning to the lead capture phase.
