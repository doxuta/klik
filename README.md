Twap CLI

Welcome to Twap CLI, the fastest and easiest way to build your own custom command-line tools — no boilerplate or config required. In just a few twaps, you can create, run, and manage reusable CLI commands with ease.

Table of Contents

1. Overview

2. Features

3. How It Works

4. Getting Started

5. Usage

6. Ecosystem Metrics

7. Roadmap

8. Community & Support

9. License

10. Mascot: Klibull the Clicker

1. Overview

Twap CLI empowers developers and script lovers to instantly scaffold and run custom CLI commands from a simple JSON config file. No more messing with argument parsers or bin setup—just create, twap, and run.

2. Features

⚙️ No-Boilerplate Setup: Build a working CLI tool with a single config file and script folder.

⚡ twap create: Instantly generate a new command script with just one line.

📜 twap list: View all your available commands at any time.

🔧 JSON-based Configuration: Easily register and organize your scripts via twap.config.json.

🚀 Plug-and-Play: Works out of the box with Node.js, no dependencies required.

3. How It Works

Install: Use npm install -g @doxuta/twap to install CLI globally.

Create: Use twap create <name> to auto-generate a new command.

Run: Execute with twap <name>.

Manage: View commands via twap list.

4. Getting Started

Prerequisites

Node.js ≥ v14

npm or yarn

### Install via NPM

```bash
npm install -g @doxuta/twap```

---

## 5. Usage

### Create a New Command

```bash
twap create greet```

### List Available Commands

```bash
twap list```

### Run a Command

```bash
twap greet```

---

6. Ecosystem Metrics

📦 Total Commands Deployed: Updates as you run twap create.

🧩 Local CLI Tooling: Entire ecosystem is stored in a single folder.

7. Roadmap

✅ v1.0: Basic CLI command system with create, list, and config support.

🔜 v1.1: Command aliases, delete, and rename support.

🚧 v2.0: Plugin system and interactive CLI prompts.

✨ v2.1: CLI project templates (React, Express, etc.)

🧠 Future: Remote command registry, AI-assisted script generation.

8. Community & Support

📢 Telegram: @twapCLIchannel (coming soon)

📚 Documentation: See /docs folder (WIP)

🐛 GitHub Issues: Twap GitHub Repo



## 9. License

This project is released under the **MIT License**.

---

## 10. Mascot: Klibull

Meet **Klibull**, our bold, blockchain-charging buddy:

- 🐂 **Appearance**: A cheerful cartoon bull with a glossy pastel coat of Ethereum-inspired pink and blue, outlined in bold lines and brimming with energy.
- 😄 **Personality**: Energetic, optimistic, and fiercely loyal. Klibull is always ready to charge into action, especially when it involves community creativity.
- ⚡ **Role**: Shows up when users mint or remix memes on Klik, stomping joyfully and leaving behind a sparkle trail of motivation. When a creation hits just right, he gives a proud head nod and flashes his iconic grin.

![Klibull Mascot](/docs/klibull.png)