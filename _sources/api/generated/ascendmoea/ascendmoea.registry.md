# {py:mod}`ascendmoea.registry`

```{py:module} ascendmoea.registry
```

```{autodoc2-docstring} ascendmoea.registry
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`ComponentRegistry <ascendmoea.registry.ComponentRegistry>`
  - ```{autodoc2-docstring} ascendmoea.registry.ComponentRegistry
    :summary:
    ```
````

### Data

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`ComponentT <ascendmoea.registry.ComponentT>`
  - ```{autodoc2-docstring} ascendmoea.registry.ComponentT
    :summary:
    ```
````

### API

````{py:data} ComponentT
:canonical: ascendmoea.registry.ComponentT
:value: >
   'TypeVar(...)'

```{autodoc2-docstring} ascendmoea.registry.ComponentT
```

````

`````{py:class} ComponentRegistry(kind: str, components: collections.abc.Iterator[type[ascendmoea.registry.ComponentT]] | tuple[type[ascendmoea.registry.ComponentT], ...] = ())
:canonical: ascendmoea.registry.ComponentRegistry

Bases: {py:obj}`collections.abc.MutableMapping`\[{py:obj}`str`\, {py:obj}`type`\[{py:obj}`ascendmoea.registry.ComponentT`\]\], {py:obj}`typing.Generic`\[{py:obj}`ascendmoea.registry.ComponentT`\]

```{autodoc2-docstring} ascendmoea.registry.ComponentRegistry
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.registry.ComponentRegistry.__init__
```

````{py:method} register(component: type[ascendmoea.registry.ComponentT] | None = None, *, name: str | None = None, replace: bool = False)
:canonical: ascendmoea.registry.ComponentRegistry.register

```{autodoc2-docstring} ascendmoea.registry.ComponentRegistry.register
```

````

````{py:method} create(name: str, /, **kwargs) -> ascendmoea.registry.ComponentT
:canonical: ascendmoea.registry.ComponentRegistry.create

```{autodoc2-docstring} ascendmoea.registry.ComponentRegistry.create
```

````

````{py:method} names() -> tuple[str, ...]
:canonical: ascendmoea.registry.ComponentRegistry.names

```{autodoc2-docstring} ascendmoea.registry.ComponentRegistry.names
```

````

`````
