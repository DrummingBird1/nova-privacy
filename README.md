<div align="center">

<img src="assets/icon-128.png" width="96" height="96" alt="Nova Homepage icon" />

# Nova Homepage

**A beautiful, private new-tab page for Chrome.**
No accounts, no tracking, no servers — just your data, on your device.

[Live site](https://drummingbird1.github.io/nova-privacy/) · [Privacy policy](https://drummingbird1.github.io/nova-privacy/privacy.html) · [Releases](https://github.com/DrummingBird1/nova-privacy/releases) · [Support the project](#support)

🌐 **Read this in other languages:** [עברית](README.he.md)

</div>

---

## What is Nova Homepage?

Nova replaces Chrome's new-tab page with a calm, personal dashboard: a clock, the weather, your tasks, a Pomodoro timer, and a smart search bar, all in one place. Every widget is optional, every color and background is customizable, and the whole thing works in 13 languages with full right-to-left support.

This repository hosts the project's public-facing site (this README, the [landing page](https://drummingbird1.github.io/nova-privacy/), and the [privacy policy](https://drummingbird1.github.io/nova-privacy/privacy.html)) via GitHub Pages. It does not contain the extension's source code.

## Features

- 🕐 **Clock & greeting** — 12/24-hour, with a personal greeting by time of day
- 🎯 **Daily focus** — one main goal for today, resets each morning
- 🔍 **Smart search** — Google / Bing / DuckDuckGo / Brave / a custom engine, autocomplete, an inline calculator, unit converter, currency conversion, and time-zone lookup (`12*30`, `5 km to miles`, `100 usd to eur`, `time in Tokyo`), smart reminders that create a task (`remind me tomorrow at 9 to call Dan`), and `!bang` shortcuts
- 🌤️ **Live weather** — via Open-Meteo, by location or city, with UV index, a rain hint, and a 3-day forecast; backgrounds can react to it too (rain/snow/storm)
- ✅ **Tasks** — priorities, due dates, subtasks, recurring tasks, **#tags with filtering**, **reminder notifications**, drag to reorder, undo on delete, **linked Pomodoro sessions**
- 🔥 **Habit tracking** — daily streaks, **achievement badges**, an expandable **70-day heatmap**, **negative habits** (`!avoid`), and optional daily reminders
- 🍅 **Pomodoro timer** — configurable focus/break lengths, **ready-made presets** (classic/deep work/90-min), **task linking**, background sounds, real background notifications, weekly stats
- 📝 **Notes** — multiple notes with Markdown support, an **interactive checklist**, a live word count, and **PIN-lock** for privacy
- ⏱️ **Timer & stopwatch**, 🙂 **daily mood tracker**, 💧 **water intake**, 📰 **RSS/Atom news**, 📅 **upcoming calendar events** (`.ics`), 🗓️ **on this day in history**, 💹 **stocks & crypto tickers** (with **sparklines and price alerts**), 🌍 **world clocks**, ⏳ **countdowns**, ⚡ **quick access** to bookmarks and recent tabs
- 🔗 **Quick links with folders**, and **search across your open tabs**
- 🎨 **Deep customization** — theme presets with live preview, gradients, Unsplash photos, your own uploaded image, accent colors (including auto-detected from your background), compact mode, zen mode
- ⌨️ **Command palette** (`Ctrl/Cmd+K`) for fast navigation, and every keyboard shortcut can be rebound in Settings
- 🌍 **13 languages** with full RTL support: English, Hebrew, French, Spanish, German, Russian, Arabic, Portuguese, Japanese, Korean, Chinese, Hindi, Italian
- 🔒 **100% local** — settings sync only through your own `chrome.storage.sync`; nothing is ever sent to a Nova server, because there isn't one

## Install

Nova Homepage isn't on the Chrome Web Store yet — it's in active development. Check the [live site](https://drummingbird1.github.io/nova-privacy/) for the current status.

## Privacy

All your data — settings, tasks, notes, habits — stays on your device (`chrome.storage`) or syncs only through your own Google account via Chrome's built-in sync. Nova has no backend and no analytics. Weather, crypto prices, and background photos are fetched directly from their providers (Open-Meteo, CoinGecko, Unsplash) only when those features are turned on. Full details: [privacy policy](https://drummingbird1.github.io/nova-privacy/privacy.html).

## Version history

See [Releases](https://github.com/DrummingBird1/nova-privacy/releases) for what changed in each version.

## Support

Nova is free, ad-free, and built independently. If it earns a spot on your new tab:

[❤️ Patreon](https://www.patreon.com/c/IdanLights) · [☕ Ko-fi](https://ko-fi.com/idanlights) · [☕ Buy Me a Coffee](https://buymeacoffee.com/MrIdan)

## Contact

Found a bug or have a suggestion? [Open an issue](https://github.com/DrummingBird1/nova-privacy/issues).

---

<div align="center">© 2026 Nova Homepage. All data stays on your device.</div>
