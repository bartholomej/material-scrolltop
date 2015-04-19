# Material ScrollTop

Lightweight, Material Design inspired plugin for scrolling on top of the html page (with jQuery)

![Demo animation](https://github.com/bartholomej/material-scrollTop/blob/master/demo/images/material-scrolltop-animation.gif)

## Install

Via [bower](https://github.com/bartholomej/material-scrollTop/blob/master/bower.json):
```bash
bower install material-scrolltop
```

### Manual install (download)

If you want the latest stable version, get the latest release [latest release](https://github.com/bartholomej/material-scrollTop/releases/latest) from the releases page.

## Demo
Download the [latest release](https://github.com/bartholomej/material-scrollTop/releases/latest) and take a look at `demo/index.html`

## Usage

Include the files as shown in the code snippets below and you're done.

NOTE: The only dependency for this plugin to work is **jQuery library** (don't forget!)

In your `<head>` add:
```html
<!-- Material ScrollTop stylesheet -->
<link rel="stylesheet" href="css/material-scrolltop.css">
```

Then, before your closing `</body>` tag add:
```html
<!-- Material button -->
<button class="material-scrolltop" type="button"></button>

<!-- Material ScrollTop plugin -->
<script src="js/material-scrolltop.js"></script>
```

Finally initialize with (minimal):
```javascript
$('body').materialScrollTop();
```

## Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
revealElement | string | body | Reveal button when scrolling over specific element
revealPosition | string | top | Element position for reveal button (`'top'` or `'bottom'`)
padding | number  | 0 | Adjusts little ups and downs in scrolling (can be negative number)
duration | number | 600 | Determining how long the animation will run
easing | string | 'swing' | Indicating which easing function to use for the transition animate()
onScrollEnd | Function() | false | A function to call once the animation is complete

### Example

```javascript
$('body').materialScrollTop({   // Scroll to the top of <body> element ...
    padding: 100,               // ... and add padding 100px
    revealElement: 'header',    // Reveal button when scrolling over <header> ...
    revealPosition: 'bottom',   // ... and do it at the end of </header> element
    duration: 600,              // Animation will run 600 ms
    easing: 'swing',            // Do it with swing animation
    onScrollEnd: function() {   // Give me some log when animation ends
        console.log('Scroll End');
    }
});
```

## Customization

Using SASS (or just CSS), you can simply edit (or override) default styles and colors and customize plugin to fit your needs.

## Dependencies

jQuery 1.7+

## License

Copyright (c) 2015 Lukas Bartak

All contents are licensed under the [MIT license].

[MIT license]: LICENSE