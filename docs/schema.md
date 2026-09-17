# Database Schema — SKIT VLab MVP

MongoDB (Atlas). 4 collections for MVP — kept minimal on purpose (see docs/future-scope.md
for what's deliberately NOT here: notifications, certificates, audit_logs, analytics).

---

## 1. `users`
Mock-seeded accounts (Student + Faculty). No real ERP integration in MVP.

| Field | Type | Notes |
|---|---|---|
| `_id` | ObjectId | auto |
| `name` | String | required |
| `email` | String | required, unique |
| `passwordHash` | String | bcrypt hash, never store plain text |
| `role` | String | enum: `'student'` \| `'faculty'` |
| `collegeId` | String | mock college ID, e.g. `IT21B045` |
| `createdAt` | Date | default: now |

---

## 2. `labs`
Just one document for MVP: the Web Development Lab.

| Field | Type | Notes |
|---|---|---|
| `_id` | ObjectId | auto |
| `name` | String | "Web Development Lab" |
| `subjectCode` | String | "ITUP422" |
| `semester` | Number | 4 |
| `branch` | String | "IT" |
| `description` | String | short blurb |

---

## 3. `experiments`
The 5 MVP experiments, linked to the one lab.

| Field | Type | Notes |
|---|---|---|
| `_id` | ObjectId | auto |
| `labId` | ObjectId | ref → `labs._id` |
| `order` | Number | 1–5, for sequencing |
| `title` | String | e.g. "Static Bookstore Web Pages" |
| `objective` | String | 1–2 sentences |
| `theory` | String | short concept explanation (markdown ok) |
| `steps` | [String] | ordered array of step-by-step instructions |
| `requiredTools` | [String] | e.g. ["VS Code", "Node.js"] |
| `sampleTask` | String | the practice task description |

---

## 4. `submissions`
One per (student, experiment) pair.

| Field | Type | Notes |
|---|---|---|
| `_id` | ObjectId | auto |
| `experimentId` | ObjectId | ref → `experiments._id` |
| `studentId` | ObjectId | ref → `users._id` |
| `content` | String | text answer, code snippet, or external link |
| `submittedAt` | Date | default: now |
| `status` | String | enum: `'submitted'` \| `'evaluated'` |
| `marks` | Number | null until evaluated |
| `feedback` | String | null until evaluated |
| `evaluatedAt` | Date | null until evaluated |

---

## Relationships
```
users (student) ──< submissions >── experiments ──< labs
users (faculty) ──writes feedback on──> submissions
```

## Indexes to add later (not needed at MVP scale, note for Step 12/13)
- `users.email` — unique index (needed immediately for login lookups)
- `submissions`: compound index on `{experimentId, studentId}` to prevent duplicate submissions and speed up progress queries
