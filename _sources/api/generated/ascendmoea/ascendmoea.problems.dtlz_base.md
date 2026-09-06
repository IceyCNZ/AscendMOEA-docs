# {py:mod}`ascendmoea.problems.dtlz_base`

```{py:module} ascendmoea.problems.dtlz_base
```

```{autodoc2-docstring} ascendmoea.problems.dtlz_base
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`DTLZ <ascendmoea.problems.dtlz_base.DTLZ>`
  - ```{autodoc2-docstring} ascendmoea.problems.dtlz_base.DTLZ
    :summary:
    ```
````

### API

`````{py:class} DTLZ(problem_id: int, n: int = 100, m: int = 3, d: int | None = None, max_fe: int = 10000)
:canonical: ascendmoea.problems.dtlz_base.DTLZ

Bases: {py:obj}`ascendmoea.core.Problem`

```{autodoc2-docstring} ascendmoea.problems.dtlz_base.DTLZ
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.problems.dtlz_base.DTLZ.__init__
```

````{py:method} setting() -> None
:canonical: ascendmoea.problems.dtlz_base.DTLZ.setting

```{autodoc2-docstring} ascendmoea.problems.dtlz_base.DTLZ.setting
```

````

````{py:method} cal_obj(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.dtlz_base.DTLZ.cal_obj

```{autodoc2-docstring} ascendmoea.problems.dtlz_base.DTLZ.cal_obj
```

````

````{py:method} get_optimum(n: int = 1000)
:canonical: ascendmoea.problems.dtlz_base.DTLZ.get_optimum

```{autodoc2-docstring} ascendmoea.problems.dtlz_base.DTLZ.get_optimum
```

````

````{py:method} get_pf()
:canonical: ascendmoea.problems.dtlz_base.DTLZ.get_pf

```{autodoc2-docstring} ascendmoea.problems.dtlz_base.DTLZ.get_pf
```

````

`````
