# Pomegranate-Express

A Plugin bundle for the Pomegranate application framework.

# Included Plugins

Pomegranate-Express bundles several easily configurable plugins that implement the Express framework.

<a name="module_Application"></a>
## Application
Provides the Express App, Express Router Factory and Middleware object.

**Injector**: <code>Dynamic</code> Adds a dynamic number of objects.  
**Options**: <code>Object</code> none  
**Injects**: <code>Service</code> Express Configurable instance of Express.  
**Injects**: <code>Factory</code> Router Provides instances of Express.Router() to define routes on.  
**Injects**: <code>Merge</code> Middleware An object spanning all of the middleware in a project.  

<a name="module_BundledMiddleware"></a>
## BundledMiddleware
Provides Overrideable standard middleware.

**Injector**: <code>Merge</code> Merges all returned objects into the provided dep name.  
**Options**: <code>Object</code> none  
**Injects**: <code>function</code> Middleware - 404  
**Injects**: <code>function</code> Middleware - 500  

<a name="module_PreMiddleware"></a>
## PreMiddleware
Configures the Express application and mounts all pre-route middleware.

**Injector**: <code>None</code> Adds nothing to the injector.  
**Options**: <code>Object</code> options  
**Options**: <code>Array</code> options.order Mount order of middleware functions.  

<a name="module_Router"></a>
## Router
Loads and mounts provided route definition files located in options.workDir

**Injector**: <code>None</code> Adds nothing to the injector.  
**Options**: <code>Object</code> options  
**Options**: <code>String</code> options.workDir Default: './routes'  

<a name="module_PostMiddleware"></a>
## PostMiddleware
Configures the Express application and mounts all post-route middleware, including error handlers.

**Injector**: <code>None</code> Adds nothing to the injector.  
**Options**: <code>Object</code> options  
**Options**: <code>Array</code> options.order Mount order of middleware functions. Default: ['404', '500']  

<a name="module_Launcher"></a>
## Launcher
Configures the Express application and mounts all pre-route middleware.

**Injector**: <code>None</code> Adds nothing to the injector.  
**Options**: <code>Object</code> options  
**Options**: <code>Number</code> options.port Port to bind server to. Default: 8080  
**Options**: <code>String</code> options.address Address to bind server to. Default: localhost  


# Bundled Middleware
<a name="module_404"></a>
## 404
Bundled 404 handler middleware


<a name="module_500"></a>
## 500


# Usage and Examples