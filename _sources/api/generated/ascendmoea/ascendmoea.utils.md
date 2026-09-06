# {py:mod}`ascendmoea.utils`

```{py:module} ascendmoea.utils
```

```{autodoc2-docstring} ascendmoea.utils
:allowtitles:
```

## Module Contents

### Functions

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`domination_matrix <ascendmoea.utils.domination_matrix>`
  - ```{autodoc2-docstring} ascendmoea.utils.domination_matrix
    :summary:
    ```
* - {py:obj}`domination_count <ascendmoea.utils.domination_count>`
  - ```{autodoc2-docstring} ascendmoea.utils.domination_count
    :summary:
    ```
* - {py:obj}`nd_sort <ascendmoea.utils.nd_sort>`
  - ```{autodoc2-docstring} ascendmoea.utils.nd_sort
    :summary:
    ```
* - {py:obj}`tournament_selection <ascendmoea.utils.tournament_selection>`
  - ```{autodoc2-docstring} ascendmoea.utils.tournament_selection
    :summary:
    ```
* - {py:obj}`crowding_distance <ascendmoea.utils.crowding_distance>`
  - ```{autodoc2-docstring} ascendmoea.utils.crowding_distance
    :summary:
    ```
* - {py:obj}`operator_ga <ascendmoea.utils.operator_ga>`
  - ```{autodoc2-docstring} ascendmoea.utils.operator_ga
    :summary:
    ```
* - {py:obj}`operator_de <ascendmoea.utils.operator_de>`
  - ```{autodoc2-docstring} ascendmoea.utils.operator_de
    :summary:
    ```
* - {py:obj}`roulette_selection <ascendmoea.utils.roulette_selection>`
  - ```{autodoc2-docstring} ascendmoea.utils.roulette_selection
    :summary:
    ```
* - {py:obj}`uniform_point <ascendmoea.utils.uniform_point>`
  - ```{autodoc2-docstring} ascendmoea.utils.uniform_point
    :summary:
    ```
* - {py:obj}`merge_pop <ascendmoea.utils.merge_pop>`
  - ```{autodoc2-docstring} ascendmoea.utils.merge_pop
    :summary:
    ```
* - {py:obj}`pairwise_dist <ascendmoea.utils.pairwise_dist>`
  - ```{autodoc2-docstring} ascendmoea.utils.pairwise_dist
    :summary:
    ```
* - {py:obj}`sequential_euclidean_truncation <ascendmoea.utils.sequential_euclidean_truncation>`
  - ```{autodoc2-docstring} ascendmoea.utils.sequential_euclidean_truncation
    :summary:
    ```
* - {py:obj}`sequential_distance_truncation <ascendmoea.utils.sequential_distance_truncation>`
  - ```{autodoc2-docstring} ascendmoea.utils.sequential_distance_truncation
    :summary:
    ```
* - {py:obj}`sequential_truncation_diagnostics <ascendmoea.utils.sequential_truncation_diagnostics>`
  - ```{autodoc2-docstring} ascendmoea.utils.sequential_truncation_diagnostics
    :summary:
    ```
* - {py:obj}`reset_sequential_truncation_diagnostics <ascendmoea.utils.reset_sequential_truncation_diagnostics>`
  - ```{autodoc2-docstring} ascendmoea.utils.reset_sequential_truncation_diagnostics
    :summary:
    ```
* - {py:obj}`warmup_sequential_truncation_accelerator <ascendmoea.utils.warmup_sequential_truncation_accelerator>`
  - ```{autodoc2-docstring} ascendmoea.utils.warmup_sequential_truncation_accelerator
    :summary:
    ```
````

### API

````{py:function} domination_matrix(pop_obj: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.utils.domination_matrix

```{autodoc2-docstring} ascendmoea.utils.domination_matrix
```
````

````{py:function} domination_count(pop_obj: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.utils.domination_count

```{autodoc2-docstring} ascendmoea.utils.domination_count
```
````

````{py:function} nd_sort(pop_obj: torch.Tensor, pop_con: torch.Tensor | None = None, n_sort: int | float = float('inf'))
:canonical: ascendmoea.utils.nd_sort

```{autodoc2-docstring} ascendmoea.utils.nd_sort
```
````

````{py:function} tournament_selection(k: int, n: int, *fitness: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.utils.tournament_selection

```{autodoc2-docstring} ascendmoea.utils.tournament_selection
```
````

````{py:function} crowding_distance(pop_obj: torch.Tensor, front_no: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.utils.crowding_distance

```{autodoc2-docstring} ascendmoea.utils.crowding_distance
```
````

````{py:function} operator_ga(problem, parent_dec: torch.Tensor, pro_c=1.0, dis_c=20.0, pro_m=1.0, dis_m=20.0, half=False)
:canonical: ascendmoea.utils.operator_ga

```{autodoc2-docstring} ascendmoea.utils.operator_ga
```
````

````{py:function} operator_de(problem, p1: torch.Tensor, p2: torch.Tensor, p3: torch.Tensor, cr=1.0, f=0.5, pro_m=1.0, dis_m=20.0)
:canonical: ascendmoea.utils.operator_de

```{autodoc2-docstring} ascendmoea.utils.operator_de
```
````

````{py:function} roulette_selection(n: int, fitness: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.utils.roulette_selection

```{autodoc2-docstring} ascendmoea.utils.roulette_selection
```
````

````{py:function} uniform_point(n: int, m: int, device: torch.device = None) -> tuple[torch.Tensor, int]
:canonical: ascendmoea.utils.uniform_point

```{autodoc2-docstring} ascendmoea.utils.uniform_point
```
````

````{py:function} merge_pop(*pops: ascendmoea.core.Population) -> ascendmoea.core.Population
:canonical: ascendmoea.utils.merge_pop

```{autodoc2-docstring} ascendmoea.utils.merge_pop
```
````

````{py:function} pairwise_dist(a: torch.Tensor, b: torch.Tensor)
:canonical: ascendmoea.utils.pairwise_dist

```{autodoc2-docstring} ascendmoea.utils.pairwise_dist
```
````

````{py:function} sequential_euclidean_truncation(*spaces: torch.Tensor, delete_count: int) -> torch.Tensor
:canonical: ascendmoea.utils.sequential_euclidean_truncation

```{autodoc2-docstring} ascendmoea.utils.sequential_euclidean_truncation
```
````

````{py:function} sequential_distance_truncation(distance: torch.Tensor, delete_count: int) -> torch.Tensor
:canonical: ascendmoea.utils.sequential_distance_truncation

```{autodoc2-docstring} ascendmoea.utils.sequential_distance_truncation
```
````

````{py:function} sequential_truncation_diagnostics() -> dict[str, object]
:canonical: ascendmoea.utils.sequential_truncation_diagnostics

```{autodoc2-docstring} ascendmoea.utils.sequential_truncation_diagnostics
```
````

````{py:function} reset_sequential_truncation_diagnostics() -> None
:canonical: ascendmoea.utils.reset_sequential_truncation_diagnostics

```{autodoc2-docstring} ascendmoea.utils.reset_sequential_truncation_diagnostics
```
````

````{py:function} warmup_sequential_truncation_accelerator(dtype: torch.dtype | None = None) -> dict[str, object]
:canonical: ascendmoea.utils.warmup_sequential_truncation_accelerator

```{autodoc2-docstring} ascendmoea.utils.warmup_sequential_truncation_accelerator
```
````
