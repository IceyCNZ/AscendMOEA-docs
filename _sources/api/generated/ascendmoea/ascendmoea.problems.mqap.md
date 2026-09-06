# {py:mod}`ascendmoea.problems.mqap`

```{py:module} ascendmoea.problems.mqap
```

```{autodoc2-docstring} ascendmoea.problems.mqap
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`MQAP <ascendmoea.problems.mqap.MQAP>`
  - ```{autodoc2-docstring} ascendmoea.problems.mqap.MQAP
    :summary:
    ```
````

### API

`````{py:class} MQAP(n=100, m=2, d=10, max_fe=10000)
:canonical: ascendmoea.problems.mqap.MQAP

Bases: {py:obj}`ascendmoea.core.Problem`

```{autodoc2-docstring} ascendmoea.problems.mqap.MQAP
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.problems.mqap.MQAP.__init__
```

````{py:attribute} name
:canonical: ascendmoea.problems.mqap.MQAP.name
:value: >
   'mQAP'

```{autodoc2-docstring} ascendmoea.problems.mqap.MQAP.name
```

````

````{py:method} setting() -> None
:canonical: ascendmoea.problems.mqap.MQAP.setting

```{autodoc2-docstring} ascendmoea.problems.mqap.MQAP.setting
```

````

````{py:method} cal_obj(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.mqap.MQAP.cal_obj

```{autodoc2-docstring} ascendmoea.problems.mqap.MQAP.cal_obj
```

````

````{py:method} get_optimum(n: int = 1000)
:canonical: ascendmoea.problems.mqap.MQAP.get_optimum

```{autodoc2-docstring} ascendmoea.problems.mqap.MQAP.get_optimum
```

````

````{py:method} get_pf()
:canonical: ascendmoea.problems.mqap.MQAP.get_pf

```{autodoc2-docstring} ascendmoea.problems.mqap.MQAP.get_pf
```

````

`````
