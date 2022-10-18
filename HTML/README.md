<div align="center">
  <a class="header-badge" target="\_blank" href="https://www.linkedin.com/in/haroldarriolanucamendi/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
  </a>
  <a class="header-badge" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Html">
    <img src="https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white">
  </a>
</div>

# Welcome to HTML | HyperText Markup Language

HTML is a file format that allows us to structure web pages at the lowest level. We often think about HTML as the skeleton of a website, and it is not considered a coding langauge, its more of a language to stadardize how we will build upon our web page.

# Table of Contents

- [Welcome to HTML | HyperText Markup Language](#welcome-to-html--hypertext-markup-language)
- [Table of Contents](#table-of-contents)
- [HTML Tags and Attributes](#html-tags-and-attributes)
  - [Tags](#tags)
  - [Attributes](#attributes)
- [The Basic Structure](#the-basic-structure)
- [Comments in HTML](#comments-in-html)

# HTML Tags and Attributes

## Tags

In HTML we declare HyperText Markup in tags with an identifier, here is an example

```HTML
<!-- In this case the identifier is "html" -->
<html> <!-- The opening tag -->
</html> <!-- The closing tag -->
```

There are other tags that we can use, here are some examples:

```HTML
<html></html>
<body></body>
<head></head>
<main></main>
<a></a>
<img />
<link />
```

As you can see for the most part tags have two pieces, an opening tag `<html>` and a closing tag `</html>` but some tags are special and are what we refer to as `self closing tags` such as the `img` tag `<img />` we open and close the tag just like this all within one tag declaration.

## Attributes

Attributes are specified by keywords that are already defined in the HTML language for us to use, we place attributes within our tag declarations, and they are not always needed, but most tags have some attributes that are very helpful or highly recommended.

```HTML
<img src="" alt="" /> <!-- Here we define the "src" and "alt" attributes -->

<div class="" ></div> <!-- Here we have the "class" attribute -->
```

Each attribute has its own features, like in the example above we use `src` which is used to declare the path to an image, `alt` is used to set a description of an image, and `class` is used to set a class name to a tag.

---

| <strong>[Scroll to top of section](#html-tags-and-attributes)</strong> |
| <strong>[Scroll to last section](#table-of-contents)</strong> |
| <strong>[Scroll to top of page](#welcome-to-html--hypertext-markup-language)</strong> |

---

# The Basic Structure

There are not many rules to writing HTML but there is a basic structure, and a practice we follow to write `semantic HTML` semantic meaning `relating to meaning in language` we will cover semantic HTML in more detail in another section. Here we will cover the `boilerplate` code that is required when starting to write HTML:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

This code may not be something we need to understand in full detail, especially as we begin coding, but it is something that we need to write in all of our HTML pages.

The `!DOCTYPE` declaration is how we let our browser know that we are writing in HTML, and the version of HTML that we are using. This tag is not like any other HTML tag, this is a special information tag just to inform our browser(where we render our HTML) what we are writing. But this tag is important and it is always needed. In HTML 5(Latest Version) this is how we declare our `!DOCTYPE` information tag.

```HTML
<!DOCTYPE html>
```

The `html` tag, this is the first real HTML tag that we write beneath our `!DOCTYPE` declaration. The `html` serves as a wrapper around all the code that we write in the HTML language. Meaning any of the code that we write should fall in between of the `html` tag.

```HTML
<!-- The html tag -->
<html lang="en"></html>

<!-- The html tag in use -->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

```HTML
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
```

```HTML
<body></body>
```

---

| <strong>[Scroll to top of section](#the-basic-structure)</strong> |
| <strong>[Scroll to last section](#html-tags-and-attributes)</strong> |
| <strong>[Scroll to top of page](#welcome-to-html--hypertext-markup-language)</strong> |

---

# Comments in HTML

---

| <strong>[Scroll to top of section](#comments-in-html)</strong> |
| <strong>[Scroll to last section](#the-basic-structure)</strong> |
| <strong>[Scroll to top of page](#welcome-to-html--hypertext-markup-language)</strong> |

---
