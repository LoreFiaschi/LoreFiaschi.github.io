# Lorenzo Fiaschi — personal website

A static, [Jekyll](https://jekyllrb.com/)-powered academic homepage, hosted on **GitHub Pages**.
No database, no server-side code — just HTML, CSS, a sprinkle of vanilla JS, and YAML data files.

---

## ✏️ How to update the site (no coding needed)

Almost everything you'll change lives in **`_data/`**. Edit a YAML file, commit, and the site rebuilds automatically.

| What you want to change | Edit this file |
|---|---|
| Name, role, vision, quote, photo, CV link, contacts, stats, address | `_data/profile.yml` |
| The **News** rail (add a line at the top for newest) | `_data/news.yml` |
| Experience / appointments | `_data/experience.yml` |
| Education | `_data/education.yml` |
| Teaching | `_data/teaching.yml` |
| Research-interest chips | `_data/interests.yml` |

### Add your photo
Drop a square headshot (≈ 600×600 px, `.jpg` or `.png`) into `assets/img/` and set
`photo:` in `_data/profile.yml` to its path (e.g. `/assets/img/lorenzo.jpg`).

### Add your CV
Drop your `CV.pdf` into `assets/cv/` and set `cv:` in `_data/profile.yml`
(e.g. `/assets/cv/Lorenzo-Fiaschi-CV.pdf`).

---

## 🌐 Connect your custom domain
1. Put your bare domain in the **`CNAME`** file (one line, e.g. `lorenzofiaschi.com`).
2. Set `url:` in `_config.yml` to `https://lorenzofiaschi.com`.
3. At your domain registrar, add DNS records pointing to GitHub Pages
   ([official guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)):
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - or a `CNAME` (for `www`) → `<username>.github.io`
4. In the repo **Settings → Pages**, enable HTTPS once the domain verifies.

> Until the domain is connected, the site is reachable at `https://<username>.github.io/<repo>`.

---

## 🎨 Design tokens
Colors, fonts and spacing are CSS variables at the top of **`assets/css/style.css`**
(`:root` = light theme, `html[data-theme="dark"]` = dark theme). Change the accent in one place.

Dark/light mode is automatic (follows the visitor's OS) with a manual toggle in the sidebar;
the choice is remembered in `localStorage` and applied before first paint (no flash).

---

## 🔧 Run locally (optional)
```bash
bundle install
bundle exec jekyll serve   # → http://localhost:4000
```

## 📁 Structure
```
_config.yml          site settings
index.html           the page (assembles sections from _data)
_layouts/default.html overall HTML shell (sidebar + main)
_includes/           head, sidebar, news rail
_data/               ← your editable content
assets/css|js|img|cv static files
CNAME                your custom domain
```
