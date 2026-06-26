# Atlas OS

Atlas OS is an AI-powered operating system for ambitious entrepreneurs. It helps founders turn scattered ideas into executable businesses using AI, automation, and disciplined strategy.

The current foundation is centered on the first paid offer: the Atlas Idea-to-Business Sprint. The sprint turns a messy business idea into a clear concept, target customer, pain statement, first paid offer, revenue model, 30-day execution roadmap, automation opportunities, and a build/no-build recommendation.

## Sprint 1 Status

Sprint 1 is complete.

This repository currently contains the clean technical scaffold for Atlas OS. It uses mock data only and establishes the first app routes, reusable components, shared types, product documentation, and local development workflow.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Mock data in TypeScript
- Component-based folder structure

## Local Setup

Use `npm.cmd` on Windows because PowerShell may block the regular `npm` shim.

```powershell
npm.cmd install
npm.cmd run dev
```

Open the app at:

```text
http://localhost:3000
```

Production build and verification:

```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd audit --omit=dev
```

## Available Routes

- `/` - Landing page for Atlas OS and the Idea-to-Business Sprint
- `/intake` - Mock intake form for an entrepreneur's messy idea
- `/dashboard` - Mock future client workspace
- `/blueprint` - Mock strategy blueprint output

## Current Limitations

- No authentication
- No payments
- No database
- No AI API calls
- No real intake persistence
- No client accounts
- No automated blueprint generation
- Mock data only

These limitations are intentional for Sprint 1. The goal was to create a clean foundation without overbuilding the full Atlas OS platform.

## Next Sprint Candidate

The strongest Sprint 2 candidate is a real intake workflow: persist submitted intake data and create a simple review path for preparing the first manual Atlas Idea-to-Business Sprint.

Do not add Supabase, auth, Stripe, or AI APIs until that sprint objective is explicitly approved.
