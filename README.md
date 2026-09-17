# SKIT VLab — Smart Virtual Laboratory (MVP)

Independent academic project. **Not officially affiliated with or endorsed by SKIT, Jaipur.**

## What this is
A minimal virtual laboratory platform for one SKIT lab (Web Development), built to demonstrate:
one-time environment guidance, semester-wise experiments, student submissions, and faculty evaluation.

## MVP Scope (Level 1, minimized)
**In scope:**
- 1 department, 1 semester, 1 lab (Web Development)
- 2 roles: Student, Faculty (mock-seeded accounts — no real ERP integration)
- 4–5 real syllabus-based experiments (theory, steps, sample task)
- Submission (text/link) + Faculty evaluation (marks + feedback)
- Basic progress tracking

**Explicitly out of scope for MVP** (see `docs/future-scope.md`):
Admin panel, real ERP integration, online code execution, analytics, notifications,
certificates, AI assistant, Docker/CI-CD.

## Tech Stack
- Frontend: React (Vite) + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB (Atlas)
- Auth: JWT + bcrypt, role-based middleware

## Project Structure
```
skit-vlab/
 ├── backend/     # Express API
 ├── frontend/    # React app
 └── docs/        # syllabus data, schema, scope notes
```

## Status
🚧 In development — see `docs/checklist.md` for current progress.
