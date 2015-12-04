## Website Performance Optimization Portfolio Project

#### Access hosted project page from GitHub:

    http://russkidrewski.github.io/frontend-nanodegree-mobile-portfolio/dist/

#### Setup the project from GitHub source:

    * Requires node.js, npm, and gulp to be installed

    Clone the repo:

        ```bash
        $> git clone https://github.com/russkidrewski/frontend-nanodegree-mobile-portfolio.git
        ```

    Open the project folder:
        ```bash
        $> cd frontend-nanodegree-mobile-portfolio
        ```

    Setup local gulp for the project clone:
        ```bash
        $> npm install gulp --save-dev
        ```

    Install dependencies for gulpfile.js:
        ```bash
        $> npm install gulp-imagemin gulp-inline gulp-uglify gulp-minify-html gulp-minify-css jshint gulp-jshint --save-dev
        ```

    Run the initial gulp task 'min_everything' to populate the dist folder:

        ```bash
        $> gulp min_everything
        ```

    Run the project from a local development server using the optimized distribution folder:

        ```bash
        $> cd dist
        $> python -m SimpleHTTPServer 8080
        ```

    Access development server over Internet w/ ngrok:

        * Requires ngrok to be installed

        ```bash
        $> ngrok http 8080
        ```

#### Gulp tasks:
*    default
**        Runs all the tasks except min_img
*    min_everything
**        Runs all task including min_img
*    min_html
**        Minifies HTML and in-lines external CSS
*    min_css
**        Minifies CSS
*    min_js
**        Minifies JavaScript
*    watch
**        Runs the perspective tasks when source files change
**        * Does not include min_img
*    lint
**        lints the JavaScript using jshint

#### Optimizations to index.html:
1. Optimized images
        - Used gulp plugin gulp-imagemin
1. Resized pizzeria.jpg to 360x270
        - Resized manually using GIMP because only 1 file needed to be resized
        - Used GIMP to further minimize pizzeria.jpg by turning down the jpg quality from 98 to 50.
1. Fixed render blocking Javascript
        - Made analytics.js and perfmatters.js asynchronous
1. Fixed render blocking CSS
        - Removed the unnecessary stylesheet for Google fonts
        - Added a print media query for print.css
        - Inlined CSS using gulp plugin gulp-inline
1. Minimized the following: HTML, in-line CSS, and in-line JavaScript
        - Used gulp plugins
            gulp-inline
            gulp-uglify
            gulp-minify-css
            gulp-minify-html

#### Optimizations to pizza.html:
1. Scrolling Performance Optimizations
        - Eliminated FSL by implementing best practice for debouncing scroll events and utilizing requestAnimationFrame. See link for details:
            http://www.html5rocks.com/en/tutorials/speed/animations/
        - Eliminated redundant DOM tree query
        - Used getElementsByClassName instead of querySelectorAll
        - Precalculated phases in updatePositions
2. Pizza Resize Performance Optimizations
        - Eliminated FSL by removing layout calls from for loop resizePizzas
        - Later entirely removed layout calls by replacing determineDx and substituting a simple % value for the width
        - Removed redundant/unnecessary DOM tree queries
        - Used getElementsByClassName instead of querySelectorAll
