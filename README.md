# Resume
This is my curriculum vitae. You can view it and download
## Preview
**[View Live Preview](https://svetazelenova.github.io/dist/)**
## Download
Clone the repo: `git clone https://github.com/SvetaZelenova/SvetaZelenova.github.io.git`
## Usage
After installation, run `npm install` and then run `bower install` which install all packages you need for work. After that run `gulp` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. You can view the `gulpfile.js` to see which tasks are included with the dev environment.
### Gulp tasks
- `gulp` the default task that builds everything and live reloads when changes are made
- `gulp webserver` browserSync opens the project in your default browser
- `gulp style:build` compiles SCSS files into CSS and minifies the compiled CSS
- `gulp js:build` minifies the main.js file
- `gulp img:minify` minify all images
