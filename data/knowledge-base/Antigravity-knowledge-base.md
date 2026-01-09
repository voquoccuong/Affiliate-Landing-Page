# Google Antigravity IDE: Complete Knowledge Base

Google Antigravity, launched November 18, 2025 alongside Gemini 3, represents Google's most ambitious reimagining of developer tools since VS Code. Built from a **$2.4 billion acquisition** of Windsurf's team and technology, Antigravity inverts the traditional IDE paradigm: instead of AI being embedded as a sidebar assistant, **development surfaces exist within the agent's workflow**. This agent-first architecture enables autonomous task execution across editor, terminal, and browser simultaneously—a fundamental departure from competitors like Cursor or GitHub Copilot.

---

## Architecture fundamentals: three surfaces working in concert

Antigravity's **three-surface architecture** distinguishes it from every competitor. Upon launch, users encounter not a file tree but the **Agent Manager**—a Mission Control dashboard for spawning, monitoring, and orchestrating multiple parallel agents across workspaces.

### Agent Manager (Mission Control)
The orchestration layer where developers act as architects rather than line-by-line coders. Key components include:
- **Inbox**: Tracks all agent conversations centrally
- **Playground**: Scratch area for quick experiments before converting to workspaces
- **Parallel execution**: Multiple simultaneous agent instances with dedicated workspaces
- **Artifact visualization**: Real-time status, plans, diffs, and pending approvals

### Editor View
A familiar VS Code-based interface with agent sidebar for synchronous pair programming. Agents can modify files asynchronously—even files not currently open—while handling directory structures, refactors, and configs in the background.

### Browser Subagent
Powered by **Gemini 2.5 Computer Use**, a specialized model separate from the main coding model. Runs in its own Chrome profile (no access to your cookies/history) and can click, scroll, type, capture screenshots, record videos, and verify UI changes autonomously.

**How the surfaces interact**: User creates a task in Agent Manager → Agent generates Plan artifacts → Agent simultaneously modifies code in Editor, runs commands in Terminal, launches Browser for verification → Produces artifacts as proof → User leaves comments on artifacts → Agent incorporates feedback without stopping.

---

## Model ecosystem offers unprecedented flexibility

| Model | Purpose | Context |
|-------|---------|---------|
| **Gemini 3 Pro** | Default for code generation, planning, reasoning | 1M tokens input, 65K output |
| **Gemini 3 Flash** | High-velocity tasks, faster responses | Optimized for speed |
| **Gemini 3 Deep Think** | Complex reasoning, heavy tasks | Trades latency for depth |
| **Gemini 2.5 Computer Use** | Browser control/automation | Specialized for web interaction |
| **Nano Banana (Gemini 2.5 Image)** | Image generation and editing | Visual design tasks |
| **Claude Sonnet 4.5 / Opus 4.5** | Anthropic alternatives | Full support |
| **GPT-OSS-120B** | OpenAI open-source variant | Full support |

---

## Customization System: Rules and Workflows

### Rules: your agent's constitution

Rules are **persistent instructions** guiding agent behavior—always-on constraints the agent must consider before generating any code. Unlike workflows (triggered on-demand), rules are passive and persistent.

**Rule Locations:**
```
~/.gemini/GEMINI.md              # Global rules (all workspaces)
your-workspace/.agent/rules/     # Workspace rules (project-specific)
```

**Four Activation Modes:**

| Mode | Behavior |
|------|----------|
| `always_on` | Injected into every prompt |
| `glob` | Only activates for matching file patterns |
| `model_decision` | Agent decides if rule is relevant |
| `manual` | Must reference with `@rule-name` |

**Rule File Format (YAML Frontmatter):**
```yaml
---
trigger: "glob"
globs: ["src/**/*.tsx", "src/**/*.ts"]
description: "React/TypeScript standards for components"
---

# React Component Standards

- All components must be functional components using hooks
- Props interfaces must be prefixed with 'I' (e.g., IButtonProps)
- Use Tailwind CSS for styling; no separate CSS files
- Every component must have a corresponding .test.tsx file
```

**Best Practices for Rules:**
- Be specific and actionable—"Use TypeScript Strict Mode" not "Write good code"
- Layer rules: global for personal preferences, workspace for project standards
- Include brief rationale for non-obvious rules
- Split large rule sets into focused files with appropriate glob patterns

### Workflows: automated task recipes

Workflows are **saved prompts** defining step-by-step agent instructions, triggered on-demand via slash commands.

**Workflow Locations:**
```
your-workspace/.agent/workflows/          # Local (project-specific)
~/.gemini/antigravity/global_workflows/   # Global (all workspaces)
```

