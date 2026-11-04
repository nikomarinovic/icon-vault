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

Browse the collection in the **[IconVault Gallery Builder](https://YOUR_NETLIFY_SITE.netlify.app/)** and select icons to make a gallery.

<a name="gallery-builder"></a>
## Gallery Builder

The **[Gallery Builder](https://YOUR_NETLIFY_SITE.netlify.app/)** creates a shareable web page URL with your selection and display settings. Use it to select icons and preview layouts.

The builder saves your selection and display settings in one readable URL. You can edit the comma-separated icon names in the URL directly.

<a name="examples"></a>
## Examples

Each image is rendered by the Netlify image endpoint. Click one to open its image URL.

### Inline row, light mode

![Word, Excel, PowerPoint, OneNote and Outlook](https://YOUR_NETLIFY_SITE.netlify.app/image?icons=word,excel,powerpoint,onenote,outlook&size=64&gap=16&align=left)

### Inline row, dark mode

![Word, Excel, PowerPoint, OneNote and Outlook dark variants](https://YOUR_NETLIFY_SITE.netlify.app/image?icons=worddark,exceldark,powerpointdark,onenotedark,outlookdark&size=64&gap=16&align=left)

### Grid, 4 per row, centered

![C, C++, C sharp, Python, HTML, CSS, React and TypeScript](https://YOUR_NETLIFY_SITE.netlify.app/image?icons=c,cpp,cs,python,html,css,react,typescript&size=64&gap=16&align=center&row=4)

### Developer tools

![VS Code, Xcode, GitHub, Docker and Figma](https://YOUR_NETLIFY_SITE.netlify.app/image?icons=vscode,xcode,github,docker,figma&size=48&gap=12&align=left)

<a name="add-icons-manually"></a>
## Add icons manually

Use the `/image` endpoint in a Markdown image. Replace `YOUR_NETLIFY_SITE` with the site's Netlify subdomain, then change the icon names or settings directly in the URL:

```markdown
![My Skills](https://YOUR_NETLIFY_SITE.netlify.app/image?icons=azuredark,azure,python&size=64&gap=64&align=left&row=4)
```

The endpoint returns one combined SVG image for the selected icons. `gap` controls the space between icons, and `row=4` places four icons on each row.

For four icons per row, set `row=4` in the URL:

```markdown
![Python, C, C++ and C sharp](https://YOUR_NETLIFY_SITE.netlify.app/image?icons=python,c,cpp,cs&size=64&gap=64&align=center&row=4)
```

Change the names in `icons=` to any icon keys, such as `xcode`, `python`, `cpp`, `github`, or `worddark`. Adjust `size`, `gap`, `row`, and `align` directly in the URL.

The repository includes Netlify configuration for the site and image function. Replace `YOUR_NETLIFY_SITE` with the Netlify subdomain assigned to your site.

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
