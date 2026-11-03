<p align="center">
  <img src="assets/icon-vault.svg" width="120" height="120" alt="IconVault logo">
</p>
<h1 align="center">IconVault</h1>
<p align="center"><strong>Icons for every project.</strong><br>A collection of SVG icons for developers, tools, technologies, and brands.</p>

<p align="center"><a href="#popular-icons">Browse popular icons</a> &nbsp;·&nbsp; <a href="icons/">All 805 SVG files</a> &nbsp;·&nbsp; <a href="CONTRIBUTING.md">Contribute</a></p>

---

## Popular icons

A hand-picked preview of 100 familiar developer tools, technologies, and services. The contact sheet has **10 columns × 10 rows**, with each icon displayed at **50 × 50 px**. Every icon appears once; light and dark duplicate variants are left out of this preview. The full collection remains in [`icons/`](icons/).

<p align="center">
  <img src="assets/icon-gallery-15x15-light.svg" width="620" height="620" alt="A 10 by 10 grid of 100 different popular developer and product icons, each 50 by 50 pixels">
</p>

## Use an icon in your project

You can use an icon directly from this public repository or download it into your own project. No package or framework is required. Browse the [`icons/` folder](icons/) and use the exact filename shown there.

### Embed it with a direct link

Once IconVault is public, point to the raw SVG on GitHub. This example uses Spotify:

```html
<img src="https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/spotify.svg" width="50" height="50" alt="Spotify">
```

In a Markdown README, use:

```markdown
![Spotify icon](https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/spotify.svg)
```

**Preview:**

<p><img src="https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/spotify.svg" width="50" height="50" alt="Spotify icon preview"></p>

Use the HTML version when you want to set the display size. Replace `spotify.svg` with the exact icon filename, including capitalization.

### Show several icons and control the rows

Add one `<img>` for each icon. Put the icons for each row inside their own paragraph; the number of image tags in that paragraph controls how many icons you put in that row. All images below load directly from IconVault:

```html
<!-- Row 1: four icons -->
<p align="center">
  <img src="https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/python.svg" width="50" height="50" alt="Python"> &nbsp;
  <img src="https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/react.svg" width="50" height="50" alt="React"> &nbsp;
  <img src="https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/docker.svg" width="50" height="50" alt="Docker"> &nbsp;
  <img src="https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/spotify.svg" width="50" height="50" alt="Spotify">
</p>

<!-- Row 2: two icons -->
<p align="center">
  <img src="https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/github.svg" width="50" height="50" alt="GitHub"> &nbsp;
  <img src="https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/figma.svg" width="50" height="50" alt="Figma">
</p>
```

**Preview:**

<p align="center">
  <img src="https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/python.svg" width="50" height="50" alt="Python"> &nbsp;
  <img src="https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/react.svg" width="50" height="50" alt="React"> &nbsp;
  <img src="https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/docker.svg" width="50" height="50" alt="Docker"> &nbsp;
  <img src="https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/spotify.svg" width="50" height="50" alt="Spotify">
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/github.svg" width="50" height="50" alt="GitHub"> &nbsp;
  <img src="https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/figma.svg" width="50" height="50" alt="Figma">
</p>

To put more icons in a row, add more `<img>` tags to its paragraph. Start another paragraph for the next row. Change `width` and `height` to resize the icons. These are ordinary image links to files in IconVault; they do not use a separate icon-rendering service.

### Download it into your repository

You can also keep a local copy alongside your project:

```bash
mkdir -p public/icons
curl -L "https://raw.githubusercontent.com/nikomarinovic/icon-vault/main/icons/spotify.svg" -o public/icons/spotify.svg
```

Then reference the downloaded file from your app or README, for example `public/icons/spotify.svg`. The `main` link follows the latest version in this repository; for a long-lived project, use a release or commit link when one is available.

### Add an icon to IconVault

To contribute an icon here, copy its SVG into `icons/` and follow [CONTRIBUTING.md](CONTRIBUTING.md). Include its source and license.

## License

See [`LICENSE`](LICENSE). Individual icons may have separate terms; check the source and license before use.
