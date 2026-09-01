# {py:mod}`ascendmoea.problems.zdt_base`

```{py:module} ascendmoea.problems.zdt_base
```

```{autodoc2-docstring} ascendmoea.problems.zdt_base
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`ZDT <ascendmoea.problems.zdt_base.ZDT>`
  - ```{autodoc2-docstring} ascendmoea.problems.zdt_base.ZDT
    :summary:
    ```
````

### API

`````{py:class} ZDT(problem_id: int, n: int = 100, d: int | None = None, max_fe: int = 10000)
:canonical: ascendmoea.problems.zdt_base.ZDT

Bases: {py:obj}`ascendmoea.core.Problem`

```{autodoc2-docstring} ascendmoea.problems.zdt_base.ZDT
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.problems.zdt_base.ZDT.__init__
```

````{py:method} setting() -> None
:canonical: ascendmoea.problems.zdt_base.ZDT.setting

```{autodoc2-docstring} ascendmoea.problems.zdt_base.ZDT.setting
```

````

````{py:method} cal_obj(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.zdt_base.ZDT.cal_obj

```{autodoc2-docstring} ascendmoea.problems.zdt_base.ZDT.cal_obj
```

````

````{py:method} get_optimum(n: int = 1000)
:canonical: ascendmoea.problems.zdt_base.ZDT.get_optimum

```{autodoc2-docstring} ascendmoea.problems.zdt_base.ZDT.get_optimum
```

````

````{py:method} get_pf()
:canonical: ascendmoea.problems.zdt_base.ZDT.get_pf

```{autodoc2-docstring} ascendmoea.problems.zdt_base.ZDT.get_pf
```

````

`````
