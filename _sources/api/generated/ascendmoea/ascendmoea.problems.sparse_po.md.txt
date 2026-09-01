# {py:mod}`ascendmoea.problems.sparse_po`

```{py:module} ascendmoea.problems.sparse_po
```

```{autodoc2-docstring} ascendmoea.problems.sparse_po
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`SparsePO <ascendmoea.problems.sparse_po.SparsePO>`
  - ```{autodoc2-docstring} ascendmoea.problems.sparse_po.SparsePO
    :summary:
    ```
````

### API

`````{py:class} SparsePO(n=100, max_fe=10000)
:canonical: ascendmoea.problems.sparse_po.SparsePO

Bases: {py:obj}`ascendmoea.core.Problem`

```{autodoc2-docstring} ascendmoea.problems.sparse_po.SparsePO
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.problems.sparse_po.SparsePO.__init__
```

````{py:attribute} name
:canonical: ascendmoea.problems.sparse_po.SparsePO.name
:value: >
   'Sparse_PO'

```{autodoc2-docstring} ascendmoea.problems.sparse_po.SparsePO.name
```

````

````{py:method} setting() -> None
:canonical: ascendmoea.problems.sparse_po.SparsePO.setting

```{autodoc2-docstring} ascendmoea.problems.sparse_po.SparsePO.setting
```

````

````{py:method} cal_obj(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.sparse_po.SparsePO.cal_obj

```{autodoc2-docstring} ascendmoea.problems.sparse_po.SparsePO.cal_obj
```

````

````{py:method} get_optimum(n: int = 1000)
:canonical: ascendmoea.problems.sparse_po.SparsePO.get_optimum

```{autodoc2-docstring} ascendmoea.problems.sparse_po.SparsePO.get_optimum
```

````

````{py:method} get_pf()
:canonical: ascendmoea.problems.sparse_po.SparsePO.get_pf

```{autodoc2-docstring} ascendmoea.problems.sparse_po.SparsePO.get_pf
```

````

`````
