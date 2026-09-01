# {py:mod}`ascendmoea.operators.selection`

```{py:module} ascendmoea.operators.selection
```

```{autodoc2-docstring} ascendmoea.operators.selection
:allowtitles:
```

## Module Contents

### Functions

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`domination_count <ascendmoea.utils.domination_count>`
  - ```{autodoc2-docstring} ascendmoea.utils.domination_count
    :summary:
    ```
* - {py:obj}`domination_matrix <ascendmoea.utils.domination_matrix>`
  - ```{autodoc2-docstring} ascendmoea.utils.domination_matrix
    :summary:
    ```
* - {py:obj}`nd_sort <ascendmoea.utils.nd_sort>`
  - ```{autodoc2-docstring} ascendmoea.utils.nd_sort
    :summary:
    ```
* - {py:obj}`roulette_selection <ascendmoea.utils.roulette_selection>`
  - ```{autodoc2-docstring} ascendmoea.utils.roulette_selection
    :summary:
    ```
* - {py:obj}`tournament_selection <ascendmoea.utils.tournament_selection>`
  - ```{autodoc2-docstring} ascendmoea.utils.tournament_selection
    :summary:
    ```
````

### API

````{py:function} domination_count(pop_obj: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.utils.domination_count

```{autodoc2-docstring} ascendmoea.utils.domination_count
```
````

````{py:function} domination_matrix(pop_obj: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.utils.domination_matrix

```{autodoc2-docstring} ascendmoea.utils.domination_matrix
```
````

````{py:function} nd_sort(pop_obj: torch.Tensor, pop_con: torch.Tensor | None = None, n_sort: int | float = float('inf'))
:canonical: ascendmoea.utils.nd_sort

```{autodoc2-docstring} ascendmoea.utils.nd_sort
```
````

````{py:function} roulette_selection(n: int, fitness: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.utils.roulette_selection

```{autodoc2-docstring} ascendmoea.utils.roulette_selection
```
````

````{py:function} tournament_selection(k: int, n: int, *fitness: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.utils.tournament_selection

```{autodoc2-docstring} ascendmoea.utils.tournament_selection
```
````
