// Copies the ready-made Mariyam Syed icons into the Android project.
const fs = require('fs'), path = require('path')
const res = path.join('android', 'app', 'src', 'main', 'res')
if (!fs.existsSync(res)) { console.error('Android project not found. Run "npm run apk:add" first.'); process.exit(1) }
const old = /^ic_launcher(_round|_foreground|_background|_fg|_bg)?\.(png|webp|xml)$/
let removed = 0
for (const d of fs.readdirSync(res)) {
  if (!d.startsWith('mipmap')) continue
  for (const f of fs.readdirSync(path.join(res, d))) if (old.test(f)) { fs.rmSync(path.join(res, d, f)); removed++ }
}
fs.cpSync('android-res', res, { recursive: true })
console.log(`Icons applied (removed ${removed} old files). Now run: npm run apk:sync, then npm run apk:debug`)
