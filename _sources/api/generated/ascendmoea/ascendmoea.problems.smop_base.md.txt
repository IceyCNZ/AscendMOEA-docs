# {py:mod}`ascendmoea.problems.smop_base`

```{py:module} ascendmoea.problems.smop_base
```

```{autodoc2-docstring} ascendmoea.problems.smop_base
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`SMOP <ascendmoea.problems.smop_base.SMOP>`
  - ```{autodoc2-docstring} ascendmoea.problems.smop_base.SMOP
    :summary:
    ```
````

### API

`````{py:class} SMOP(problem_id: int, n=100, m=2, d=100, max_fe=10000, theta: float = 0.1)
:canonical: ascendmoea.problems.smop_base.SMOP

Bases: {py:obj}`ascendmoea.core.Problem`

```{autodoc2-docstring} ascendmoea.problems.smop_base.SMOP
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.problems.smop_base.SMOP.__init__
```

````{py:method} setting()
:canonical: ascendmoea.problems.smop_base.SMOP.setting

```{autodoc2-docstring} ascendmoea.problems.smop_base.SMOP.setting
```

````

````{py:method} cal_obj(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.smop_base.SMOP.cal_obj

```{autodoc2-docstring} ascendmoea.problems.smop_base.SMOP.cal_obj
```

````

````{py:method} get_optimum(n: int = 1000)
:canonical: ascendmoea.problems.smop_base.SMOP.get_optimum

```{autodoc2-docstring} ascendmoea.problems.smop_base.SMOP.get_optimum
```

````

````{py:method} get_pf()
:canonical: ascendmoea.problems.smop_base.SMOP.get_pf

```{autodoc2-docstring} ascendmoea.problems.smop_base.SMOP.get_pf
```

````

`````
