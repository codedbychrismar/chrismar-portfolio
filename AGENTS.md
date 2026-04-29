# AGENTS.md - Development Rules

These instructions apply to this project and are binding for all Codex work in this repository.

## 1. Stack Requirements

- This project must be built with TypeScript, React TSX, and Tailwind CSS.
- React components must use `.tsx` files.
- Shared TypeScript logic that does not render JSX should use `.ts` files.
- Styling should use Tailwind CSS utilities and existing Tailwind configuration first.
- Do not introduce another styling system, UI framework, or plain CSS pattern unless the user explicitly approves it.

## 2. Feature-Based Structure

- Use a feature-based folder structure under `src/features/`.
- Each feature should keep its own implementation details grouped by responsibility.
- Prefer this structure for new or expanded features:

```text
src/features/<feature-name>/
  components/
  constants/
  hooks/
  pages/
  services/
  types/
  utils/
  index.ts
```

- Keep reusable application-wide code in `src/shared/`.
- Keep route-level screens in feature `pages/` folders when they belong to a feature.
- Keep feature-specific UI in that feature's `components/` folder.
- Do not create unrelated folder layouts when the feature-based structure already supports the use case.

## 3. Barrel Exports

- Use barrel files for clean module boundaries.
- Each feature should expose its public API through `src/features/<feature-name>/index.ts`.
- Subfolders may also use `index.ts` files when they improve imports and readability.
- Prefer importing from feature or shared barrels instead of deep internal paths.
- Do not export private implementation details through a barrel unless another module truly needs them.

## 4. File and Code Safety

- Always read the existing file before deciding whether it should be replaced, deprecated, or left alone.
- No file deletion is allowed.
- No code deletion is allowed unless the user explicitly asks for the exact removal.
- If a file becomes unused, do not delete it.
- Rename unused files so `DEPRECATED` appears in the filename and add a short header comment explaining what replaced it.
- Prefer one active app entry file and one active global stylesheet unless the user explicitly requests another active entry point.
- Preserve user changes and existing project-specific behavior while editing.
- Keep changes scoped to the user's request.

## 5. Git Restrictions

- Do not run git commands in this project.
- Do not create commits, branches, tags, stashes, resets, checkouts, rebases, merges, or pushes.
- Do not inspect git status, diffs, or logs unless the user explicitly allows git actions.

## 6. Implementation Rules

- Follow existing naming, component, and Tailwind conventions before adding new patterns.
- Keep components small and focused.
- Move reusable UI or logic into `src/shared/` only when it is used by multiple features.
- Keep feature-specific hooks, services, constants, types, and utilities inside the owning feature.
- Avoid duplication when a local helper or shared abstraction already exists.

## 7. Compliance

- Before editing code, read this file and follow it.
- If a requested change conflicts with these rules, ask the user before proceeding.
