# DOM Manipulation and Events
* DOM Stands for Document Object Model


## DOM Methods
### Targeting nodes with selectors
* You can select a node much the same as css
```js
document.querySelector("#container"); // Gets the first match
document.querySelectorAll(".primary-button"); // Gets all matches
```
### Element creation
* Can create a new element with a certain tag
```js
const div = document.createElement("div");
```
* Does not insert it into the DOM.
  * Its only in memory.

### Appending elements
* node.appendChild(node);
* node.insertBefore(newNode, referenceNode);
### Remove elements
* node.removeChild(child);

## Loading javascript
* If you load js files at the top of html, the rest of the DOM will not be loaded yet so it probably wont work
  * Thus, either need to load it later or defer

```html
<head>
  <script src="js-file.js" defer></script>
</head>
```

## Events
* This is how we manipulate the DOM on demand or dynamically.
* Events are actions that occur on the webpage
  * EG Mouse click, key press.
* 3 ways to do this
  1. Specify function directly on HTML
  2. Set properties in the form of `on<eventType>`
     * EG onclick, onmousedown
  3. Attach event listeners to DOM nodes in js
* Event listeners are the preferences (#3)

### Method 1
```html
<button onclick="alert('Hello World')">
```

### Method 2
```html
<button id="btn">Click</btn>
```

```js
const btn = document.querySelector("#btn");
btn.onclick = () => console.log("Hello world");
```

* The problem is that a btn can only be assigned onclick once

### Method 3
```js
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => console.log("Hello world));
```

* Using named functions tends to be a good idea.
* Can get an event object in the callback by just adding a thing to function
```js
function callback(e) {
  e.target.style.background = "blue";
}
```
## More about events that I found interesting
* screenX and screenY on mouse events gives the location on the entire screen
  * clientX and clientY give the position relative to the applications area
    * I think this means it gives the location in the element.

### Event delegation
* Having too many event handlers can be a problem apparently
  * If the children of a parent all need to listen to the same event then we can give an event handler to the parent and perform a switch statement or something.

### Making our own events
* Follow 2 steps to generate an event
  1. Create a new event using the `Event` constructor
     * `let event = new Event(type, [options]);`
  2. Trigger the event using `element.dispatchEvent();`
* I think these events are only for UI events
* Can make an actual custom event with `CustomEvent(eventType, options)`