# Lorenzo Fiaschi — personal website

A static, [Jekyll](https://jekyllrb.com/)-powered academic homepage hosted on **GitHub Pages**
at **https://lorenzofiaschi.it**.
No database, no server-side code — just HTML, CSS, a sprinkle of vanilla JS, and YAML data files.

---

## ✏️ How to update the site (no coding needed)

Almost everything you'll change lives in **`_data/`**. Edit a YAML file, commit and push, and the
site rebuilds automatically.

| What you want to change | Edit this file |
|---|---|
| Name, role, bio, quote, photo, CV link, contacts, address | `_data/profile.yml` |
| The **News** list (add a line at the top for the newest) | `_data/news.yml` |
| Research projects | `_data/projects.yml` |
| Teaching | `_data/teaching.yml` |
| Experience / appointments | `_data/experience.yml` |
| Education | `_data/education.yml` |

### Replace the photo
Drop a headshot into `assets/img/` (portrait orientation works best — it's displayed in a 21:25
frame, anchored to the top so the face isn't cropped) and point `photo:` in `_data/profile.yml`
at it, e.g. `/assets/img/me.jpg`.

### Replace the CV
Drop the PDF into `assets/cv/` and point `cv:` in `_data/profile.yml` at it,
e.g. `/assets/cv/CV_American.pdf`.

---

## 🌐 Custom domain (already configured)

- **`CNAME`** contains the bare domain `lorenzofiaschi.it`.
- `url:` in `_config.yml` is `https://lorenzofiaschi.it`.
- DNS at the registrar: four `A` records on `@` → `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153` (plus the four matching `AAAA` records),
  and a `www` CNAME → `lorefiaschi.github.io`.
- **Settings → Pages**: source = branch `main`, folder `/ (root)`, custom domain set,
  and **Enforce HTTPS** ticked once GitHub issues the certificate.

---

## 🎨 Design

Colors, fonts and spacing are CSS variables at the top of **`assets/css/style.css`**
(`:root` = light theme, `html[data-theme="dark"]` = dark theme). Change the accent in one place.

The layout is **fully fluid** — it always fills the viewport width at any size or aspect ratio,
with a stacked arrangement for tablets (≤980px) and a tighter one for phones (≤560px).

Dark/light mode follows the visitor's OS, with a manual toggle in the sidebar; the choice is
remembered in `localStorage` and applied before first paint (no flash). The sidebar menu
highlights the section currently in view.

---

## 🔧 Run locally (optional)

Requires Ruby with Jekyll and the two plugins installed:

```bash
gem install jekyll jekyll-seo-tag jekyll-sitemap
jekyll serve      # → http://localhost:4000
```

## 📁 Structure

```
_config.yml             site settings
index.html              the page (assembles every section from _data)
_layouts/default.html   HTML shell (sidebar + main)
_includes/              head, sidebar, news, Scholar icon
_data/                  ← your editable content
assets/css|js|img|cv    styles, theme + scrollspy scripts, photo, CV
CNAME                   the custom domain
```
