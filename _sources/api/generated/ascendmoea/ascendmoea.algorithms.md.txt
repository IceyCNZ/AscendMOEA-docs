# {py:mod}`ascendmoea.algorithms`

```{py:module} ascendmoea.algorithms
```

```{autodoc2-docstring} ascendmoea.algorithms
:allowtitles:
```

## Package Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`BiCo <ascendmoea.algorithms.bico.BiCo>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.bico.BiCo
    :summary:
    ```
* - {py:obj}`CCMO <ascendmoea.algorithms.ccmo.CCMO>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.ccmo.CCMO
    :summary:
    ```
* - {py:obj}`CMEGL <ascendmoea.algorithms.cmegl.CMEGL>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.cmegl.CMEGL
    :summary:
    ```
* - {py:obj}`CMMO <ascendmoea.algorithms.cmmo.CMMO>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.cmmo.CMMO
    :summary:
    ```
* - {py:obj}`CMOEACD <ascendmoea.algorithms.cmoeacd.CMOEACD>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.cmoeacd.CMOEACD
    :summary:
    ```
* - {py:obj}`CMOEAD <ascendmoea.algorithms.cmoead.CMOEAD>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.cmoead.CMOEAD
    :summary:
    ```
* - {py:obj}`CMOEAMS <ascendmoea.algorithms.cmoeams.CMOEAMS>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.cmoeams.CMOEAMS
    :summary:
    ```
* - {py:obj}`CoMMEA <ascendmoea.algorithms.commea.CoMMEA>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.commea.CoMMEA
    :summary:
    ```
* - {py:obj}`EMCMO <ascendmoea.algorithms.emcmo.EMCMO>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.emcmo.EMCMO
    :summary:
    ```
* - {py:obj}`HREA <ascendmoea.algorithms.hrea.HREA>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.hrea.HREA
    :summary:
    ```
* - {py:obj}`LMEA <ascendmoea.algorithms.lmea.LMEA>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.lmea.LMEA
    :summary:
    ```
* - {py:obj}`MOEAD <ascendmoea.algorithms.moead.MOEAD>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.moead.MOEAD
    :summary:
    ```
* - {py:obj}`MOEAPSL <ascendmoea.algorithms.moea_psl.MOEAPSL>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.moea_psl.MOEAPSL
    :summary:
    ```
* - {py:obj}`NSGAII <ascendmoea.algorithms.nsga2.NSGAII>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.nsga2.NSGAII
    :summary:
    ```
* - {py:obj}`SPEA2 <ascendmoea.algorithms.spea2.SPEA2>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.spea2.SPEA2
    :summary:
    ```
* - {py:obj}`SparseEA <ascendmoea.algorithms.sparse_ea.SparseEA>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.sparse_ea.SparseEA
    :summary:
    ```
* - {py:obj}`SparseEA2 <ascendmoea.algorithms.sparse_ea2.SparseEA2>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.sparse_ea2.SparseEA2
    :summary:
    ```
* - {py:obj}`TSSparseEA <ascendmoea.algorithms.ts_sparse_ea.TSSparseEA>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.ts_sparse_ea.TSSparseEA
    :summary:
    ```
````

### Functions

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`create_algorithm <ascendmoea.algorithms.create_algorithm>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.create_algorithm
    :summary:
    ```
* - {py:obj}`get_algorithm <ascendmoea.algorithms.get_algorithm>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.get_algorithm
    :summary:
    ```
* - {py:obj}`list_algorithms <ascendmoea.algorithms.list_algorithms>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.list_algorithms
    :summary:
    ```
````

### Data

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`ALGORITHMS <ascendmoea.algorithms.ALGORITHMS>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.ALGORITHMS
    :summary:
    ```
* - {py:obj}`register_algorithm <ascendmoea.algorithms.register_algorithm>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.register_algorithm
    :summary:
    ```
````

### API

````{py:data} ALGORITHMS
:canonical: ascendmoea.algorithms.ALGORITHMS
:value: >
   'ComponentRegistry(...)'

```{autodoc2-docstring} ascendmoea.algorithms.ALGORITHMS
```

````

`````{py:class} BiCo(save: int = -10)
:canonical: ascendmoea.algorithms.bico.BiCo

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.bico.BiCo
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.bico.BiCo.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.bico.BiCo.name
:value: >
   'BiCo'

```{autodoc2-docstring} ascendmoea.algorithms.bico.BiCo.name
```

