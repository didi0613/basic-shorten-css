# Enable shorten CSS class names for CSS Module

This is a basic Electrode App for shorten css class names for css modules.
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

# References
blog: https://medium.freecodecamp.org/reducing-css-bundle-size-70-by-cutting-the-class-names-and-using-scope-isolation-625440de600b
electrode archetype changes: https://github.com/didi0613/electrode/tree/shorten-classnames-prod
