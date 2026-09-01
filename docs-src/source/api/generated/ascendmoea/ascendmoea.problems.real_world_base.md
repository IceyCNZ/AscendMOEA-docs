# {py:mod}`ascendmoea.problems.real_world_base`

```{py:module} ascendmoea.problems.real_world_base
```

```{autodoc2-docstring} ascendmoea.problems.real_world_base
:allowtitles:
```

## Module Contents

### Functions

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`load_mat <ascendmoea.problems.real_world_base.load_mat>`
  - ```{autodoc2-docstring} ascendmoea.problems.real_world_base.load_mat
    :summary:
    ```
* - {py:obj}`field <ascendmoea.problems.real_world_base.field>`
  - ```{autodoc2-docstring} ascendmoea.problems.real_world_base.field
    :summary:
    ```
* - {py:obj}`cell_matrices <ascendmoea.problems.real_world_base.cell_matrices>`
  - ```{autodoc2-docstring} ascendmoea.problems.real_world_base.cell_matrices
    :summary:
    ```
* - {py:obj}`tensor <ascendmoea.problems.real_world_base.tensor>`
  - ```{autodoc2-docstring} ascendmoea.problems.real_world_base.tensor
    :summary:
    ```
* - {py:obj}`repair_permutation <ascendmoea.problems.real_world_base.repair_permutation>`
  - ```{autodoc2-docstring} ascendmoea.problems.real_world_base.repair_permutation
    :summary:
    ```
````

### API

````{py:function} load_mat(filename: str) -> dict
:canonical: ascendmoea.problems.real_world_base.load_mat

```{autodoc2-docstring} ascendmoea.problems.real_world_base.load_mat
```
````

````{py:function} field(value, name: str)
:canonical: ascendmoea.problems.real_world_base.field

```{autodoc2-docstring} ascendmoea.problems.real_world_base.field
```
````

````{py:function} cell_matrices(value) -> list[numpy.ndarray]
:canonical: ascendmoea.problems.real_world_base.cell_matrices

```{autodoc2-docstring} ascendmoea.problems.real_world_base.cell_matrices
```
````

````{py:function} tensor(array, like: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.real_world_base.tensor

```{autodoc2-docstring} ascendmoea.problems.real_world_base.tensor
```
````

````{py:function} repair_permutation(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.real_world_base.repair_permutation

```{autodoc2-docstring} ascendmoea.problems.real_world_base.repair_permutation
```
````