**YAML Frontmatter Format:**
```yaml
---
description: Build and deploy to production
---
1. Ensure we're on the main branch
   git checkout main

// turbo
2. Pull latest changes
   git pull origin main

// turbo
3. Install dependencies
   npm install

4. Run the full test suite
   npm test

// turbo
5. Build the production bundle
   npm run build

6. Deploy to production server
   npm run deploy:prod
```

**Turbo Mode Annotations:**
- `// turbo`: Auto-runs **only that single step** without confirmation
- `// turbo-all`: Auto-runs **all steps** involving `run_command`

**Triggering Workflows:** Type `/` in chat → select from dropdown. Filename (minus `.md`) becomes the slash command: `.agent/workflows/deploy-prod.md` → `/deploy-prod`

**Workflow Chaining Limitation:** No native syntax for workflows to call other workflows. Workaround: create master workflows combining steps from multiple workflows.

---

## Agent modes and execution policies

### Development modes shape agent autonomy

| Mode | Terminal | Review | Best For |
|------|----------|--------|----------|
| **Agent-Driven** | Turbo | Always Proceed | Greenfield scaffolding, clear tasks |
| **Agent-Assisted** | Auto | Agent Decides | Most development (recommended) |
| **Review-Driven** | Off | Request Review | Security-sensitive code |
| **Custom** | Configurable | Configurable | Hybrid workflows |

### Terminal command policies

| Policy | Behavior |
|--------|----------|
| **Off** | Never auto-execute except Allow List commands |
| **Auto** | Agent evaluates risk, asks permission for dangerous commands |
| **Turbo** | Always auto-execute except Deny List commands |

**Allow List** (positive security model): Everything forbidden unless permitted
```
ls -al
git status
npm test
```

**Deny List** (negative security model): Everything allowed unless forbidden
```
rm -rf
sudo
curl
wget
```

### Review policy options

| Policy | Behavior |
|--------|----------|
| **Always Proceed** | Never asks for review; changes apply automatically |
| **Agent Decides** | Asks only for ambiguous/risky decisions (default) |
| **Request Review** | Requires approval before every major step |

---

## Artifacts: verifiable proof of work

Artifacts solve the **trust gap**—instead of raw tool calls, agents produce tangible deliverables enabling verification at a glance.

### Artifact types

| Type | Purpose | Storage |
|------|---------|---------|
| **Task Lists** | Pre-implementation breakdown | `~/.gemini/antigravity/brain/<conversation-id>/task.md` |
| **Implementation Plans** | Technical details, affected files, decisions | `…/implementation_plan.md` |
| **Walkthroughs** | Post-completion summary with visual evidence | `…/walkthrough.md` |
| **Code Diffs** | Line-by-line changes | Editor/Agent Manager |
| **Screenshots** | UI state before/after changes | Embedded in artifacts |
| **Browser Recordings** | Video proof of dynamic interactions | `…/browser_recordings/` |

### Commenting system enables iterative feedback

Google Docs-style comments directly on artifacts:
1. Select specific text, actions, or screenshot areas
2. Add inline comments/instructions
3. Submit to agent
4. Agent incorporates feedback without stopping execution

### Knowledge base creates persistent memory

Antigravity treats **learning as a core primitive**. The Knowledge Subagent (async background process) distills conversations into **Knowledge Items (KIs)**:

```
~/.gemini/antigravity/knowledge/
└── <ki-name>/
    ├── metadata.json    # Title, summary, source refs
    ├── timestamps.json  # Access/modification times
    └── artifacts/       # Markdown documentation
```

Later conversations can reuse KIs without redoing research—strategies from previous tasks become available for new projects.

---

## Browser subagent capabilities

The browser subagent uses **Gemini 2.5 Computer Use**—a specialized model for web interaction.

**Core Capabilities:**
- Click, scroll, type, navigate pages
- Read console logs and DOM content
- Capture screenshots and record video sessions
- Verify UI changes visually
- Perform automated E2E testing

**Configuration via `~/.gemini/antigravity/browserAllowlist.txt`:**
```
localhost
your-app.vercel.app
staging.yourcompany.com
```

Add only trusted domains to prevent prompt injection attacks from compromised websites.

**Extension Required:** Install the Antigravity Chrome extension for full browser integration.

---

## Security architecture and considerations

### Permission hierarchy

| Layer | Scope |
|-------|-------|
| **Workspace Isolation** | Agent only accesses workspace files + `~/.gemini/` |
| **Trusted Workspace Model** | Must explicitly trust folder before AI features activate |
| **Terminal Policies** | Allow/Deny lists control command execution |
| **Browser Allowlist** | Domain restrictions for web navigation |

