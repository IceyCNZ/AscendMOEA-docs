# {py:mod}`ascendmoea.algorithms.sparse_common`

```{py:module} ascendmoea.algorithms.sparse_common
```

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`SparsePopulation <ascendmoea.algorithms.sparse_common.SparsePopulation>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.SparsePopulation
    :summary:
    ```
````

### Functions

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`subset_population <ascendmoea.algorithms.sparse_common.subset_population>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.subset_population
    :summary:
    ```
* - {py:obj}`lexicographic_order <ascendmoea.algorithms.sparse_common.lexicographic_order>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.lexicographic_order
    :summary:
    ```
* - {py:obj}`unique_row_indices <ascendmoea.algorithms.sparse_common.unique_row_indices>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.unique_row_indices
    :summary:
    ```
* - {py:obj}`environmental_selection <ascendmoea.algorithms.sparse_common.environmental_selection>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.environmental_selection
    :summary:
    ```
* - {py:obj}`variable_fitness <ascendmoea.algorithms.sparse_common.variable_fitness>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.variable_fitness
    :summary:
    ```
* - {py:obj}`random_decisions <ascendmoea.algorithms.sparse_common.random_decisions>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.random_decisions
    :summary:
    ```
* - {py:obj}`initial_mask <ascendmoea.algorithms.sparse_common.initial_mask>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.initial_mask
    :summary:
    ```
* - {py:obj}`sparse_mask_crossover <ascendmoea.algorithms.sparse_common.sparse_mask_crossover>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.sparse_mask_crossover
    :summary:
    ```
* - {py:obj}`sparse_mask_mutation <ascendmoea.algorithms.sparse_common.sparse_mask_mutation>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.sparse_mask_mutation
    :summary:
    ```
* - {py:obj}`sbx_first_child <ascendmoea.algorithms.sparse_common.sbx_first_child>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.sbx_first_child
    :summary:
    ```
* - {py:obj}`polynomial_mutation_at_sites <ascendmoea.algorithms.sparse_common.polynomial_mutation_at_sites>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.polynomial_mutation_at_sites
    :summary:
    ```
* - {py:obj}`convergence <ascendmoea.algorithms.sparse_common.convergence>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.convergence
    :summary:
    ```
````

### API

`````{py:class} SparsePopulation
:canonical: ascendmoea.algorithms.sparse_common.SparsePopulation

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.SparsePopulation
```

````{py:attribute} population
:canonical: ascendmoea.algorithms.sparse_common.SparsePopulation.population
:type: ascendmoea.core.Population
:value: >
   None

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.SparsePopulation.population
```

````

````{py:attribute} dec
:canonical: ascendmoea.algorithms.sparse_common.SparsePopulation.dec
:type: torch.Tensor
:value: >
   None

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.SparsePopulation.dec
```

````

````{py:attribute} mask
:canonical: ascendmoea.algorithms.sparse_common.SparsePopulation.mask
:type: torch.Tensor
:value: >
   None

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.SparsePopulation.mask
```

````

````{py:attribute} front_no
:canonical: ascendmoea.algorithms.sparse_common.SparsePopulation.front_no
:type: torch.Tensor
:value: >
   None

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.SparsePopulation.front_no
```

````

````{py:attribute} crowd_dis
:canonical: ascendmoea.algorithms.sparse_common.SparsePopulation.crowd_dis
:type: torch.Tensor
:value: >
   None

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.SparsePopulation.crowd_dis
```

````

`````

````{py:function} subset_population(population: ascendmoea.core.Population, index: torch.Tensor) -> ascendmoea.core.Population
:canonical: ascendmoea.algorithms.sparse_common.subset_population

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.subset_population
```
````

````{py:function} lexicographic_order(rows: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.algorithms.sparse_common.lexicographic_order

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.lexicographic_order
```
````

````{py:function} unique_row_indices(rows: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.algorithms.sparse_common.unique_row_indices

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.unique_row_indices
```
````

````{py:function} environmental_selection(population: ascendmoea.core.Population, dec: torch.Tensor, mask: torch.Tensor, n: int, *, use_decision_uniqueness: bool = False) -> ascendmoea.algorithms.sparse_common.SparsePopulation
:canonical: ascendmoea.algorithms.sparse_common.environmental_selection

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.environmental_selection
```
````

````{py:function} variable_fitness(problem: ascendmoea.core.Problem, *, keep_all_samples: bool) -> tuple[torch.Tensor, ascendmoea.core.Population, torch.Tensor, torch.Tensor]
:canonical: ascendmoea.algorithms.sparse_common.variable_fitness

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.variable_fitness
```
````

````{py:function} random_decisions(problem: ascendmoea.core.Problem, n: int) -> torch.Tensor
:canonical: ascendmoea.algorithms.sparse_common.random_decisions

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.random_decisions
```
````

````{py:function} initial_mask(n: int, d: int, fitness: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.algorithms.sparse_common.initial_mask

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.initial_mask
```
````

````{py:function} sparse_mask_crossover(parent1: torch.Tensor, parent2: torch.Tensor, fitness: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.algorithms.sparse_common.sparse_mask_crossover

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.sparse_mask_crossover
```
````

````{py:function} sparse_mask_mutation(mask: torch.Tensor, fitness: torch.Tensor, allowed: torch.Tensor | None = None) -> torch.Tensor
:canonical: ascendmoea.algorithms.sparse_common.sparse_mask_mutation

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.sparse_mask_mutation
```
````

````{py:function} sbx_first_child(parent1: torch.Tensor, parent2: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.algorithms.sparse_common.sbx_first_child

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.sbx_first_child
```
````

````{py:function} polynomial_mutation_at_sites(offspring: torch.Tensor, lower: torch.Tensor, upper: torch.Tensor, sites: torch.Tensor, mu: torch.Tensor | None = None) -> torch.Tensor
:canonical: ascendmoea.algorithms.sparse_common.polynomial_mutation_at_sites

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.polynomial_mutation_at_sites
```
````

````{py:function} convergence(pop_obj: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.algorithms.sparse_common.convergence

```{autodoc2-docstring} ascendmoea.algorithms.sparse_common.convergence
```
````
