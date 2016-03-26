## Grunt project starter with cssnext

### Start

You need git, bower, npm installed

```bash
$ git clone https://github.com/juliancwirko/s-grid-grunt.git
$ cd s-grid-grunt
$ rm -rf .git
$ npm run install-all (or `npm install` and `bower install`)
$ npm start
```

Check out cssnext website for more information:

- [http://cssnext.io/](http://cssnext.io/)

Check out PostCSS website too:

- [http://postcss.org/](http://postcss.org/)

You may also want ot chek out how to use these tools:

- [grunt-browser-sync](https://www.browsersync.io/docs/grunt/)
- [grunt-assemble](https://www.npmjs.com/package/grunt-assemble)
- [grunt-usemin](https://github.com/yeoman/grunt-usemin)
- [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)

### Features

- Assemble (with handlebars templates)
- cssnext
- PostCSS
- Autoprefixer
- cssmin
- uglify
- concat
- jshint
- imagemin
- server with [BrowserSync](https://www.browsersync.io/)

There is a `templates` folder with .hbs files. You should use these files to compile your .html files in the root app folder. You can use layouts, partials and even handlebars helpers.
for more information about Assemble go to: [grunt-assemble](https://www.npmjs.com/package/grunt-assemble) readme.

### How to work with it

You need to have a basic knowledge about [PostCSS](http://postcss.org/) and [Handlebars](http://handlebarsjs.com/) templates, also [Front Matter](https://jekyllrb.com/docs/frontmatter/).

You can work in `app/postcss`, `app/templates` folders. With `.hbs` and special PostCSS `.css` files. There will be `.html` and `app/css/*.css` files created automatically. You can run server with BrowserSync by `npm start`. It will host the files from `app` folder (dev version). After you are ready you can run `npm run build`. It will prepare your files and copy them to `dist` folder. If you want to run server with BrowserSync from `dist` folder run `npm run server-dist`.

### Tasks

Build and watch http://localhost:3000 with BrowserSync (ui on port 3001) from 'app' folder:

```bash
$ npm start
```

Publish 'dist' folder (included tasks: 'assemble', 'postcss', 'clean:dist', 'validate-js', 'useminPrepare', 'copy:dist', 'newer:imagemin', 'concat', 'cssmin', 'uglify', 'usemin'):

```bash
$ npm run build
```

Watch http://localhost:3002 with BrowserSync (ui on port 3003) only preview ('dist' folder):

```bash
$ npm run server-dist
```

#### Other 'public' tasks which you can use separately in any moment

..for validating javascript (also in default 'grunt' task):

```bash
$ npm run lint-js
```

### License

MIT


