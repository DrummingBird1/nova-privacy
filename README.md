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

Nova replaces Chrome's new-tab page with a calm, personal dashboard: a clock, the weather, your tasks, a Pomodoro timer, and a smart search bar, all in one place. Every widget is optional, every color and background is customizable, and the whole thing works in 18 languages with full right-to-left support. Version 3 adds a free-form dashboard builder and a built-in productivity hub.

This repository hosts the project's public-facing site (this README, the [landing page](https://drummingbird1.github.io/nova-privacy/), and the [privacy policy](https://drummingbird1.github.io/nova-privacy/privacy.html)) via GitHub Pages. It does not contain the extension's source code.

## Features

**New in 3.0:**

- 🧩 **Dashboard builder** — switch to a **free grid** (a 12×8 canvas) and drag and resize every widget anywhere, with Alt+Arrow keys as a keyboard alternative. A visual **widget gallery** turns widgets on and off, the **theme studio** saves your look as a named theme you can share with a copyable code, and **background effects** (stars, particles, aurora, rain, snow, seasonal) plus adjustable glass add some life
- 📋 **Productivity hub** — one click from the top bar: a **daily briefing**, a **weekly planner** (drag tasks between days), a **kanban board** with projects, **insights** (streaks, charts and a 12-week heatmap), a **journal** with daily prompts, and **goals** with steps and numeric tracking
- 🧠 **Smart add, on your device** — type `call mom tomorrow urgent` and the date, priority, #tags and +projects are understood (English and Hebrew, no AI needed). If your Chrome has built-in AI, you can also polish the briefing, summarize notes and add tasks with AI. It all runs on your device, only after you explicitly download the model, and availability depends on your Chrome version and hardware
- 💾 **Automatic folder backup** — pick a folder and Nova saves a daily backup file there and keeps the last seven (Chrome and Edge)
- 🎉 **What's new & guided tour** — a short window after each update, and a five-step tour for new features

**Everything else:**

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
- 🎨 **Deep customization** — 10 theme presets with live preview (including minimal/neon/retro/glass), a **custom font** from Google Fonts, gradients, a **live animated wallpaper**, a photo-of-the-day background, your own uploaded image, accent colors (including auto-detected from your background), a weekend color variant, **widgets-only mode** (hides the background entirely), compact mode, zen mode, an **alternate calendar** in the clock (Hebrew/Islamic/Chinese)
- ♿ **Accessibility** — a high-contrast mode, global text size, and a **free-form layout editor** with keyboard support (Alt+Arrow keys), not just drag-and-drop
- 🏆 **Progress (optional)** — XP and levels, 10 achievements, a rotating daily challenge
- ⌨️ **Command palette** (`Ctrl/Cmd+K`) for fast navigation, and every keyboard shortcut can be rebound in Settings
- 🔒 **Privacy & security** — a **whole-screen PIN lock**, a one-click **guest mode** that hides personal widgets, and a **password-protected encrypted backup** (AES-256-GCM, entirely local)
- 💾 **Backup, sync & sharing** — a compact **copy/paste transfer code** between devices, **named profiles** to switch setups (e.g. Work/Personal), and a **shareable day-summary image** (PNG)
- ⚡ **Performance** — optional widgets (crypto/stocks/RSS/calendar/on-this-day) are **lazy-loaded** only when turned on, plus a **battery saver** mode
- 🌍 **18 languages** with full RTL support: English, Hebrew, French, Spanish, German, Russian, Arabic, Portuguese, Japanese, Korean, Chinese, Hindi, Italian, Dutch, Polish, Turkish, Thai, Vietnamese
- 🔒 **100% local** — settings sync only through your own `chrome.storage.sync`; nothing is ever sent to a Nova server, because there isn't one

## Install

Nova Homepage is available on the [Chrome Web Store](https://chromewebstore.google.com/detail/nova-%E2%80%94-my-homepage/imkkbleomhifdfgbnipinlbpmcemfbdp). The [live site](https://drummingbird1.github.io/nova-privacy/) has more details, and the notes for every version are on the [Releases](https://github.com/DrummingBird1/nova-privacy/releases) page.

## Privacy

All your data — settings, tasks, notes, habits — stays on your device (`chrome.storage`) or syncs only through your own Google account via Chrome's built-in sync. Nova has no backend and no analytics. Weather, crypto prices, and background photos are fetched directly from their providers (Open-Meteo, CoinGecko, Picsum) only when those features are turned on. Full details: [privacy policy](https://drummingbird1.github.io/nova-privacy/privacy.html).

## Version history

See [Releases](https://github.com/DrummingBird1/nova-privacy/releases) for what changed in each version.

## Support

Nova is free, ad-free, and built independently. If it earns a spot on your new tab:

[❤️ Patreon](https://www.patreon.com/c/IdanLights) · [☕ Ko-fi](https://ko-fi.com/idanlights) · [☕ Buy Me a Coffee](https://buymeacoffee.com/MrIdan)

## Contact

Found a bug or have a suggestion? [Open an issue](https://github.com/DrummingBird1/nova-privacy/issues).

---

<div align="center">© 2026 Nova Homepage. All data stays on your device.</div>
