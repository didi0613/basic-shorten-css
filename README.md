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
