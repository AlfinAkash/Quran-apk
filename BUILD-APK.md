# Easiest way (Windows)
Double-click **build-apk.bat**. It installs, builds, adds the icon and creates **Daily-Prayer.apk** in this folder. Needs Node 20 and Android Studio (opened once).

# Get the APK

## Option A: no installs (GitHub)
1. Upload this project to a GitHub repository (the `.github` folder must be included).
2. Open the repo > **Actions** > **Build Android APK** > **Run workflow**.
3. When it finishes (about 5 minutes), open the run and download **Daily-Prayer-APK**. Unzip it to get `app-debug.apk`.
4. Copy the APK to your phone and install it (allow "Install unknown apps" when asked).

## Option B: on your computer
Needs Node 20+, JDK 21 and Android Studio (for the SDK).

    npm install
    npm run build
    npm run apk:add
    npm run apk:sync
    npm run apk:debug        (Windows)
    npm run apk:debug:mac    (Mac / Linux)

APK: `android/app/build/outputs/apk/debug/app-debug.apk`

## Option C: PWABuilder
Host the site (Netlify, Vercel or GitHub Pages), then paste its URL at pwabuilder.com and choose Android.

## Notes
- The debug APK installs on any phone. For the Play Store you need a signed release build.
- Prayer alerts and the adhan work while the app is open, as in the browser.

## App icon
Ready-made Android icons are in `android-res/`. After `npm run apk:add`, run `npm run apk:icons` to copy them into the Android project, then `npm run apk:sync` and `npm run apk:debug`. The GitHub build does this automatically.
