# Mariyam Syed · Islamic Companion
React + Vite + Tailwind, English only. All live data comes from free APIs that need no key:
AlAdhan (times, Qibla, 99 Names), AlQuran Cloud (Quran text + audio), Open-Meteo (city search).

    npm install
    npm run dev
    npm run build

Default location: Kallattumukku, Thiruvananthapuram (`DEFAULT_LOC` in `src/App.jsx`).
Prayer alerts work while the site is open in a browser tab (see the bell button).

Stack: React 19, Vite, Tailwind CSS v4, TanStack Query (data caching), Radix UI Dialog (accessible sheets), Motion (animations), Lucide icons, Sonner (toasts).
Features: 12 themes, adhan (call to prayer) alerts with before/at/after reminders + voice alerts, prayer tracker, monthly timetable + Hijri calendar, Quran with audio, duas, events, nearby mosques, Khatm and Qada trackers, Qibla compass, zakat, installable PWA.

## Stack (current, non-deprecated)
React 19 · Vite · Tailwind CSS v4 · TanStack Query (cached data) · Radix UI Dialog (accessible modals) · Motion (animations) · Lucide icons.
Layout: sidebar on desktop, bottom navigation with a "More" sheet on phones.

Responsive: bottom navigation on phones and tablets, sidebar from 1024px, container-query prayer list, wider content on large screens, landscape and notch safe areas.

## Prayer alerts and adhan
- Alert sound is the adhan (`public/adhan.mp3`, Makkah call to prayer, MIT licence in `public/adhan-LICENSE.txt`). You can upload your own adhan (up to 10 MB, stored in the browser) and remove it again any time.
- Reminders can be set before (60/30/15/10/5 min), at, and after (5/10/15/30/60 min) each prayer, plus custom minutes, and several can be active together.
- The adhan plays in the page together with the browser notification. Tap the page once after opening it so the browser allows sound.

## Tasbih
Twelve dhikr (SubhanAllah, Alhamdulillah, Allahu Akbar, full Tahlil, La ilaha illallah, SubhanAllahi wa bihamdihi, SubhanAllahil Azim, La hawla, Astaghfirullah, Salawat, Hasbunallah, Dua of Yunus) + a custom dhikr, guided after-prayer 33·33·34 mode, goals, undo, vibration/click toggles, and today / all-time / 7-day stats.

## Customize (Palette button, top right)
Name, 12 themes, any accent colour, text size (85-140%), corner style (sharp / soft / round), glass effect, Islamic pattern, animations, 24-hour clock, show or hide any section, 13 calculation methods, and backup / restore of all your data as a JSON file. Defaults live in `PREF0` in `src/App.jsx`.
