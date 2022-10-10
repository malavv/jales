# jales

Lightweight Viewer and Editor for BeerJSON file.

Provides an easy to understand graphical representation for BeerJSON file. Recipes files can be shown through
multiple UIs, each fitted to a different use case. (Development, Brewing, etc)

Our idea is to consider the recipe as the immutable building block. This has the advantage of simplyfing content
management, since recipes are just files in folders, make concurrent edition simpler by assuming immutability,
and increase shareability since you just send a recipe file. For this reason, this is **not** a brewing simulator,
just a viewer with simple editing functions.

Another goal is to use this project as a "sandbox" for new innovative beer UIs. So feel free to use this UI library
in any of your project, or to suggest improvements!

## To Keep In Mind

Keep it simple to keep it correct.

* Allow for logical change management.

## Requirements

An up-to-date version of NodeJS available from the command line. If on Windows `winget install -e --id OpenJS.NodeJS.LTS`

## Run for Dev

Go to the inside `jales` folder, and `npm start`. It will open a browser, and will listen for file changes.

## Package app

Replace with procedure. Note using https://mmazzarolo.com/blog/2021-08-12-building-an-electron-application-using-create-react-app/

## Authors

* Maxime Lavigne (malavv) <duguigne@gmail.com>
