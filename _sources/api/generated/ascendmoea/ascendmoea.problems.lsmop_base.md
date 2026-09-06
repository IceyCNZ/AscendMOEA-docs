# {py:mod}`ascendmoea.problems.lsmop_base`

```{py:module} ascendmoea.problems.lsmop_base
```

```{autodoc2-docstring} ascendmoea.problems.lsmop_base
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`LSMOP <ascendmoea.problems.lsmop_base.LSMOP>`
  - ```{autodoc2-docstring} ascendmoea.problems.lsmop_base.LSMOP
    :summary:
    ```
````

### API

`````{py:class} LSMOP(problem_id: int, n=100, m=3, d=None, max_fe=10000, nk: int = 5)
:canonical: ascendmoea.problems.lsmop_base.LSMOP

Bases: {py:obj}`ascendmoea.core.Problem`

```{autodoc2-docstring} ascendmoea.problems.lsmop_base.LSMOP
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.problems.lsmop_base.LSMOP.__init__
```

````{py:method} setting() -> None
:canonical: ascendmoea.problems.lsmop_base.LSMOP.setting

```{autodoc2-docstring} ascendmoea.problems.lsmop_base.LSMOP.setting
```

````

````{py:method} cal_obj(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.lsmop_base.LSMOP.cal_obj

```{autodoc2-docstring} ascendmoea.problems.lsmop_base.LSMOP.cal_obj
```

````

````{py:method} get_optimum(n: int = 1000)
:canonical: ascendmoea.problems.lsmop_base.LSMOP.get_optimum

```{autodoc2-docstring} ascendmoea.problems.lsmop_base.LSMOP.get_optimum
```

````

````{py:method} get_pf()
:canonical: ascendmoea.problems.lsmop_base.LSMOP.get_pf

```{autodoc2-docstring} ascendmoea.problems.lsmop_base.LSMOP.get_pf
```

````

`````
