#!/usr/bin/env node

const { execSync } = require('child_process');
const { Command } = require('commander');
const chalk = require('chalk');

// Helper function to execute shell commands
function executeCommand(command) {
  try {
    console.error(chalk.blue(`Executing command: ${command}`));
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(chalk.red(`Error executing command: ${command}`));
    process.exit(1);
  }
}

// Program: nodejs-cli
const program = new Command();
program
  .version('1.0.0')
  .description('A command-line interface for setting up a development environment');

// Main command: help
program
  .command('help')
  .description('Display help information')
  .action(() => {
    program.help();
  });

// Main command: development
const development = program
  .command('development')
  .description('Commands for managing development environment');

// Subcommand under development: setup
development
  .command('setup')
  .description('Setup the development environment')
  .action(() => {
    executeCommand('~/node-cli/development/setup.sh');
    console.log(chalk.green('Development environment setup completed.'));
  });

// Parse the command-line arguments
program.parse(process.argv);
