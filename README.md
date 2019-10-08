# Forward

> AA and AAA conformance color contrast checker according to the WCAG

Forward is an automated accessibility color contrast checker that receives a color palette as the input and returns all its possible AA and AAA color contrast combinations.

<img alt="screenshot" src="https://raw.githubusercontent.com/Palmaswell/forward/master/static/screenshot.png" />

## Uploading Colors
Currently, you can upload a color palette in JSON format. It's an array containing color objects. 
Each object has a `"name"` property and a `"rgb"` property containing an array with the rgb values [r, g, b].

### JSON File Example
```js
[
  {
    "name": "Light Pink",
    "rgb": [255, 176, 193]
  },
  {
    "name": "Cyclamen",
    "rgb": [243, 116, 174]
  },
  {
    "name": "Light Crimson",
    "rgb": [234, 99, 140]
  }
}
```


## Develop

* :rocket: Node.js `>=8`
* :cat2: yarn `>= 1.12`

```sh
  git clone https://github.com/Palmaswell/forward.git
  cd forward
  yarn
  
  yarn dev

  # In a second terminal window
  yarn test --watchAll
```

## Contribute

Feel free to contribute! Open an [issue](https://github.com/Palmaswell/forward/issues), submit a
[Pull Request](https://github.com/Palmaswell/forward/pulls) or let’s discuss what should be next. ❤️
