# Klik CLI

Welcome to Klik CLI, the fastest and easiest way to build your own custom command-line tools — no boilerplate or config required. In just a few kliks, you can create, run, and manage reusable CLI commands with ease.

## Table of Contents

- [1. Overview](#1-overview)
- [2. Features](#2-features)
- [3. How It Works](#3-how-it-works)
- [4. Getting Started](#4-getting-started)
- [5. Usage](#5-usage)
- [6. Ecosystem Metrics](#6-ecosystem-metrics)
- [7. Roadmap](#7-roadmap)
- [8. Community & Support](#8-community--support)
- [9. License](#9-license)
- [10. Mascot: KliKko the Clicker](#10-mascot-klikko-the-clicker)

---

## 1. Overview

Klik CLI empowers developers and script lovers to instantly scaffold and run custom CLI commands from a simple JSON config file. No more messing with argument parsers or `bin` setup—just create, klik, and run.

---

## 2. Features

- ⚙️ **No-Boilerplate Setup**: Build a working CLI tool with a single config file and script folder.
- ⚡ **klik create**: Instantly generate a new command script with just one line.
- 📜 **klik list**: View all your available commands at any time.
- 🔧 **JSON-based Configuration**: Easily register and organize your scripts via `klik.config.json`.
- 🚀 **Plug-and-Play**: Works out of the box with Node.js, no dependencies required.

---

## 3. How It Works

1. **Install**: Use `npm install -g @doxuta/klik` to install CLI globally.
2. **Create**: Use `klik create <name>` to auto-generate a new command.
3. **Run**: Execute with `klik <name>`.
4. **Manage**: View commands via `klik list`.

---

## 4. Getting Started

### Prerequisites

- Node.js ≥ v14  
- `npm` or `yarn`

### Install via NPM

```bash
npm install -g @doxuta/klik