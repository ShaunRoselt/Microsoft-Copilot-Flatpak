# Copilot Web Flatpak

Unofficial Flatpak wrapper for https://copilot.microsoft.com.

## Build

```bash
flatpak-builder --user --install --force-clean build-dir io.github.ShaunRoselt.CopilotWeb.json
```

## Run

```bash
flatpak run io.github.ShaunRoselt.CopilotWeb
```

## Flathub notes

- Keep the app clearly labeled as unofficial.
- Do not use Microsoft branding or assets without permission.
- Keep permissions minimal; this wrapper only requests network, display, audio, DRI, and downloads access.
- Before submitting to Flathub, verify AppStream metadata, screenshots, and license information.

