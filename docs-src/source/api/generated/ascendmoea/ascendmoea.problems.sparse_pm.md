# {py:mod}`ascendmoea.problems.sparse_pm`

```{py:module} ascendmoea.problems.sparse_pm
```

```{autodoc2-docstring} ascendmoea.problems.sparse_pm
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`SparsePM <ascendmoea.problems.sparse_pm.SparsePM>`
  - ```{autodoc2-docstring} ascendmoea.problems.sparse_pm.SparsePM
    :summary:
    ```
````

### API

`````{py:class} SparsePM(n=100, max_fe=10000)
:canonical: ascendmoea.problems.sparse_pm.SparsePM

Bases: {py:obj}`ascendmoea.core.Problem`

```{autodoc2-docstring} ascendmoea.problems.sparse_pm.SparsePM
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.problems.sparse_pm.SparsePM.__init__
```

````{py:attribute} name
:canonical: ascendmoea.problems.sparse_pm.SparsePM.name
:value: >
   'Sparse_PM'

```{autodoc2-docstring} ascendmoea.problems.sparse_pm.SparsePM.name
```

````

````{py:method} setting() -> None
:canonical: ascendmoea.problems.sparse_pm.SparsePM.setting

```{autodoc2-docstring} ascendmoea.problems.sparse_pm.SparsePM.setting
```

````

````{py:method} initialization(n: int | None = None) -> ascendmoea.core.Population
:canonical: ascendmoea.problems.sparse_pm.SparsePM.initialization

```{autodoc2-docstring} ascendmoea.problems.sparse_pm.SparsePM.initialization
```

````

````{py:method} cal_obj(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.sparse_pm.SparsePM.cal_obj

```{autodoc2-docstring} ascendmoea.problems.sparse_pm.SparsePM.cal_obj
```

````

````{py:method} get_optimum(n: int = 1000)
:canonical: ascendmoea.problems.sparse_pm.SparsePM.get_optimum

```{autodoc2-docstring} ascendmoea.problems.sparse_pm.SparsePM.get_optimum
```

````

````{py:method} get_pf()
:canonical: ascendmoea.problems.sparse_pm.SparsePM.get_pf

```{autodoc2-docstring} ascendmoea.problems.sparse_pm.SparsePM.get_pf
```

````

`````
