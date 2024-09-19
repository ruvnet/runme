# Runme CLI API Specification

This document provides a detailed API specification for the Runme CLI commands. Each command is documented with its usage, options, and examples.

## Table of Contents

- [auth](#auth)
  - [login](#login)
  - [logout](#logout)
  - [token](#token)
- [beta](#beta)
  - [run](#run)
- [code_server](#code_server)
- [common](#common)
- [environment](#environment)
- [extension](#extension)
- [fmt](#fmt)
- [list](#list)
- [print](#print)
- [run](#run)
- [server](#server)
- [shell](#shell)
- [tasks](#tasks)

## auth

### login

**Usage:**

```
runme auth login
```

**Description:**

Log in to Runme (optional). Logging in is not required for standalone functionality.

**Options:**

- None

**Examples:**

```
runme auth login
```

### logout

**Usage:**

```
runme auth logout
```

**Description:**

Log out from Runme.

**Options:**

- None

**Examples:**

```
runme auth logout
```

### token

**Usage:**

```
runme auth token
```

**Description:**

Print runme API token.

**Options:**

- `--insecure`: To use this command, please add the --insecure parameter.

**Examples:**

```
runme auth token --insecure
```

## beta

### run

**Usage:**

```
runme beta run [command1 command2 ...]
```

**Description:**

Run one or more commands. The names are interpreted as glob patterns. In the case of multiple commands, they are executed one-by-one in the order they appear in the document. The --tag option additionally filters the list of tasks to execute by tag.

**Options:**

- `--tag`: Filter the list of tasks to execute by tag.

**Examples:**

```
runme beta run "generate-*"
runme beta run --tag=setup,teardown
```

## code_server

**Usage:**

```
runme code_server open
```

**Description:**

Launch Runme in a headless web client.

**Options:**

- `--args`: Extra args to pass to code-server.
- `--preview`: Use preview extension instead of latest stable.
- `--install`: Install the extension to code-server without launching.
- `--open`: Automatically open the code server in the browser on startup.
- `--config`: Path to code-server config file.
- `--title`: Title of the code-server window/session.

**Examples:**

```
runme code_server open
runme code_server open --args="--disable-telemetry"
```

## common

**Usage:**

```
runme common
```

**Description:**

Common utilities and functions used across various commands.

**Options:**

- None

**Examples:**

```
runme common
```

## environment

**Usage:**

```
runme environment
```

**Description:**

Environment management commands.

**Options:**

- None

**Examples:**

```
runme environment
```

## extension

**Usage:**

```
runme extension
```

**Description:**

Check your Runme VS Code extension status.

**Options:**

- `--force`: Updates extension if it's already installed.

**Examples:**

```
runme extension
runme extension --force
```

## fmt

**Usage:**

```
runme fmt
```

**Description:**

Format a Markdown file into canonical format.

**Options:**

- `--flatten`: Flatten nested blocks in the output.
- `--json`: Print out data as JSON.
- `--write`: Write result to the source file instead of stdout.

**Examples:**

```
runme fmt
runme fmt --write
```

## list

**Usage:**

```
runme list [search]
```

**Description:**

List available commands. Displays list of parsed command blocks, their name, number of commands in a block, and description from a given markdown file, such as README.md. Provide an argument to filter results by file and name using a regular expression.

**Options:**

- `--json`: Print the output in JSON format.

**Examples:**

```
runme list
runme list "setup"
```

## print

**Usage:**

```
runme print <command>
```

**Description:**

Print a selected snippet. Display the details of the corresponding command block based on its name.

**Options:**

- None

**Examples:**

```
runme print "setup"
```

## run

**Usage:**

```
runme run <commands>
```

**Description:**

Run a selected command identified based on its unique parsed name.

**Options:**

- `--dry-run`: Print the final command without executing.
- `--replace`: Replace instructions using sed.
- `--parallel`: Run tasks in parallel.
- `--all`: Run all commands.
- `--skip-prompts`: Skip prompting for variables.
- `--category`: Run from a specific category.
- `--tag`: Run from a specific tag.
- `--index`: Index of command to run, 0-based.

**Examples:**

```
runme run "setup"
runme run --all
runme run --parallel
```

## server

**Usage:**

```
runme server
```

**Description:**

Start a server with various services and a gRPC interface.

**Options:**

- `--address`: Address to create unix or IP socket.
- `--dev`: Enable development mode.
- `--runner`: Enable runner service.
- `--ai-logs`: Enable logs to support training an AI.
- `--tls`: Directory in which to generate TLS certificates & use for all incoming and outgoing messages.

**Examples:**

```
runme server
runme server --address=localhost:7890
```

## shell

**Usage:**

```
runme shell
```

**Description:**

Activate runme shell. This is an experimental feature.

**Options:**

- `--command`: Command to execute and watch.

**Examples:**

```
runme shell
runme shell --command=/bin/bash
```

## tasks

**Usage:**

```
runme tasks <command>
```

**Description:**

Generates task.json for VS Code editor. Caution, this is experimental.

**Options:**

- None

**Examples:**

```
runme tasks "setup"
```

## Interacting with the CLI from a UI

The Runme CLI can be integrated with a UI to provide a more user-friendly experience. Here are some methods to interact with the CLI from a UI:

1. **Command Execution:**
   - The UI can execute CLI commands using system calls or subprocesses.
   - Example in Python:
     ```python
     import subprocess

     command = "runme run setup"
     result = subprocess.run(command, shell=True, capture_output=True, text=True)
     print(result.stdout)
     ```

2. **Parsing Output:**
   - The UI can parse the output of CLI commands to display relevant information.
   - Example in JavaScript:
     ```javascript
     const { exec } = require('child_process');

     exec('runme list', (error, stdout, stderr) => {
       if (error) {
         console.error(`Error: ${error.message}`);
         return;
       }
       if (stderr) {
         console.error(`Stderr: ${stderr}`);
         return;
       }
       console.log(`Stdout: ${stdout}`);
     });
     ```

3. **Handling Prompts:**
   - The UI can handle prompts by providing input programmatically.
   - Example in Go:
     ```go
     package main

     import (
       "bufio"
       "fmt"
       "os/exec"
     )

     func main() {
       cmd := exec.Command("runme", "run", "setup")
       stdin, _ := cmd.StdinPipe()
       stdout, _ := cmd.StdoutPipe()

       scanner := bufio.NewScanner(stdout)
       go func() {
         for scanner.Scan() {
           fmt.Println(scanner.Text())
         }
       }()

       cmd.Start()
       stdin.Write([]byte("input\n"))
       stdin.Close()
       cmd.Wait()
     }
     ```

4. **Real-time Updates:**
   - The UI can provide real-time updates by streaming the output of CLI commands.
   - Example in Node.js:
     ```javascript
     const { spawn } = require('child_process');

     const command = spawn('runme', ['run', 'setup']);

     command.stdout.on('data', (data) => {
       console.log(`Output: ${data}`);
     });

     command.stderr.on('data', (data) => {
       console.error(`Error: ${data}`);
     });

     command.on('close', (code) => {
       console.log(`Command exited with code ${code}`);
     });
     ```

By integrating the Runme CLI with a UI, users can benefit from a more intuitive and interactive experience while leveraging the powerful capabilities of the CLI.
