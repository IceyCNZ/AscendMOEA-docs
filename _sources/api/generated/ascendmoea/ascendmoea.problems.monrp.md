# {py:mod}`ascendmoea.problems.monrp`

```{py:module} ascendmoea.problems.monrp
```

```{autodoc2-docstring} ascendmoea.problems.monrp
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`MONRP <ascendmoea.problems.monrp.MONRP>`
  - ```{autodoc2-docstring} ascendmoea.problems.monrp.MONRP
    :summary:
    ```
````

### API

`````{py:class} MONRP(n=100, d=100, max_fe=10000)
:canonical: ascendmoea.problems.monrp.MONRP

Bases: {py:obj}`ascendmoea.core.Problem`

```{autodoc2-docstring} ascendmoea.problems.monrp.MONRP
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.problems.monrp.MONRP.__init__
```

````{py:attribute} name
:canonical: ascendmoea.problems.monrp.MONRP.name
:value: >
   'MONRP'

```{autodoc2-docstring} ascendmoea.problems.monrp.MONRP.name
```

````

````{py:method} setting() -> None
:canonical: ascendmoea.problems.monrp.MONRP.setting

```{autodoc2-docstring} ascendmoea.problems.monrp.MONRP.setting
```

````

````{py:method} cal_obj(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.monrp.MONRP.cal_obj

```{autodoc2-docstring} ascendmoea.problems.monrp.MONRP.cal_obj
```

````

````{py:method} get_optimum(n: int = 1000)
:canonical: ascendmoea.problems.monrp.MONRP.get_optimum

```{autodoc2-docstring} ascendmoea.problems.monrp.MONRP.get_optimum
```

````

````{py:method} get_pf()
:canonical: ascendmoea.problems.monrp.MONRP.get_pf

```{autodoc2-docstring} ascendmoea.problems.monrp.MONRP.get_pf
```

````

`````