````

`````

`````{py:class} CCMO(op_type: int = 1, **kwargs)
:canonical: ascendmoea.algorithms.ccmo.CCMO

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.ccmo.CCMO
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.ccmo.CCMO.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.ccmo.CCMO.name
:value: >
   'CCMO'

```{autodoc2-docstring} ascendmoea.algorithms.ccmo.CCMO.name
```

````

`````

`````{py:class} CMEGL(save: int = -10)
:canonical: ascendmoea.algorithms.cmegl.CMEGL

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.cmegl.CMEGL
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.cmegl.CMEGL.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.cmegl.CMEGL.name
:value: >
   'CMEGL'

```{autodoc2-docstring} ascendmoea.algorithms.cmegl.CMEGL.name
```

````

`````

`````{py:class} CMMO(eta: float = 0.2, tao: float = 0.1, theta: float = 0.1, **kwargs)
:canonical: ascendmoea.algorithms.cmmo.CMMO

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.cmmo.CMMO
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.cmmo.CMMO.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.cmmo.CMMO.name
:value: >
   'CMMO'

```{autodoc2-docstring} ascendmoea.algorithms.cmmo.CMMO.name
```

````

`````

`````{py:class} CMOEACD(e1: int = 1, e2: int = 1, **kwargs)
:canonical: ascendmoea.algorithms.cmoeacd.CMOEACD

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.cmoeacd.CMOEACD
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.cmoeacd.CMOEACD.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.cmoeacd.CMOEACD.name
:value: >
   'CMOEACD'

```{autodoc2-docstring} ascendmoea.algorithms.cmoeacd.CMOEACD.name
```

````

`````

`````{py:class} CMOEAD(save: int = -10)
:canonical: ascendmoea.algorithms.cmoead.CMOEAD

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.cmoead.CMOEAD
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.cmoead.CMOEAD.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.cmoead.CMOEAD.name
:value: >
   'CMOEAD'

```{autodoc2-docstring} ascendmoea.algorithms.cmoead.CMOEAD.name
```

````

````{py:attribute} history_requires_snapshot
:canonical: ascendmoea.algorithms.cmoead.CMOEAD.history_requires_snapshot
:value: >
   True

```{autodoc2-docstring} ascendmoea.algorithms.cmoead.CMOEAD.history_requires_snapshot
```

````

`````

`````{py:class} CMOEAMS(op_type: int = 1, lam: float = 0.5, **kwargs)
:canonical: ascendmoea.algorithms.cmoeams.CMOEAMS

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.cmoeams.CMOEAMS
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.cmoeams.CMOEAMS.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.cmoeams.CMOEAMS.name
:value: >
   'CMOEAMS'

```{autodoc2-docstring} ascendmoea.algorithms.cmoeams.CMOEAMS.name
```

````

`````

`````{py:class} CoMMEA(eps: float = 0.2, **kwargs)
:canonical: ascendmoea.algorithms.commea.CoMMEA

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.commea.CoMMEA
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.commea.CoMMEA.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.commea.CoMMEA.name
:value: >
   'CoMMEA'

```{autodoc2-docstring} ascendmoea.algorithms.commea.CoMMEA.name
```

````

`````

`````{py:class} EMCMO(save: int = -10)
:canonical: ascendmoea.algorithms.emcmo.EMCMO

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.emcmo.EMCMO
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.emcmo.EMCMO.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.emcmo.EMCMO.name
:value: >
   'EMCMO'

```{autodoc2-docstring} ascendmoea.algorithms.emcmo.EMCMO.name
```

````

`````

`````{py:class} HREA(eps: float = 0.3, p: float = 0.5, **kwargs)
:canonical: ascendmoea.algorithms.hrea.HREA

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.hrea.HREA
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.hrea.HREA.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.hrea.HREA.name
:value: >
   'HREA'

```{autodoc2-docstring} ascendmoea.algorithms.hrea.HREA.name
```

````

`````

`````{py:class} LMEA(save: int = -10, n_sel: int = 5, n_per: int = 50, n_cor: int = 5, operator_type: int = 1)
:canonical: ascendmoea.algorithms.lmea.LMEA

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.lmea.LMEA
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.lmea.LMEA.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.lmea.LMEA.name
:value: >
   'LMEA'

```{autodoc2-docstring} ascendmoea.algorithms.lmea.LMEA.name
```

````

