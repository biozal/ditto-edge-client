# Ditto Edge Client 

Tauri + React + TailwindCSS + Shadcn UI  - Ditto Client Prototype

## Prerequisites

You will need to have the following tools installed:
- [Deno](https://deno.com/runtime)
- [VS Code](https://code.visualstudio.com/)  
(or Cursor or some other IDE that supports web based development)

You will want to install the following extensions in VS Code:
- [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)


## Debug 
```sh
  deno install
  deno task tauri dev
```

## Mobile
```sh
  deno task tauri android init
  deno task tauri ios init
```

For Android development, run:
  deno task tauri android dev

For iOS development, run:
  deno task tauri ios dev