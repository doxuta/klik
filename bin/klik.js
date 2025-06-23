#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

// Lấy tham số dòng lệnh, ví dụ: klik hello
const command = process.argv[2];

if (!command) {
  console.log("Usage: klik <command>");
  process.exit(1);
}

// Đọc file cấu hình
const configPath = path.join(__dirname, "..", "klik.config.json");

if (!fs.existsSync(configPath)) {
  console.error("Config file not found: klik.config.json");
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));

// Tìm command tương ứng
const found = config.commands.find(cmd => cmd.name === command);

if (!found) {
  console.error(`Unknown command: ${command}`);
  process.exit(1);
}

// Chạy script tương ứng
const scriptPath = path.join(__dirname, "..", found.script);

if (!fs.existsSync(scriptPath)) {
  console.error(`Script file not found: ${scriptPath}`);
  process.exit(1);
}

// Import và chạy
require(scriptPath);