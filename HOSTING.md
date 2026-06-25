# Hosting the Moco Blue Welcome Guide on GitHub Pages (Free)

This is a **static website** — just HTML, CSS, JS and images. It needs no server,
no build step and no paid hosting. GitHub Pages will serve it for free.

## What's in this folder

```
site/
├─ index.html            ← the website
├─ .nojekyll             ← tells GitHub Pages to serve files as-is
├─ HOSTING.md            ← this file
└─ assets/
   ├─ css/styles.css
   ├─ js/script.js
   └─ img/  (hero.jpg, hero-mobile.jpg, logo.png)
```

Everything inside `site/` is what gets published. **`index.html` must stay at the
top level of whatever you publish** (it's the homepage).

---

## Option A — Upload through the GitHub website (easiest, no tools)

1. **Create a GitHub account** at <https://github.com> if you don't have one.
2. Click the **+** (top-right) → **New repository**.
   - **Repository name:** `moco-blue-guide` (any name is fine)
   - Set it to **Public**
   - Click **Create repository**.
3. On the new repo page, click **uploading an existing file**.
4. Open this `site` folder on your computer, select **everything inside it**
   (the `index.html`, `.nojekyll`, `HOSTING.md` and the `assets` folder) and
   **drag them into the browser**.
   - ⚠️ Upload the **contents** of `site/`, not the `site` folder itself, so that
     `index.html` ends up at the root of the repository.
5. Click **Commit changes**.
6. Go to **Settings** (top menu) → **Pages** (left sidebar).
7. Under **Build and deployment → Source**, choose **Deploy from a branch**.
8. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
9. Wait ~1 minute. Refresh the page — GitHub shows:
   **"Your site is live at `https://<your-username>.github.io/moco-blue-guide/`"**

That URL is your live website. Share it with guests. 🎉

> If you see a blank page or missing images, give it another minute (the first
> deploy can take a moment), then hard-refresh (Ctrl+F5).

---

## Option B — Using Git on your computer (for future edits)

```bash
# from inside the `site` folder
git init
git add .
git commit -m "Moco Blue Koh Samui welcome guide"
git branch -M main
git remote add origin https://github.com/<your-username>/moco-blue-guide.git
git push -u origin main
```

Then enable Pages exactly as in **Option A, steps 6–9**.

To publish future changes, just edit the files and run:

```bash
git add .
git commit -m "Update guide"
git push
```

The live site updates automatically within a minute.

---

## Optional: a custom domain

If you own a domain (e.g. `guide.mocoblue.com`):

1. In **Settings → Pages → Custom domain**, enter your domain and **Save**.
2. At your domain registrar, add a **CNAME** record pointing your subdomain to
   `<your-username>.github.io`.
3. Tick **Enforce HTTPS** once the certificate is issued.

---

## Editing the content later

- **Text, codes, prices, recommendations** → edit `index.html`.
- **Colours, spacing, fonts** → edit `assets/css/styles.css` (variables are at the
  very top under `:root`).
- **Hero photo** → replace `assets/img/hero.jpg` (and `hero-mobile.jpg` for phones).
  Keep file names the same so no code changes are needed.
- **Logo** → replace `assets/img/logo.png`.

## Previewing locally before publishing

Just double-click `index.html` to open it in your browser. Everything works
offline except the Google Fonts (which need internet) and the printer button
(works in any browser).

---

### Notes
- The page is **mobile-first** and fully responsive (phone, tablet, desktop).
- The **Print Guide** button opens the browser print dialog with a clean,
  print-friendly layout (guests can save a PDF).
- The site is marked `noindex` so it won't appear in Google search results —
  it's meant to be shared by link only. Remove the
  `<meta name="robots" content="noindex" />` line in `index.html` if you want it
  publicly searchable.
