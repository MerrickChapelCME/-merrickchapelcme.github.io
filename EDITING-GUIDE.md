# Merrick Chapel CME Website — Editing Guide

## Easy changes
Open `index.html` in a text editor and search for the wording you want to change. The site is intentionally plain HTML/CSS/JS so it can be hosted almost anywhere.

### Most important content
- Worship schedule: search for `1st & 3rd Sundays`.
- Address: search for `1115 N Simmons St`.
- Phone: search for `(337) 433-2611`.
- Pastor message: search for `Welcome to Merrick Chapel CME Church!`.
- Facebook link: search for `https://www.facebook.com/` and replace with the church's actual Facebook page URL.
- Giving: search for `ONLINE GIVING` and replace the placeholder with the church's secure giving provider URL.
- Contact form: replace the blank `mailto:` destination in `script.js` with the church's email address, or connect a form provider after deployment.

## Replace photos
Place new files in `assets/` and update the matching `src` values in `index.html`.

The current design uses the exact user-supplied Merrick Chapel logo, CME Connectional Marker, sanctuary/pastor photo, and pastor portrait. No AI transformation is applied to these source assets.

## Publishing
This is a static website and can be published to Hostinger, Netlify, Vercel, GitHub Pages, or another static host. A custom domain can be connected after hosting is selected.
