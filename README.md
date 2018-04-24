[![Join the chat at https://gitter.im/material-scrolltop/Lobby](https://badges.gitter.im/material-scrolltop/Lobby.svg)](https://gitter.im/material-scrolltop/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Material ScrollTop Button

Lightweight, **Material Design inspired button for scroll-to-top** of the page (jQuery plugin).

Just hit the button to smoothly scroll back to the top of the page. [Here's the demo.](http://bartholomej.github.io/material-scrolltop/)

 - Lightweight
 - Material Design inspired
 - With ripple effect
 - Smoothly animated
 - [Customizable](#customization)
 - With some useful [options](#settings)...
 - CSS3 (Sass) + jQuery

![Demo animation](https://github.com/bartholomej/material-scrollTop/blob/master/demo/images/material-scrolltop-animation.gif)

## Demo (example)
Watch this: [http://bartholomej.github.io/material-scrolltop/
](http://bartholomej.github.io/material-scrolltop/)

## Install

Via **yarn** or **npm**
```bash
yarn material-scrolltop
```

Via **bower**
```bash
bower install material-scrolltop
```

### Manual install (download)

If you want the latest stable version, get the [latest release](https://github.com/bartholomej/material-scrollTop/releases/latest) from the releases page.

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
<!-- material-scrolltop button -->
<button class="material-scrolltop" type="button"></button>

<!-- material-scrolltop plugin -->
<script src="js/material-scrolltop.js"></script>

<!-- Initialize material-scrolltop with (minimal) -->
<script>
    $('body').materialScrollTop();
</script>
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
        console.log('This is the end, my only friend, the end...');
    }
});
```

## Customization

### Colors, sizes and stuff
Using SASS [*(this file)*](src/material-scrolltop.scss), you can simply edit default styles, colors, position and customize plugin to fit your needs. :thumbsup: (Or just edit directly css stylesheet)

### Icons
#### SVG

You can change `svg` icon in [`src/icons/`](src/icons/) directory.

#### Custom text or sign
 1. Turn off svg icon as sass variable: `$mst-icon: false`
 2. Build your new stylesheet (now without svg icon)
 3. Put your new sign or text inside html `<span>` element like this:

```html
<button class="material-scrolltop" type="button">
        <span>↑</span>
</button>
```



## Dependencies

jQuery 1.7+

## Application

- [Drupal module](https://www.drupal.org/project/material_scrolltop)

## License

Copyright &copy; 2015 [Lukas Bartak](http://bartweb.cz)

Proudly powered by nature, wind, tea and beer ;)

All contents are licensed under the [MIT license].

[MIT license]: LICENSE
