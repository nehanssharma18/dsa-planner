# DSA Pattern Planner

A pattern-wise LeetCode planner: 13 patterns, 70 problems, progress tracking,
per-problem notes and code snippets, explanations with dry runs. Installable as an app (PWA), works offline.

## Files
| File | Purpose |
|---|---|
| index.html | The whole app (HTML + CSS + JS) |
| manifest.json | Tells the browser the app name, icons and window style |
| sw.js | Service worker: caches files so the app works offline |
| icon-192.png, icon-512.png | App icons |

## Deploy on GitHub Pages
1. Create a new public repo named `dsa-planner` on github.com.
2. Click **Add file -> Upload files**, drag in all files from this folder, then **Commit changes**.
3. Go to **Settings -> Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After about a minute your app is live at `https://<your-username>.github.io/dsa-planner/`.

## Install on your laptop
Open the live link in Chrome or Edge and click the **install icon** at the right end of the address bar
(or menu -> *Install DSA Pattern Planner*). It then opens in its own window with a desktop icon.

## Updating later
Edit `index.html`, then change `CACHE = "dsa-planner-v1"` in `sw.js` to `v2`, `v3`... and commit.
Without the version bump, installed copies keep showing the old cached version.

## Your data
Notes, code and progress are stored in your browser (localStorage) for that exact web address.
A new address starts empty. To move data: old app -> *Backup / restore* -> copy; new app -> paste -> *Load*.
