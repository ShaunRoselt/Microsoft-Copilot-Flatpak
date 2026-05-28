# Copilot Desktop Flatpak

Unofficial Web App for Microsoft Copilot providing the desktop user experience you would expect on the Linux desktop.

## Build

```bash
flatpak-builder --user --install --force-clean build-dir io.github.shaunroselt.copilotweb.json
```

## Run

```bash
flatpak run io.github.shaunroselt.copilotweb
```

## Flathub notes

- Keep the app clearly labeled as unofficial.
- Do not use Microsoft branding or assets without permission.
- Keep permissions minimal; this wrapper only requests network, display, audio, DRI, and downloads access.
- Before submitting to Flathub, verify AppStream metadata, screenshots, and license information.
