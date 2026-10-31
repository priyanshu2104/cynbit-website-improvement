# Technical Report: Cynbit Website Lead Experience Improvement

- **Applicant:** Priyanshu Shekhar
- **Position:** Full Stack Developer Intern
- **Task:** Practical Technical Assessment — Improve Cynbit's Website
- **Date:** November 1, 2026

---

## 1. Problem Statement & Website Analysis

When analyzing Cynbit Technologies' website (`cynbit.in`), my goal was to evaluate it from both user experience (visitor / potential client) and technical business operations perspectives.

Cynbit's primary value proposition centers on autonomous AI agents, enterprise software development, cloud systems, and specialized platforms (such as Revio and BitElevate). The visual presentation is dark, sleek, and modern. However, examining the primary conversion path revealed a noticeable friction point:

### The Friction in the Current Lead Flow
1. **Static Contact Form:** The current engagement model relies on standard form inputs where users must manually fill in open-ended text fields. For an engineering company emphasizing autonomous agents and high-performance digital automation, a plain static form feels disconnected from the core brand promise.
2. **Ambiguous Requirements & Qualification Gaps:** Potential clients frequently have an idea or pain point (e.g., "we want to automate internal customer support") but may not know whether that falls under AI Agents, Full-Stack Development, or Revio. In a static form, they either write vague descriptions or abandon the form altogether.
3. **High Interaction Effort on Mobile:** Users browsing on mobile devices face excessive keyboard typing when entering project scopes, timelines, and budgets into multi-field forms.
4. **Delayed Feedback Loop:** Static forms submit into the ether with standard generic alert notices. There is no instant contextual response, pre-qualification check, or confirmation review.

---

## 2. Proposed Improvement

I decided to design and build **Aria**, an interactive conversational project intake widget embedded directly on the website.

Rather than forcing users to tackle an intimidating form up front, the widget breaks down project scoping into a smooth, step-by-step dialogue:
- Greets the visitor and asks for their name.
- Lets them select their primary interest area using one-tap interactive chips (AI Automation, Full-Stack, Cloud, SEO, Revio, BitElevate).
- Prompts for a brief description of the problem they are solving.
- Offers realistic timeline and budget brackets via clickable pills.
- Captures their work email.
- Displays an interactive **Review Card** summarizing their choices so they can verify everything before sending.
- Submits structured lead data directly to an API endpoint with real-time feedback.

---

## 3. Technology Stack & Architectural Decisions

To make the prototype fast, resilient, and easy to integrate into Cynbit's existing or future tech stack, I picked:

### Frontend & Application Layer
- **Next.js 14 (App Router):** Provides server-rendered landing pages for fast first-contentful paint, combined with modular client components for the chatbot widget.
- **TypeScript:** Ensures strict typing for the conversation state machine, API request/response payloads, and form data.
- **Tailwind CSS:** Configured with custom Cynbit brand tokens (deep slate `#020617`, dark card backgrounds `#1e293b`, and teal accents `#0d9488` / `#14b8a6`).
- **Framer Motion:** Delivers smooth transitions, typing indicators, floating action button toggles, and step transitions without feeling heavy.
- **Lucide React:** Lightweight, clean icon set for user interface cues.

### Backend & API
- **Next.js Route Handlers (`app/api/leads/route.ts`):** Handles incoming POST requests.
- **Zod:** Performs runtime schema validation on all submitted fields (verifying name length, valid email syntax, mandatory project details, and service enum keys).

---

## 4. Key Implementation Details

### 4.1 State-Driven Conversation Engine
Instead of cluttering the component with endless boolean flags, I structured the conversation using a state machine (`ChatStep`):

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

Each step defines:
- The bot dialogue (resolved via `getBotMessage`).
- The expected input modality (quick-tap chips vs text input).
- Specific validation rules before allowing the user to proceed.

### 4.2 Realistic Interaction Feel
To ensure the conversation feels organic:
- An animated typing indicator simulates response latency (`setTimeout` delay of 600–800ms).
- Quick-selection chips reduce typing friction on mobile screens.
- Auto-scroll keeps the newest message and active prompt in clear view.

### 4.3 Data Validation & API Endpoint
The `/api/leads` endpoint validates input data using Zod:

```typescript
const LeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  service: z.string().min(1),
  projectDescription: z.string().min(10),
  budget: z.string().min(1),
  timeline: z.string().optional(),
})
```

If validation fails, the API returns a `422 Unprocessable Entity` with specific field issues. When valid, it assigns a unique identifier and timestamp, storing the lead in memory and returning `201 Created`.

---

## 5. Measured & Anticipated Results

Comparing the standard static form to the conversational widget prototype:

| Criteria | Existing Static Form | Aria Interactive Widget |
|---|---|---|
| **User Interaction** | Monolithic form, user fills 5+ fields at once | Micro-commitments, 1 question at a time |
| **Mobile Friendliness** | Heavy typing, risk of mobile browser zoom issues | Tap-to-select pills for service, budget, timeline |
| **Lead Quality** | Often missing budget or timeline context | Guaranteed categorization and timeline data |
| **Brand Alignment** | Standard generic website form | Showcases Cynbit's AI-first engineering capabilities |
| **Drop-off Mitigation** | Users abandon without completing | Review card allows editing prior to submission |

---

## 6. Next Steps for Production Deployment

If rolled out into full production on `cynbit.in`, the recommended roadmap would be:
1. **Persistent Database:** Connect the `/api/leads` route to PostgreSQL / Supabase or Cloud Firestore.
2. **CRM Webhook:** Pipe new leads directly into Cynbit's internal CRM (e.g. Slack notifications + HubSpot/Zoho).
3. **LLM Integration:** Optionally connect the widget to an LLM endpoint (Gemini or Claude API) so the assistant can answer dynamic questions about Cynbit's past case studies and pricing before concluding the lead capture.

