<p align="center">
  <img src="assets/icon-vault.svg" width="96" height="96" alt="IconVault logo">
</p>

<h1 align="center">IconVault</h1>

<p align="center">
  <strong>Icons for every project.</strong><br>
  A curated open-source collection of icons for developers, tools, technologies, and brands.
</p>

<p align="center">
  <a href="#popular-icons">Popular</a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#gallery-builder">Gallery Builder</a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#examples">Examples</a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#add-icons-manually">Add icons</a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#contributing">Contribute</a>
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
![Word, Excel, PowerPoint, OneNote and Outlook](https://icon-vault.netlify.app/image?icons=word,excel,powerpoint,onenote,outlook&size=64&gap=16&align=left)
```

![Word, Excel, PowerPoint, OneNote and Outlook](https://icon-vault.netlify.app/image?icons=word,excel,powerpoint,onenote,outlook&size=64&gap=16&align=left)

### Dark variants

```markdown
![Word, Excel, PowerPoint, OneNote and Outlook dark variants](https://icon-vault.netlify.app/image?icons=worddark,exceldark,powerpointdark,onenotedark,outlookdark&size=64&gap=16&align=left)
```

![Word, Excel, PowerPoint, OneNote and Outlook dark variants](https://icon-vault.netlify.app/image?icons=worddark,exceldark,powerpointdark,onenotedark,outlookdark&size=64&gap=16&align=left)

### Grid, 4 per row

```markdown
![C, C++, C sharp, Python, HTML, CSS, React and TypeScript](https://icon-vault.netlify.app/image?icons=c,cpp,cs,python,html,css,react,typescript&size=64&gap=16&align=center&row=4)
```

![C, C++, C sharp, Python, HTML, CSS, React and TypeScript](https://icon-vault.netlify.app/image?icons=c,cpp,cs,python,html,css,react,typescript&size=64&gap=16&align=center&row=4)

### Developer tools

```markdown
![VS Code, Xcode, GitHub, Docker and Figma](https://icon-vault.netlify.app/image?icons=vscode,xcode,github,docker,figma&size=48&gap=12&align=left)
```

![VS Code, Xcode, GitHub, Docker and Figma](https://icon-vault.netlify.app/image?icons=vscode,xcode,github,docker,figma&size=48&gap=12&align=left)

<a name="add-icons-manually"></a>
## Add icons manually

Write the Markdown image link directly. Replace the names in `icons=` with any keys from the collection:

```markdown
![My Skills](https://icon-vault.netlify.app/image?icons=azuredark,azure,python&size=64&gap=64&align=left&row=4)
```

The `row` option is optional. For example, remove `&row=4` to place every selected icon on one row. `gap` accepts values from `0` to `256`.

The builder creates both forms for you. **Copy Markdown** makes the image embed; **Copy HTML** wraps it in a centered paragraph so it appears centered in a GitHub README. The `align` URL option positions icons inside the image rows, while the HTML wrapper positions the whole image on the README page.

<a name="contributing"></a>
## Contributing

Missing an icon? Add it to the [`icons/`](icons/) collection and follow [CONTRIBUTING.md](CONTRIBUTING.md). Please include the source and license information.

## Contributors

<p align="center">
  <a href="https://github.com/nikomarinovic">
    <img src="https://wsrv.nl/?url=github.com/nikomarinovic.png&w=120&h=120&fit=cover&mask=circle" width="72" height="72" alt="Niko Marinović">
  </a>
  <br>
  <a href="https://github.com/nikomarinovic"><sub><b>Niko Marinović</b></sub></a>
</p>
