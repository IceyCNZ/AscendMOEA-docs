# {py:mod}`ascendmoea.algorithms.spea_common`

```{py:module} ascendmoea.algorithms.spea_common
```

```{autodoc2-docstring} ascendmoea.algorithms.spea_common
:allowtitles:
```

## Module Contents

### Functions

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`subset_population <ascendmoea.algorithms.spea_common.subset_population>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.spea_common.subset_population
    :summary:
    ```
* - {py:obj}`cal_fitness <ascendmoea.algorithms.spea_common.cal_fitness>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.spea_common.cal_fitness
    :summary:
    ```
* - {py:obj}`truncation <ascendmoea.algorithms.spea_common.truncation>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.spea_common.truncation
    :summary:
    ```
* - {py:obj}`environmental_selection <ascendmoea.algorithms.spea_common.environmental_selection>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.spea_common.environmental_selection
    :summary:
    ```
````

### API

````{py:function} subset_population(population: ascendmoea.core.Population, index: torch.Tensor) -> ascendmoea.core.Population
:canonical: ascendmoea.algorithms.spea_common.subset_population

```{autodoc2-docstring} ascendmoea.algorithms.spea_common.subset_population
```
````

````{py:function} cal_fitness(pop_obj: torch.Tensor, pop_con: torch.Tensor | None = None) -> torch.Tensor
:canonical: ascendmoea.algorithms.spea_common.cal_fitness

```{autodoc2-docstring} ascendmoea.algorithms.spea_common.cal_fitness
```
````

````{py:function} truncation(pop_obj: torch.Tensor, delete_count: int) -> torch.Tensor
:canonical: ascendmoea.algorithms.spea_common.truncation

```{autodoc2-docstring} ascendmoea.algorithms.spea_common.truncation
```
````

````{py:function} environmental_selection(population: ascendmoea.core.Population, n: int, *, use_constraints: bool, sort_output: bool) -> tuple[ascendmoea.core.Population, torch.Tensor]
:canonical: ascendmoea.algorithms.spea_common.environmental_selection

```{autodoc2-docstring} ascendmoea.algorithms.spea_common.environmental_selection
```
````
