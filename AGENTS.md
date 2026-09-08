# Iris & Oak Codex Instructions

These instructions apply to this repository. If they conflict with a direct user instruction in the current conversation, follow the user's current instruction.

## Permission and approval rules

- Treat planning, review, diagnosis, pricing, copywriting, and strategy requests as read-only unless the user clearly asks for implementation.
- Recommend proposed code/content changes before making them when the request is exploratory or ambiguous.
- Make local file changes only when the user explicitly asks to create, update, implement, or apply changes.
- Never commit, push, deploy, merge, tag, open a pull request, or run any external write action without explicit user confirmation for that exact action.
- Do not treat approval for local changes as approval to commit, push, or deploy.
- After making changes, clearly state exactly what was changed, removed, or adjusted.

## Secret and environment-file rules

- Do not read, print, copy, modify, rename, delete, or summarize `.env`, `.env.local`, `.env.*`, secret files, keys, tokens, credentials, or private certificates.
- Do not expose environment values in terminal output or final responses.
- If a build/check needs an environment variable, use a safe process-only dummy value only when appropriate, and state that no env file was read or changed.

## File editing rules

- Inspect only the files needed for the current task.
- Prefer `rg`/`rg --files` for searching.
- Use `apply_patch` for local file edits.
- Preserve unrelated user changes in the working tree.
- Avoid destructive commands such as `git reset --hard`, `git checkout --`, broad `rm`, or recursive deletes unless the user explicitly requests the exact action and target.

## Verification rules

- Run the smallest relevant checks for the change.
- For code or UI changes, prefer `git diff --check` and the project's build/check command before handing work back.
- For copy-only or instruction-only changes, `git diff --check` is usually sufficient.
- If a check cannot be run, explain why and list what was verified instead.

## Iris & Oak project context

- This is the Iris & Oak business website.
- Keep the tone calm, polished, warm, and client-facing.
- Service pages should clearly distinguish entry-level fixed-scope offers from bespoke/custom work.
- Website Essentials is the entry-level fixed-scope offer.
- Launch, Refresh, Care, and Custom services should not be blurred into the Essentials package.
- Care plans may include one-off, monthly, and annual payment options, but terms should remain clear and avoid overpromising support.

## Handoff expectations

- End with a concise summary of changed files, verification performed, and anything still needing user review.
- If no commit/push/deploy has been approved, explicitly state that the work remains local.