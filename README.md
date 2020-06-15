# WTF

Creating an Angular library is much different than a SPA application.  
First the project must live in a multiproject workspace.
2nd the library folder itself will automatically contain a sing component, module, and service.
It will also contain a public-api.ts file which exposes library content to the consumer.

This project was [discussed here](https://dev.to/jwp/fa-icon-problems-in-angular-library-project-47g5)

and [here](https://dev.to/jwp/angular-libraries-fontawesome-1j1p)

In the project folder are two folders 

- TestTheLib : is an Angular application which imports content from the lib project.  Use ng serve in that folder to see it.

- Lib : This is the folder containing resusable parts.
