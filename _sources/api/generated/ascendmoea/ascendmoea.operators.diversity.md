# {py:mod}`ascendmoea.operators.diversity`

```{py:module} ascendmoea.operators.diversity
```

```{autodoc2-docstring} ascendmoea.operators.diversity
:allowtitles:
```

## Module Contents

### Functions

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`crowding_distance <ascendmoea.utils.crowding_distance>`
  - ```{autodoc2-docstring} ascendmoea.utils.crowding_distance
    :summary:
    ```
* - {py:obj}`pairwise_dist <ascendmoea.utils.pairwise_dist>`
  - ```{autodoc2-docstring} ascendmoea.utils.pairwise_dist
    :summary:
    ```
* - {py:obj}`reset_sequential_truncation_diagnostics <ascendmoea.utils.reset_sequential_truncation_diagnostics>`
  - ```{autodoc2-docstring} ascendmoea.utils.reset_sequential_truncation_diagnostics
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
* - {py:obj}`warmup_sequential_truncation_accelerator <ascendmoea.utils.warmup_sequential_truncation_accelerator>`
  - ```{autodoc2-docstring} ascendmoea.utils.warmup_sequential_truncation_accelerator
    :summary:
    ```
````

### API

````{py:function} crowding_distance(pop_obj: torch.Tensor, front_no: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.utils.crowding_distance

```{autodoc2-docstring} ascendmoea.utils.crowding_distance
```
````

````{py:function} pairwise_dist(a: torch.Tensor, b: torch.Tensor)
:canonical: ascendmoea.utils.pairwise_dist

```{autodoc2-docstring} ascendmoea.utils.pairwise_dist
```
````

````{py:function} reset_sequential_truncation_diagnostics() -> None
:canonical: ascendmoea.utils.reset_sequential_truncation_diagnostics

```{autodoc2-docstring} ascendmoea.utils.reset_sequential_truncation_diagnostics
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

````{py:function} warmup_sequential_truncation_accelerator(dtype: torch.dtype | None = None) -> dict[str, object]
:canonical: ascendmoea.utils.warmup_sequential_truncation_accelerator

```{autodoc2-docstring} ascendmoea.utils.warmup_sequential_truncation_accelerator
```
````
