# {py:mod}`ascendmoea.problems.sparse_kp`

```{py:module} ascendmoea.problems.sparse_kp
```

```{autodoc2-docstring} ascendmoea.problems.sparse_kp
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`SparseKP <ascendmoea.problems.sparse_kp.SparseKP>`
  - ```{autodoc2-docstring} ascendmoea.problems.sparse_kp.SparseKP
    :summary:
    ```
````

### API

`````{py:class} SparseKP(n=100, m=2, d=250, max_fe=10000)
:canonical: ascendmoea.problems.sparse_kp.SparseKP

Bases: {py:obj}`ascendmoea.core.Problem`

```{autodoc2-docstring} ascendmoea.problems.sparse_kp.SparseKP
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.problems.sparse_kp.SparseKP.__init__
```

````{py:attribute} name
:canonical: ascendmoea.problems.sparse_kp.SparseKP.name
:value: >
   'Sparse_KP'

```{autodoc2-docstring} ascendmoea.problems.sparse_kp.SparseKP.name
```

````

````{py:method} setting() -> None
:canonical: ascendmoea.problems.sparse_kp.SparseKP.setting

```{autodoc2-docstring} ascendmoea.problems.sparse_kp.SparseKP.setting
```

````

````{py:method} cal_obj(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.sparse_kp.SparseKP.cal_obj

```{autodoc2-docstring} ascendmoea.problems.sparse_kp.SparseKP.cal_obj
```

````

````{py:method} get_optimum(n: int = 1000)
:canonical: ascendmoea.problems.sparse_kp.SparseKP.get_optimum

```{autodoc2-docstring} ascendmoea.problems.sparse_kp.SparseKP.get_optimum
```

````

````{py:method} get_pf()
:canonical: ascendmoea.problems.sparse_kp.SparseKP.get_pf

```{autodoc2-docstring} ascendmoea.problems.sparse_kp.SparseKP.get_pf
```

````

`````
