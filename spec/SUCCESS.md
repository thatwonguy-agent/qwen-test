# Success Criteria

## Required Files

- `README.md` — human-facing documentation
- `spec/GOAL.md` — goal and definition of done
- `spec/SUCCESS.md` — this file
- `spec/CONSTRAINTS.md` — hard rules
- `spec/ARCHITECTURE.md` — stack and file map
- `.github/workflows/ci.yml` — CI/CD pipeline
- `.gitignore` — ignore patterns

## CI Checks Must Pass

- [x] validate-spec job passes
- [x] security-scan job passes (no exposed secrets)
- [x] build/lint job passes
- [x] All required files from ARCHITECTURE.md exist

## Deployment (Public Repos Only)

- [x] GitHub Pages deployed (if public + index.html present)
- [x] Live URL accessible and returning HTTP 200

## Notifications

- [x] Telegram fires on push (success or failure)
- [x] Telegram fires on new PR
- [x] Telegram fires on new issue