`````

`````{py:class} MOEAD(agg_type: int = 1, **kwargs)
:canonical: ascendmoea.algorithms.moead.MOEAD

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.moead.MOEAD
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.moead.MOEAD.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.moead.MOEAD.name
:value: >
   'MOEAD'

```{autodoc2-docstring} ascendmoea.algorithms.moead.MOEAD.name
```

````

````{py:attribute} history_requires_snapshot
:canonical: ascendmoea.algorithms.moead.MOEAD.history_requires_snapshot
:value: >
   True

```{autodoc2-docstring} ascendmoea.algorithms.moead.MOEAD.history_requires_snapshot
```

````

`````

`````{py:class} MOEAPSL(save: int = -10)
:canonical: ascendmoea.algorithms.moea_psl.MOEAPSL

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.moea_psl.MOEAPSL
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.moea_psl.MOEAPSL.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.moea_psl.MOEAPSL.name
:value: >
   'MOEA-PSL'

```{autodoc2-docstring} ascendmoea.algorithms.moea_psl.MOEAPSL.name
```

````

`````

`````{py:class} NSGAII(save: int = -10)
:canonical: ascendmoea.algorithms.nsga2.NSGAII

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.nsga2.NSGAII
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.nsga2.NSGAII.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.nsga2.NSGAII.name
:value: >
   'NSGAII'

```{autodoc2-docstring} ascendmoea.algorithms.nsga2.NSGAII.name
```

````

`````

`````{py:class} SPEA2(save: int = -10)
:canonical: ascendmoea.algorithms.spea2.SPEA2

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.spea2.SPEA2
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.spea2.SPEA2.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.spea2.SPEA2.name
:value: >
   'SPEA2'

```{autodoc2-docstring} ascendmoea.algorithms.spea2.SPEA2.name
```

````

`````

`````{py:class} SparseEA(save: int = -10)
:canonical: ascendmoea.algorithms.sparse_ea.SparseEA

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.sparse_ea.SparseEA
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.sparse_ea.SparseEA.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.sparse_ea.SparseEA.name
:value: >
   'SparseEA'

```{autodoc2-docstring} ascendmoea.algorithms.sparse_ea.SparseEA.name
```

````

`````

`````{py:class} SparseEA2(save: int = -10)
:canonical: ascendmoea.algorithms.sparse_ea2.SparseEA2

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.sparse_ea2.SparseEA2
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.sparse_ea2.SparseEA2.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.sparse_ea2.SparseEA2.name
:value: >
   'SparseEA2'

```{autodoc2-docstring} ascendmoea.algorithms.sparse_ea2.SparseEA2.name
```

````

````{py:attribute} number_of_groups
:canonical: ascendmoea.algorithms.sparse_ea2.SparseEA2.number_of_groups
:value: >
   4

```{autodoc2-docstring} ascendmoea.algorithms.sparse_ea2.SparseEA2.number_of_groups
```

````

`````

`````{py:class} TSSparseEA(save: int = -10, r_eva: float = 0.1, n_group: int = 50)
:canonical: ascendmoea.algorithms.ts_sparse_ea.TSSparseEA

Bases: {py:obj}`ascendmoea.core.Algorithm`

```{autodoc2-docstring} ascendmoea.algorithms.ts_sparse_ea.TSSparseEA
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.algorithms.ts_sparse_ea.TSSparseEA.__init__
```

````{py:attribute} name
:canonical: ascendmoea.algorithms.ts_sparse_ea.TSSparseEA.name
:value: >
   'TS-SparseEA'

```{autodoc2-docstring} ascendmoea.algorithms.ts_sparse_ea.TSSparseEA.name
```

````

`````

````{py:function} create_algorithm(name: str, /, **kwargs)
:canonical: ascendmoea.algorithms.create_algorithm

```{autodoc2-docstring} ascendmoea.algorithms.create_algorithm
```
````

````{py:function} get_algorithm(name: str)
:canonical: ascendmoea.algorithms.get_algorithm

```{autodoc2-docstring} ascendmoea.algorithms.get_algorithm
```
````

````{py:function} list_algorithms() -> tuple[str, ...]
:canonical: ascendmoea.algorithms.list_algorithms

```{autodoc2-docstring} ascendmoea.algorithms.list_algorithms
```
````

````{py:data} register_algorithm
:canonical: ascendmoea.algorithms.register_algorithm
:value: >
   None

```{autodoc2-docstring} ascendmoea.algorithms.register_algorithm
```

````
