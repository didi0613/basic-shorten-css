# Enable shorten CSS class names for CSS Module

This is a basic Electrode App for shorten css class names for css modules.

> Note: Electrode App with css modules

Originally electrode app is using CSS module generates class names like this:

```
{noformat}
.skeleton__offset-by-four___1X84H.skeleton__columns___1A5LB
{noformat}
```

However, to shrink the size under production env, we can renaming CSS class names at the compilation time like:

```
{noformat}
.___1X84H.___1A5LB
{noformat}
```

# CSS bundle sizes

I would like to share the results of enabling the shorten CSS class names for CSS Module based on this app.

In the production environment, css bundle size decreased from 13.2kb to 9.94kb, which is roughly 24.8% decreased.

Original css bundle size:

<div style='float: center'>
  <img style='width: 100%' src="./images/size_before.png"></img>
</div>

Current css bundle size:

<div style='float: center'>
  <img style='width: 100%' src="./images/size_after.png"></img>
</div>

# CSS names

## development env

<div style='float: center'>
  <img style='width: 100%' src="./images/dev.png"></img>
</div>

## production env

<div style='float: center'>
  <img style='width: 100%' src="./images/prod.png"></img>
</div>

## app demo

<div style='float: center'>
  <img style='width: 100%' src="./images/home.png"></img>
</div>

# References

[blog](https://medium.freecodecamp.org/reducing-css-bundle-size-70-by-cutting-the-class-names-and-using-scope-isolation-625440de600b)

[electrode archetype changes](https://github.com/didi0613/electrode/tree/shorten-classnames-prod)
