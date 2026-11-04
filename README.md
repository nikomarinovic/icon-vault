<h1 align="center">IconVault</h1>

<p align="center">
  <strong>Icons for every project.</strong><br>
  A curated open-source collection of <b>839</b> icons for developers, tools, technologies, and brands.
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

Browse the collection in the **[IconVault Gallery Builder](https://nikomarinovic.github.io/icon-vault/)** and select icons to make a gallery.

<a name="gallery-builder"></a>
## Gallery Builder

The **[Gallery Builder](https://nikomarinovic.github.io/icon-vault/)** creates a shareable web page URL with your selection and display settings. Use it to select icons and preview layouts.

The builder saves your selection and display settings in one readable URL. You can edit the comma-separated icon names in the URL directly.

<a name="examples"></a>
## Examples

Each link opens the builder with its icon selection and display settings already loaded.

### Inline row, light mode

<https://nikomarinovic.github.io/icon-vault/?icons=word,excel,powerpoint,onenote,outlook&size=64&gap=16&align=left>

### Inline row, dark mode

<https://nikomarinovic.github.io/icon-vault/?icons=worddark,exceldark,powerpointdark,onenotedark,outlookdark&size=64&gap=16&align=left>

### Grid, 4 per row, centered

<https://nikomarinovic.github.io/icon-vault/?icons=c,cpp,cs,python,html,css,react,typescript&size=64&gap=16&align=center&row=4>

### Developer tools

<https://nikomarinovic.github.io/icon-vault/?icons=vscode,xcode,github,docker,figma&size=48&gap=12&align=left>

<a name="add-icons-manually"></a>
## Add icons manually

Open the builder with icon names in the URL, separated by commas. Change the names and settings in the address bar whenever you want:

```markdown
https://nikomarinovic.github.io/icon-vault/?icons=xcode,python,cpp&size=64&gap=16
```

The builder loads that selection automatically. Tune the size, gap, and layout, then copy the link. Use `row=4` to show four icons per row; `gap` accepts values up to `64`.

For four icons per row, set `row=4` in the URL:

```markdown
https://nikomarinovic.github.io/icon-vault/?icons=python,c,cpp,cs&size=64&gap=64&align=center&row=4
```

Change the names in `icons=` to any icon keys, such as `xcode`, `python`, `cpp`, `github`, or `worddark`. Adjust `size`, `gap`, `row`, and `align` directly in the URL.

GitHub Pages serves the builder, so no Netlify deployment or extra setup is required.

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
