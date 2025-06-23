#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const command = process.argv[2];
const args = process.argv.slice(3);

const configPath = path.join(__dirname, "..", "klik.config.json");

if (!command) {
  console.log("Usage: klik <command>");
  process.exit(1);
}

// ✅ klik list
if (command === "list") {
  if (!fs.existsSync(configPath)) {
    console.error("❌ Config file not found: klik.config.json");
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  if (!config.commands || config.commands.length === 0) {
    console.log("No commands registered.");
    process.exit(0);
  }

  console.log("📜 Available Commands:");
  config.commands.forEach(cmd => {
    console.log(`- ${cmd.name}`);
  });

  process.exit(0);
}

// ✅ klik create <name>
if (command === "create") {
  const name = args[0];
  if (!name) {
    console.log("Usage: klik create <command-name>");
    process.exit(1);
  }

  const scriptPath = `scripts/${name}.js`;
  const fullScriptPath = path.join(__dirname, "..", scriptPath);

  const scriptsDir = path.dirname(fullScriptPath);
  if (!fs.existsSync(scriptsDir)) {
    fs.mkdirSync(scriptsDir, { recursive: true });
  }

  if (fs.existsSync(fullScriptPath)) {
    console.log(`❌ Command "${name}" already exists.`);
    process.exit(1);
  }

  fs.writeFileSync(
    fullScriptPath,
    `console.log("This is ${name} command!");\n`
  );

  const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  config.commands.push({ name, script: scriptPath });
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

  console.log(`✅ Command "${name}" created successfully!`);
  process.exit(0);
}

// ✅ Chạy các lệnh thông thường
if (!fs.existsSync(configPath)) {
  console.error("Config file not found: klik.config.json");
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
const found = config.commands.find(cmd => cmd.name === command);

if (!found) {
  console.error(`Unknown command: ${command}`);
  process.exit(1);
}

const scriptPath = path.join(__dirname, "..", found.script);

if (!fs.existsSync(scriptPath)) {
  console.error(`Script file not found: ${scriptPath}`);
  process.exit(1);
}

require(scriptPath);