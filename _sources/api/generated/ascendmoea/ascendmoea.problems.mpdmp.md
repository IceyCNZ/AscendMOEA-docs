# {py:mod}`ascendmoea.problems.mpdmp`

```{py:module} ascendmoea.problems.mpdmp
```

```{autodoc2-docstring} ascendmoea.problems.mpdmp
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`MPDMP <ascendmoea.problems.mpdmp.MPDMP>`
  - ```{autodoc2-docstring} ascendmoea.problems.mpdmp.MPDMP
    :summary:
    ```
````

### API

`````{py:class} MPDMP(n=100, m=10, max_fe=10000, lower=-100.0, upper=100.0)
:canonical: ascendmoea.problems.mpdmp.MPDMP

Bases: {py:obj}`ascendmoea.core.Problem`

```{autodoc2-docstring} ascendmoea.problems.mpdmp.MPDMP
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.problems.mpdmp.MPDMP.__init__
```

````{py:attribute} name
:canonical: ascendmoea.problems.mpdmp.MPDMP.name
:value: >
   'MPDMP'

```{autodoc2-docstring} ascendmoea.problems.mpdmp.MPDMP.name
```

````

````{py:method} setting() -> None
:canonical: ascendmoea.problems.mpdmp.MPDMP.setting

```{autodoc2-docstring} ascendmoea.problems.mpdmp.MPDMP.setting
```

````

````{py:method} cal_obj(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.mpdmp.MPDMP.cal_obj

```{autodoc2-docstring} ascendmoea.problems.mpdmp.MPDMP.cal_obj
```

````

````{py:method} get_optimum(n: int = 1000)
:canonical: ascendmoea.problems.mpdmp.MPDMP.get_optimum

```{autodoc2-docstring} ascendmoea.problems.mpdmp.MPDMP.get_optimum
```

````

````{py:method} get_pf()
:canonical: ascendmoea.problems.mpdmp.MPDMP.get_pf

```{autodoc2-docstring} ascendmoea.problems.mpdmp.MPDMP.get_pf
```

````

`````
