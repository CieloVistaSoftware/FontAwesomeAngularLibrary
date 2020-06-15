# Lib

The ngPackage contains the "entry-point" to the library.  The AOT compiler needs this..

The package.json file lists only peer dependencies

The src folder contains the important publi-api.ts file which must export the correct stuff (for consumers) and for the compile itself.

The lib folder shows the default component, module and service files but adds a new folder named component-within. This was done to represent a "normal" Angular component with it's own folder.

This gives us a pattern to import other folders from other projects.

