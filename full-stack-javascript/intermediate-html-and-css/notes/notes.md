# Emmet
* Basically just provides shortcuts for html and css
* Can type `!` in an empty html file to generate all that html boilerplate
* Use `$` to represent the number when doing multiplication in Emmet

## Wrap with abbreviation
* An amazing tool for wrapping html elements
  * See https://docs.emmet.io/actions/wrap-with-abbreviation/
* Shortcut is Command+Shift+A

## Remove tag
* Literally removes both sides of a HTML tag with Command+K]
* https://docs.emmet.io/actions/remove-tag/
* Thats so handy

# SVG
* An image format
* Scalable
  * meaning able to scale to any size and retain quality
  * Can be edited programmatically
* Often used for
  1. Icons
  2. Graphs and charts
  3. Large, simple images
  4. Patterned backgrounds
  5. Applying effects to other elements
* Stands for `Scalable Vector Graphics`
* Defined using math instead of raster graphics
  * We don't use a set of pixels, we use formulas to decide which pixels are what.
* Uses XML
  * This means its human readable

## Drawbacks
* Because everything is written in XML, they are terrible for complex images
  * Photo realism or anything is not possible
    * You want each pixel to be a certain colour with that, this is not for that.
* So if it has fine detail that is hard to represent with math, SVG is not the correct tool.

## Anatomy of an SVG
* Usually dont create them yourself
  * Use tools like adobe or figma or even Canva I spose to create em.
* Parts of an SVG
  * `xmlns`: XML Namespace
    * Describes the dialect of XML
  * `viewBox`: Defines bounds of the SVG
    * Also the origin and aspect ratio
  * `class` and `id`: Functions the same as HTML
  * SVG attributes like `fill`: Does things to the svg element

## Embedding SVGs
* Two main approaches
  1. Linked
  2. Inline
### Linked
* Like any other image
* Link it in using an `img` tag or css `background-image: url(...)`
* Still scalable but not accessible from webpage

### Inline
* Basically just copy and pasting the SVG
* This will make it visible in HTML, meaning can edit with js and css
* This is more powerful but its harder to read

# Tables
* Base tables are UGLY

# CSS Units
* Lots of different times to use lots of different units
* Some rules of thumb
  * Font size in rem
  * Absolute sizes in px
  * Can use viewport for lots of things
  * Width is often good as a % with a max-width OR using ch
    * 1ch more or less equates to 1 character width.
      * Its best to keep lines to about 75ch at most.
  * Usually, don't set height. But if you do, use min-height
  * Use em for media queries and padding/margin