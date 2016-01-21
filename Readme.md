# Pomegranate-Express

A Plugin bundle for the [Pomegranate](https://github.com/Pomegranate/Pomegranate) application framework.
Pomegranate-Express bundles several easily configurable plugins that implement the Express framework.

# Usage and Examples

### Install
```shell
$ npm install --save pomegranate pomegranate-express
$ ./node_modules/.bin/pomegranate init -f . && ./node_modules/.bin/pomegranate build
$ node pom.js
```

### Routing.

The Router plugin creates your route structure based on directory and module names.
You can basically treat it exactly like an instance of [Express Router](http://expressjs.com/en/api.html#router)
because that is exactly what it is.

ex.

```javascript
/* file ./routes/index.js */

module.exports = function(Router){

  //available at http://localhost:8080/
  Router.get('/', function(req, res, next){
    res.send('Hello from the index')
  })

  // Note: your route files must return
  // the factory instance of Router provided
  return Router
}

```
You can define named routes just as easily.

```javascript
/* file ./routes/hello/index.js */

module.exports = function(Router){
  //available at http://localhost:8080/hello
  Router.get('/', function(req, res, next){
    res.send('Hello from a sub directory')
  })

  //available at http://localhost:8080/hello/world
  Router.get('/world', function(req, res, next){
    res.send('Hello from a named route')
  })
  return Router
}
```

Finally You can name your files if you have complex routes that you wish to segregate.
These coexist with index files, so feel free to experiment with what works best for you.

```javascript
/* file ./routes/hello/name.js */

module.exports = function(Router){
  //available at http://localhost:8080/hello/name/bob
  Router.get('/:name', function(req, res, next){
    res.send('Hello from a named file ' + req.params.name)
  })
  return Router
}

```
### Middleware.

Obviously any Express application lives on its middleware stack. Pomegranate makes it easy to create, configure and
load your middleware functions without a huge boilerplate file.

The Application Plugin creates a shared object that middleware functions can merge into,
Later in the Pomegranate bootstrap process, the PreRouter and PostRouter plugins will use this object
to mount your middleware. The BundleMiddleware plugin provides some stock functions, but you can easily override
them by creating your own with the same name.

ex.

```javascript
/* file ./plugins/MyMiddleware.js */

module.exports = {
  options: { //optional but preferred}
  metadata: {
    name: 'MyMiddleware',
    layer: 'dependencies'
    param: 'Middleware',
    type: 'merge'
  },
  plugin: {
    load: function(inject, loaded){

      /*
       * Create one or many middleware functions here, you can split them up into separate files if needed.
       */

      var myMiddlewares = {
       awesome: function(req, res, next){
          console.log('You are really awesome')
          next()
       }
     }

     /*
      * When you are ready, call loaded with your middlewares as the second param.
      * If something goes wrong, pass the error to the first param of loaded()
      */

     loaded(null, myMiddlewares)
    },
    start: function(done){
      done(null)
    }
    stop: function(done){
      done(null)
    }
  }
}
```


# Included Plugins

<a name="module_Application"></a>
## Application
Provides the Express App, Express Router Factory and Middleware object.

**Injector**: <code>Dynamic</code> Adds a dynamic number of objects.  
**Injects**: <code>Service</code> Express - Configurable instance of Express.  
**Injects**: <code>Factory</code> Router - Provides instances of Express.Router() to define routes on.  
**Injects**: <code>Merge</code> Middleware - An object spanning all of the middleware in a project.  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Plugin Options |
| options.caseSensitiveRoutes | <code>Boolean</code> | <code>false</code> |  |
| options.mergeReqParams | <code>Boolean</code> | <code>false</code> |  |
| options.strictRouting | <code>Boolean</code> | <code>false</code> |  |


<a name="module_BundledMiddleware"></a>
## BundledMiddleware
Provides Overrideable standard middleware.

**Injector**: <code>Merge</code> Merges all returned objects into the provided dep name.  
**Injects:**: <code>function</code> Middleware - 404  
**Injects:**: <code>function</code> Middleware - 500  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | This plugin has no options |


<a name="module_PreMiddleware"></a>
## PreMiddleware
Configures the Express application and mounts all pre-route middleware.

**Injector**: <code>None</code> Adds nothing to the injector.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Plugin Options |
| options.order | <code>Array</code> | Mount order of middleware functions. |


<a name="module_Router"></a>
## Router
Loads and mounts provided route definition files located in options.workDir

**Injector**: <code>None</code> Adds nothing to the injector.  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Plugin Options |
| options.workDir | <code>String</code> | <code>./routes</code> | Directory to load routes from. |


<a name="module_PostMiddleware"></a>
## PostMiddleware
Configures the Express application and mounts all post-route middleware, including error handlers.

**Injector**: <code>None</code> Adds nothing to the injector.  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Plugin Options |
| options.order | <code>Array.&lt;String&gt;</code> | <code>&#x27;[&#x27;404&#x27;,&#x27;500&#x27;]&#x27;</code> | Mount order of middleware functions. |


<a name="module_Launcher"></a>
## Launcher
Configures the Express application and mounts all pre-route middleware.

**Injector**: <code>None</code> Adds nothing to the injector.  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Plugin Options |
| options.port | <code>Number</code> | <code>8080</code> | Port to bind server to. |
| options.address | <code>String</code> | <code>localhost</code> | Address to bind server to. |



# Bundled Middleware
<a name="module_404"></a>
## 404
Bundled 404 handler middleware


<a name="module_500"></a>
## 500


