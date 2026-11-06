<p align="center">
  <img src="assets/icon-vault.svg" width="132" height="132" alt="IconVault logo">
</p>

<h1 align="center">IconVault</h1>

<p align="center">
  <strong>Icons for every project.</strong><br>
  A curated open-source collection of icons for developers, tools, technologies, and brands.
</p>

<p align="center">
  <a href="https://icon-vault.netlify.app">Website</a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://icon-vault.netlify.app">Gallery Builder</a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#examples">Examples</a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#add-icons-manually">Add icons</a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#contributors">Contributors</a>
</p>

---

<a name="popular-icons"></a>
## Popular icons

225 different icons in a **15 × 15** grid. The original SVGs stay crisp at any size.

<p align="center">
  <img src="assets/icon-gallery-15x15.svg" width="600" height="600" alt="A 15 by 15 gallery of 225 developer, technology, and brand icons">
</p>

<a name="gallery-builder"></a>
## Gallery Builder

Open the **[IconVault Gallery Builder](https://icon-vault.netlify.app/)** to select icons, preview the layout, and copy either a share link or Markdown image code.

The `/image` endpoint returns one combined SVG image. Use comma-separated icon keys and adjust `size`, `gap`, `align`, and `row` in its URL.

<a name="examples"></a>
## Examples

Each example shows the Markdown to paste into a README, followed by the rendered image.

### Inline row

```markdown
![My Skills](https://icon-vault.netlify.app/image?icons=solidjs,tailwind,react,sequelize&size=64&gap=16&align=center)
```

![My Skills](https://icon-vault.netlify.app/image?icons=solidjs,tailwind,react,sequelize&size=64&gap=16&align=center)

### Dark variants

```markdown
![My Skills](https://icon-vault.netlify.app/image?icons=solidjsdark,tailwinddark,reactdark,sequelizedark&size=64&gap=16&align=center)
```

![My Skills](https://icon-vault.netlify.app/image?icons=solidjsdark,tailwinddark,reactdark,sequelizedark&size=64&gap=16&align=center)

### Grid, 4 per row

```markdown
![My Skills](https://icon-vault.netlify.app/image?icons=airtable,akka,microsoftazurelogo,figma,googlefirebase,cakephp,amazondynamodb,elixir&size=64&gap=16&align=center&row=4)
```
![My Skills](https://icon-vault.netlify.app/image?icons=airtable,akka,microsoftazurelogo,figma,googlefirebase,cakephp,amazondynamodb,elixir&size=64&gap=16&align=center&row=4)

### Developer tools

```markdown
<p align="center">
  <img src="https://icon-vault.netlify.app/image?icons=vscode,visualstudio,github,gitlab&amp;size=64&amp;gap=16&amp;align=center" alt="My Skills">
</p>
```

<p align="center">  <img src="https://icon-vault.netlify.app/image?icons=vscode,visualstudio,github,gitlab&amp;size=64&amp;gap=16&amp;align=center" alt="My Skills"></p>

### Centering the image in a README

Plain Markdown can't center anything. GitHub READMEs only center content when it is wrapped in HTML, so the image has to be an `<img>` tag inside a `<p align="center">`. Note that `&` must be written as `&amp;` in the HTML URL.

```html
<p align="center">
  <img src="https://icon-vault.netlify.app/image?icons=react,nodejs,docker&amp;size=64&amp;gap=16&amp;align=center" alt="My Skills">
</p>
```

The same works for headings and text: use `<h1 align="center">` or `<p align="center">` instead of `#` and plain paragraphs. The `align=center` in the URL only positions icons *inside* the image, while the HTML wrapper positions the *whole image* on the page, so use both together.

<a name="add-icons-manually"></a>
## Add icons manually

Write the Markdown image link directly. Replace the names in `icons=` with any keys from the collection:

```markdown
![My Skills](https://icon-vault.netlify.app/image?icons=azuredark,azure,python&size=64&gap=64&align=left&row=4)
```

The `row` option is optional. For example, remove `&row=4` to place every selected icon on one row. `gap` accepts values from `0` to `256`.

The builder creates both forms for you. **Copy Markdown** makes the image embed; **Copy HTML** wraps it in a centered paragraph so it appears centered in a GitHub README. The `align` URL option positions icons inside the image rows, while the HTML wrapper positions the whole image on the README page.

<div id="contributors">

<p align="center">
  <img
    src="https://capsule-render.vercel.app/api?type=waving&height=120&section=header&color=4338CA&text=Contributors&fontSize=42&fontColor=FFFFFF&fontAlignY=55"
    width="100%"
    alt="Contributors"
  />
  <strong>THE PEOPLE BEHIND THE COLLECTION</strong>
</p>

---

<br>

<p align="center">
  IconVault is built with contributions from the community.<br>
  Every new icon, correction, and improvement helps make the collection better.
</p>

<p align="center">
  <a href="https://github.com/nikomarinovic">
    <img src="https://wsrv.nl/?url=github.com/nikomarinovic.png&w=120&h=120&fit=cover&mask=circle" width="72" height="72" alt="Niko Marinović">
  </a>
  <br>
  <a href="https://github.com/nikomarinovic"><sub><b>Niko Marinović</b></sub></a>
</p>

<br>

<p align="center">
  <strong>Missing an icon? Have something worth adding?</strong>
</p>

<p align="center">
  <a href="https://github.com/nikomarinovic/icon-vault/issues/new">Open an Issue</a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="https://github.com/nikomarinovic/icon-vault/compare">Submit a Pull Request</a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="LICENSE">MIT License</a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="https://github.com/nikomarinovic/icon-vault">View Repository</a>
</p>

<p align="center">
  <sub>Curated and maintained by the IconVault community.</sub>
</p>

</div>
