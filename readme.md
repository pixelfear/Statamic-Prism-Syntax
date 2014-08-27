# Statamic Prism Syntax

If you like to use [Prism](http://prismjs.com/) (you should) and [Statamic](http://statamic.com/) (you should), and you need code highlighted – here you go.

## Usage

Load Prism and the language file – either by separate files or by your own build process like Grunt or Gulp.

```markup
<script src="prism.js"></script>
<script src="prism.lang.statamic.js"></script>
```

Add CSS classes to your stylesheet:

```css
/* Statamic specific */
.statamic-tag {...}
.statamic-tag .plugin-name {...}
.statamic-tag .tag-name {...}
.keyword {...}

/* Shared with Markup */
.comment {...}
.attr-value {...}
.attr-name {...}
.punctuation {...}
```