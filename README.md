## Native Image Asset
Show images included in the application template (iOS asset catalog and the Android drawable folder). This will help keep the application (JS) bundle small by moving static content to the application template.

## Usage
1. Build a custom app using Build Native App.
2. Add images to the asset catalog and drawable folder.
3. Add this widget to your project and place it where you want to show the images.
4. You can specify width and height of the image in the widget and style it further using native styling.

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
