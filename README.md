# F1 Race Intelligence — website

A responsive one-page project website with a midnight-navy / electric-cyan telemetry theme. It links to the existing GitHub repository and includes a ready-to-connect Tableau Public embed area.

## Files
- `index.html` — page content and sections
- `style.css` — responsive design and theme
- `script.js` — mobile navigation and Tableau embed connection

## Connect the live Tableau dashboard
1. Publish your workbook/dashboard to Tableau Public if it is not already published.
2. Open the published view on Tableau Public and copy its view URL. It should begin with `https://public.tableau.com/`.
3. Open `script.js` in a text editor.
4. Replace `PASTE_YOUR_TABLEAU_PUBLIC_VIEW_URL_HERE` with the copied published view URL, keeping the quotation marks.
5. Save and refresh `index.html` in your browser. The embed placeholder will be replaced by the live dashboard.

Do not paste a local `.twbx` file path into the embed setting. The workbook must be published and publicly accessible for visitors to see it.

## Publish with GitHub Pages
1. Extract this ZIP.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the root of `https://github.com/kmtp-png/Formula1-Race-Intelligence` (or put them in a `website` folder if you prefer to keep the workbook files separate).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)` if the files are in the root, then save.
5. Wait for GitHub Pages to provide the published website URL.

If the repository already has a `index.html`, do not overwrite it until you have backed it up or checked its contents.

## Notes
- The hero telemetry values and chart-like graphics are illustrative design elements, not live race timing.
- The actual data visualizations should come from the embedded Tableau workbook.
- The page uses Google Fonts when internet access is available; fallback fonts are included.
