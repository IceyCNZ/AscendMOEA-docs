# {py:mod}`ascendmoea.problems.mmo_base`

```{py:module} ascendmoea.problems.mmo_base
```

```{autodoc2-docstring} ascendmoea.problems.mmo_base
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`MMOProblem <ascendmoea.problems.mmo_base.MMOProblem>`
  - ```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMOProblem
    :summary:
    ```
* - {py:obj}`MMOProblemFactory <ascendmoea.problems.mmo_base.MMOProblemFactory>`
  - ```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMOProblemFactory
    :summary:
    ```
````

### Data

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`MMO_ID_TO_NAME <ascendmoea.problems.mmo_base.MMO_ID_TO_NAME>`
  - ```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMO_ID_TO_NAME
    :summary:
    ```
* - {py:obj}`MMO_NAME_TO_ID <ascendmoea.problems.mmo_base.MMO_NAME_TO_ID>`
  - ```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMO_NAME_TO_ID
    :summary:
    ```
* - {py:obj}`MMO_PROBLEM_NAMES <ascendmoea.problems.mmo_base.MMO_PROBLEM_NAMES>`
  - ```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMO_PROBLEM_NAMES
    :summary:
    ```
* - {py:obj}`MMO_CLASSES <ascendmoea.problems.mmo_base.MMO_CLASSES>`
  - ```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMO_CLASSES
    :summary:
    ```
````

### API

````{py:data} MMO_ID_TO_NAME
:canonical: ascendmoea.problems.mmo_base.MMO_ID_TO_NAME
:value: >
   None

```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMO_ID_TO_NAME
```

````

````{py:data} MMO_NAME_TO_ID
:canonical: ascendmoea.problems.mmo_base.MMO_NAME_TO_ID
:value: >
   None

```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMO_NAME_TO_ID
```

````

````{py:data} MMO_PROBLEM_NAMES
:canonical: ascendmoea.problems.mmo_base.MMO_PROBLEM_NAMES
:value: >
   'list(...)'

```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMO_PROBLEM_NAMES
```

````

`````{py:class} MMOProblem(problem_id: int | str, n=100, max_fe=10000)
:canonical: ascendmoea.problems.mmo_base.MMOProblem

Bases: {py:obj}`ascendmoea.core.Problem`

```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMOProblem
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMOProblem.__init__
```

````{py:method} setting()
:canonical: ascendmoea.problems.mmo_base.MMOProblem.setting

```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMOProblem.setting
```

````

````{py:method} cal_obj(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.mmo_base.MMOProblem.cal_obj

```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMOProblem.cal_obj
```

````

````{py:method} cal_con(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.problems.mmo_base.MMOProblem.cal_con

```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMOProblem.cal_con
```

````

````{py:method} get_optimum(n: int = 1000)
:canonical: ascendmoea.problems.mmo_base.MMOProblem.get_optimum

```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMOProblem.get_optimum
```

````

````{py:property} reference_point
:canonical: ascendmoea.problems.mmo_base.MMOProblem.reference_point

```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMOProblem.reference_point
```

````

````{py:method} get_pf()
:canonical: ascendmoea.problems.mmo_base.MMOProblem.get_pf

```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMOProblem.get_pf
```

````

````{py:property} ps
:canonical: ascendmoea.problems.mmo_base.MMOProblem.ps

```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMOProblem.ps
```

````

`````

````{py:class} MMOProblemFactory(problem_id: int)
:canonical: ascendmoea.problems.mmo_base.MMOProblemFactory

```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMOProblemFactory
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMOProblemFactory.__init__
```

````

````{py:data} MMO_CLASSES
:canonical: ascendmoea.problems.mmo_base.MMO_CLASSES
:value: >
   None

```{autodoc2-docstring} ascendmoea.problems.mmo_base.MMO_CLASSES
```

````
