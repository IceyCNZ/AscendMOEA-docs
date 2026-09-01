# {py:mod}`ascendmoea.problems.sparse_sr`

```{py:module} ascendmoea.problems.sparse_sr
```

```{autodoc2-docstring} ascendmoea.problems.sparse_sr
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`SparseSR <ascendmoea.problems.sparse_sr.SparseSR>`
  - ```{autodoc2-docstring} ascendmoea.problems.sparse_sr.SparseSR
    :summary:
    ```
````

### API

`````{py:class} SparseSR(n=100, max_fe=10000)
:canonical: ascendmoea.problems.sparse_sr.SparseSR

Bases: {py:obj}`ascendmoea.core.Problem`

```{autodoc2-docstring} ascendmoea.problems.sparse_sr.SparseSR
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.problems.sparse_sr.SparseSR.__init__
```

````{py:attribute} name
:canonical: ascendmoea.problems.sparse_sr.SparseSR.name
:value: >
   'Sparse_SR'

```{autodoc2-docstring} ascendmoea.problems.sparse_sr.SparseSR.name
```

````

````{py:method} setting() -> None
:canonical: ascendmoea.problems.sparse_sr.SparseSR.setting

```{autodoc2-docstring} ascendmoea.problems.sparse_sr.SparseSR.setting
```

````

````{py:method} initialization(n: int | None = None) -> ascendmoea.core.Population
:canonical: ascendmoea.problems.sparse_sr.SparseSR.initialization

```{autodoc2-docstring} ascendmoea.problems.sparse_sr.SparseSR.initialization
```

````

````{py:method} cal_obj(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.sparse_sr.SparseSR.cal_obj

```{autodoc2-docstring} ascendmoea.problems.sparse_sr.SparseSR.cal_obj
```

````

````{py:method} get_optimum(n: int = 1000)
:canonical: ascendmoea.problems.sparse_sr.SparseSR.get_optimum

```{autodoc2-docstring} ascendmoea.problems.sparse_sr.SparseSR.get_optimum
```

````

````{py:method} get_pf()
:canonical: ascendmoea.problems.sparse_sr.SparseSR.get_pf

```{autodoc2-docstring} ascendmoea.problems.sparse_sr.SparseSR.get_pf
```

````

`````
