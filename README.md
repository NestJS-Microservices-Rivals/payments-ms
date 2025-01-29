## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# watch mode
$ npm run start:dev
```

# Hookdeck - Event Gateway - Forwarder
Create an account

Create a new connection*
1. Define your request source
Source Name*: stripe-to-localhost

2. Define your event destination*
Destination Name*: to-localhost
Destination Type*: CLI
CLI Path*: /payments/webhook

Install the CLI.
```
  npm install hookdeck-cli -g
```

Run the hookdeck command in your shell to ensure the CLI is installed.
```
  hookdeck login
```

Run hookdeck listen [PORT] stripe-to-localhost
```
hookdeck listen 3003 stripe-to-localhost
```