### Credential handling

- MCP server credentials stored via UI-driven setup
- Google Cloud IAM integration available
- API keys stored locally, not exposed in chat
- Environment variables via `.env` files

### Security best practices

- Start with **Request Review** mode when learning
- Never run on primary OS drive with full permissions
- Use WSL2 on Windows for sandboxed execution
- Ensure WSL2 distributions contain no production credentials
- Enable 2FA on all accounts with agent access
- Use dedicated Google accounts (not primary)

**Known Vulnerability:** Persistent code execution vulnerability discovered 24 hours after launch—trusted workspace can become backdoor if compromised.

---

## Practical tips for effective use

### Plan mode vs Fast mode

| Mode | Use Case |
|------|----------|
| **Planning** | Complex tasks, deep research—produces artifacts, thoroughly plans |
| **Fast** | Quick fixes, variable renames—direct execution, minimal overhead |

### Effective prompting patterns

**Good prompt:**
```
Create a user registration form with:
- Fields: email, password, confirm password, name
- Validation: email format, password min 8 chars with 1 uppercase and 1 number
- Error messages displayed inline
- Submit button disabled until valid
```

**Problematic prompt:**
```
Build a complete social network with posts, comments, likes, follows, messages, notifications, etc.
```

### Common pitfalls to avoid

- **Overwhelming prompts**: Break into phases, tackle one feature at a time
- **Missing context**: Use `@` to reference specific files
- **Untested code**: Always have agent verify via browser
- **Security exposure**: Use Allow List, not Turbo mode initially
- **Rate limit exhaustion**: Plan mode consumes more tokens; switch to Fast for simple tasks

### Debugging commands

```bash
antigravity --version          # Check version
antigravity --doctor           # Run diagnostics
antigravity --show-logs        # View logs
antigravity --reset-settings   # Reset configuration
```

---

## Complete directory reference

```
~/.gemini/
├── GEMINI.md                              # Global rules
└── antigravity/
    ├── brain/                             # Conversation artifacts
    │   └── <conversation-id>/
    │       ├── task.md
    │       ├── implementation_plan.md
    │       └── walkthrough.md
    ├── knowledge/                         # Knowledge Items
    ├── conversations/                     # Encrypted conversation state
    ├── browser_recordings/                # WebP videos
    ├── browserAllowlist.txt               # Allowed browser domains
    ├── global_workflows/                  # User-level workflows
    └── mcp_config.json                    # MCP server configuration

your-workspace/
└── .agent/
    ├── rules/                             # Workspace rules
    └── workflows/                         # Workspace workflows
```

---

## Resources and community

### Official documentation

| Resource | URL |
|----------|-----|
| Official Site | https://antigravity.google/ |
| Documentation | https://antigravity.google/docs |
| Download | https://antigravity.google/download |
| Google Codelabs Tutorial | https://codelabs.developers.google.com/getting-started-google-antigravity |
| Google Developers Blog | https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/ |

### Community resources

- **antigravity.codes**: 1,500+ MCP servers, 500+ AI coding rules & workflows
- **awesome-antigravity.com**: Searchable database of prompts, agent personas, mission templates
- **DEV Community**: Tutorials at dev.to (search "antigravity")

### GitHub template repositories

- **study8677/antigravity-workspace-template**: Starter kit optimized for Gemini 3 Agentic Workflows
- **MichaelZelbel/awesome-antigravity**: IDE extensions, agent workflows, community hacks
- **vincenthaywood/antigravity-setup**: Standard setup with TaskMaster integration, 14 workflows

### Video tutorials

- **"Learn the basics of Google Antigravity"**: Official 14-minute tutorial by Kevin Hou (Google engineer)
- **Google Antigravity YouTube Channel**: https://www.youtube.com/@googleantigravity

---

## Competitive positioning summary

| Feature | VS Code | Cursor | Windsurf | **Antigravity** |
|---------|---------|--------|----------|-----------------|
| **Architecture** | Traditional | AI-native | AI-native | **Agent-first** |
| **Multi-Agent** | ❌ | ❌ | Limited | **✅ Parallel** |
| **Browser Automation** | ❌ | ❌ | ❌ | **✅ Built-in** |
| **Artifacts System** | ❌ | Basic | Basic | **✅ Comprehensive** |
| **Async Workflows** | ❌ | ❌ | Limited | **✅ Native** |
| **Persistent Memory** | ❌ | Limited | Limited | **✅ Knowledge Base** |

Antigravity positions Google as the company defining the transition from AI-assisted to fully agentic development—where agents operate across all surfaces simultaneously and autonomously, producing verifiable proof of their work.