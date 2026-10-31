# Cynbit Website Improvement — Interactive Lead Inquiry Assistant

**Candidate:** Priyanshu Shekhar  
**Role:** Full Stack Developer Intern Assessment  
**Task:** Identify an improvement on Cynbit's website and build a working prototype  

---

## The Idea & Motivation

While browsing through Cynbit's website ([cynbit.in](https://cynbit.in)), I noticed that Cynbit focuses heavily on AI automation, autonomous systems, and modern digital development. However, the primary point of contact is a traditional, static form. 

For a company helping clients build intelligent automated workflows, having a static contact form felt like a missed opportunity:
1. **Friction:** Visitors often aren't sure whether they need custom full-stack development, an AI agent, cloud architecture, or Revio.
2. **Engagement:** Static forms have high drop-off rates on mobile and desktop.
3. **Qualification:** Leads submitted through standard forms often lack project scope, timeline, and budget context, requiring back-and-forth emails.

To solve this, I designed and built **Aria**, an interactive project inquiry chatbot widget embedded right into the site. It guides prospective clients through a smooth, conversational flow, categorizes their requirements, collects their timeline and budget via quick-select options, and submits a structured lead.

---

## Key Features

- **Interactive Conversational Flow:** 7-step guided questionnaire that feels personal and responsive.
- **Quick-select Pills:** Instead of making users type everything on mobile, options for services, budgets, and timelines can be tapped with one click.
- **Pre-submission Review Card:** Displays a live summary of all selections before final submission so the user can verify their details.
- **Instant Validation:** Client-side validation for name, email format, and description length, paired with server-side Zod schema validation.
- **API Backend:** `/api/leads` route handling JSON payloads, validation, error handling, and structured response codes.
- **Responsive Cynbit Theme:** Styled with custom dark mode and teal accents matching Cynbit's brand identity.

---

## Tech Stack Used

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Transitions / Animation:** Framer Motion
- **Schema Validation:** Zod
- **Icons:** Lucide React

---

## Project Structure

```text
cynbit-chatbot/
├── app/
│   ├── api/leads/route.ts       # POST endpoint for lead validation & intake
│   ├── globals.css              # Custom styling & utility classes
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Landing page embedding the widget
├── components/
│   ├── HeroSection.tsx          # Main header section
│   ├── ServicesSection.tsx      # Cynbit services showcase
│   ├── StatsSection.tsx         # Key highlights
│   └── chatbot/
│       ├── ChatbotWidget.tsx    # Floating widget container & trigger
│       ├── ChatWindow.tsx       # Conversation engine and step coordinator
│       ├── ReviewCard.tsx       # Summary card component
│       ├── SuccessCard.tsx      # Submission confirmation view
│       └── TypingIndicator.tsx  # Dynamic loading animation
├── lib/
│   ├── chatScript.ts            # Conversation responses per state
│   └── chatTypes.ts             # TypeScript definitions and option lists
└── TECHNICAL_REPORT.md          # In-depth architectural & evaluation report
```

---

## Running Locally

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd cynbit-chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser. The chatbot launcher will appear in the bottom-right corner.

---

## Testing the API

You can test the lead intake endpoint directly via curl:

```bash
curl -X POST http://localhost:3000/api/leads \
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
