# {py:mod}`ascendmoea.problems.motsp`

```{py:module} ascendmoea.problems.motsp
```

```{autodoc2-docstring} ascendmoea.problems.motsp
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`MOTSP <ascendmoea.problems.motsp.MOTSP>`
  - ```{autodoc2-docstring} ascendmoea.problems.motsp.MOTSP
    :summary:
    ```
````

### API

`````{py:class} MOTSP(n=100, m=2, d=30, max_fe=10000)
:canonical: ascendmoea.problems.motsp.MOTSP

Bases: {py:obj}`ascendmoea.core.Problem`

```{autodoc2-docstring} ascendmoea.problems.motsp.MOTSP
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.problems.motsp.MOTSP.__init__
```

````{py:attribute} name
:canonical: ascendmoea.problems.motsp.MOTSP.name
:value: >
   'MOTSP'

```{autodoc2-docstring} ascendmoea.problems.motsp.MOTSP.name
```

````

````{py:method} setting() -> None
:canonical: ascendmoea.problems.motsp.MOTSP.setting

```{autodoc2-docstring} ascendmoea.problems.motsp.MOTSP.setting
```

````

````{py:method} cal_obj(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.motsp.MOTSP.cal_obj

```{autodoc2-docstring} ascendmoea.problems.motsp.MOTSP.cal_obj
```

````

````{py:method} get_optimum(n: int = 1000)
:canonical: ascendmoea.problems.motsp.MOTSP.get_optimum

```{autodoc2-docstring} ascendmoea.problems.motsp.MOTSP.get_optimum
```

````

````{py:method} get_pf()
:canonical: ascendmoea.problems.motsp.MOTSP.get_pf

```{autodoc2-docstring} ascendmoea.problems.motsp.MOTSP.get_pf
```

````

`````
