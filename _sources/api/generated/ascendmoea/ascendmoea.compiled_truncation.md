# {py:mod}`ascendmoea.compiled_truncation`

```{py:module} ascendmoea.compiled_truncation
```

```{autodoc2-docstring} ascendmoea.compiled_truncation
:allowtitles:
```

## Module Contents

### Functions

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`is_available <ascendmoea.compiled_truncation.is_available>`
  - ```{autodoc2-docstring} ascendmoea.compiled_truncation.is_available
    :summary:
    ```
* - {py:obj}`sequential_recurrence <ascendmoea.compiled_truncation.sequential_recurrence>`
  - ```{autodoc2-docstring} ascendmoea.compiled_truncation.sequential_recurrence
    :summary:
    ```
* - {py:obj}`warmup <ascendmoea.compiled_truncation.warmup>`
  - ```{autodoc2-docstring} ascendmoea.compiled_truncation.warmup
    :summary:
    ```
````

### Data

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`ACCELERATOR_VERSION <ascendmoea.compiled_truncation.ACCELERATOR_VERSION>`
  - ```{autodoc2-docstring} ascendmoea.compiled_truncation.ACCELERATOR_VERSION
    :summary:
    ```
````

### API

````{py:data} ACCELERATOR_VERSION
:canonical: ascendmoea.compiled_truncation.ACCELERATOR_VERSION
:value: >
   'numba_exact_v1'

```{autodoc2-docstring} ascendmoea.compiled_truncation.ACCELERATOR_VERSION
```

````

````{py:function} is_available() -> bool
:canonical: ascendmoea.compiled_truncation.is_available

```{autodoc2-docstring} ascendmoea.compiled_truncation.is_available
```
````

````{py:function} sequential_recurrence(sorted_distance: torch.Tensor, neighbor_order: torch.Tensor, delete_count: int) -> torch.Tensor | None
:canonical: ascendmoea.compiled_truncation.sequential_recurrence

```{autodoc2-docstring} ascendmoea.compiled_truncation.sequential_recurrence
```
````

````{py:function} warmup(dtype: torch.dtype) -> dict[str, object]
:canonical: ascendmoea.compiled_truncation.warmup

```{autodoc2-docstring} ascendmoea.compiled_truncation.warmup
```
````
