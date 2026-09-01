# {py:mod}`ascendmoea.operators.variation`

```{py:module} ascendmoea.operators.variation
```

```{autodoc2-docstring} ascendmoea.operators.variation
:allowtitles:
```

## Module Contents

### Functions

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`operator_de <ascendmoea.utils.operator_de>`
  - ```{autodoc2-docstring} ascendmoea.utils.operator_de
    :summary:
    ```
* - {py:obj}`operator_ga <ascendmoea.utils.operator_ga>`
  - ```{autodoc2-docstring} ascendmoea.utils.operator_ga
    :summary:
    ```
* - {py:obj}`operator_ga_encoded <ascendmoea.encoded_ga.operator_ga_encoded>`
  - ```{autodoc2-docstring} ascendmoea.encoded_ga.operator_ga_encoded
    :summary:
    ```
````

### Data

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`differential_evolution_operator <ascendmoea.operators.variation.differential_evolution_operator>`
  - ```{autodoc2-docstring} ascendmoea.operators.variation.differential_evolution_operator
    :summary:
    ```
* - {py:obj}`genetic_operator <ascendmoea.operators.variation.genetic_operator>`
  - ```{autodoc2-docstring} ascendmoea.operators.variation.genetic_operator
    :summary:
    ```
````

### API

````{py:data} differential_evolution_operator
:canonical: ascendmoea.operators.variation.differential_evolution_operator
:value: >
   None

```{autodoc2-docstring} ascendmoea.operators.variation.differential_evolution_operator
```

````

````{py:data} genetic_operator
:canonical: ascendmoea.operators.variation.genetic_operator
:value: >
   None

```{autodoc2-docstring} ascendmoea.operators.variation.genetic_operator
```

````

````{py:function} operator_de(problem, p1: torch.Tensor, p2: torch.Tensor, p3: torch.Tensor, cr=1.0, f=0.5, pro_m=1.0, dis_m=20.0)
:canonical: ascendmoea.utils.operator_de

```{autodoc2-docstring} ascendmoea.utils.operator_de
```
````

````{py:function} operator_ga(problem, parent_dec: torch.Tensor, pro_c=1.0, dis_c=20.0, pro_m=1.0, dis_m=20.0, half=False)
:canonical: ascendmoea.utils.operator_ga

```{autodoc2-docstring} ascendmoea.utils.operator_ga
```
````

````{py:function} operator_ga_encoded(problem, parent_dec: torch.Tensor, pro_c: float = 1.0, dis_c: float = 20.0, pro_m: float = 1.0, dis_m: float = 20.0, half: bool = False) -> torch.Tensor
:canonical: ascendmoea.encoded_ga.operator_ga_encoded

```{autodoc2-docstring} ascendmoea.encoded_ga.operator_ga_encoded
```
````
