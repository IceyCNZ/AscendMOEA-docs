# {py:mod}`ascendmoea.core`

```{py:module} ascendmoea.core
```

```{autodoc2-docstring} ascendmoea.core
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`Population <ascendmoea.core.Population>`
  - ```{autodoc2-docstring} ascendmoea.core.Population
    :summary:
    ```
* - {py:obj}`Problem <ascendmoea.core.Problem>`
  - ```{autodoc2-docstring} ascendmoea.core.Problem
    :summary:
    ```
* - {py:obj}`Algorithm <ascendmoea.core.Algorithm>`
  - ```{autodoc2-docstring} ascendmoea.core.Algorithm
    :summary:
    ```
````

### Functions

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`to_tensor <ascendmoea.core.to_tensor>`
  - ```{autodoc2-docstring} ascendmoea.core.to_tensor
    :summary:
    ```
* - {py:obj}`to_numpy <ascendmoea.core.to_numpy>`
  - ```{autodoc2-docstring} ascendmoea.core.to_numpy
    :summary:
    ```
* - {py:obj}`round_half_away_from_zero <ascendmoea.core.round_half_away_from_zero>`
  - ```{autodoc2-docstring} ascendmoea.core.round_half_away_from_zero
    :summary:
    ```
* - {py:obj}`non_dominated_mask <ascendmoea.core.non_dominated_mask>`
  - ```{autodoc2-docstring} ascendmoea.core.non_dominated_mask
    :summary:
    ```
````

### API

````{py:function} to_tensor(x, device: torch.device | None = None, dtype: torch.dtype | None = None) -> torch.Tensor
:canonical: ascendmoea.core.to_tensor

```{autodoc2-docstring} ascendmoea.core.to_tensor
```
````

````{py:function} to_numpy(x)
:canonical: ascendmoea.core.to_numpy

```{autodoc2-docstring} ascendmoea.core.to_numpy
```
````

````{py:function} round_half_away_from_zero(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.core.round_half_away_from_zero

```{autodoc2-docstring} ascendmoea.core.round_half_away_from_zero
```
````

`````{py:class} Population
:canonical: ascendmoea.core.Population

```{autodoc2-docstring} ascendmoea.core.Population
```

````{py:attribute} decs
:canonical: ascendmoea.core.Population.decs
:type: torch.Tensor
:value: >
   None

```{autodoc2-docstring} ascendmoea.core.Population.decs
```

````

````{py:attribute} objs
:canonical: ascendmoea.core.Population.objs
:type: torch.Tensor
:value: >
   None

```{autodoc2-docstring} ascendmoea.core.Population.objs
```

````

````{py:attribute} cons
:canonical: ascendmoea.core.Population.cons
:type: torch.Tensor
:value: >
   None

```{autodoc2-docstring} ascendmoea.core.Population.cons
```

````

````{py:property} feasible
:canonical: ascendmoea.core.Population.feasible
:type: torch.Tensor

```{autodoc2-docstring} ascendmoea.core.Population.feasible
```

````

````{py:method} best() -> ascendmoea.core.Population
:canonical: ascendmoea.core.Population.best

```{autodoc2-docstring} ascendmoea.core.Population.best
```

````

````{py:method} clone() -> ascendmoea.core.Population
:canonical: ascendmoea.core.Population.clone

```{autodoc2-docstring} ascendmoea.core.Population.clone
```

````

````{py:method} detach() -> ascendmoea.core.Population
:canonical: ascendmoea.core.Population.detach

```{autodoc2-docstring} ascendmoea.core.Population.detach
```

````

````{py:method} to(device: torch.device | str, dtype: torch.dtype | None = None) -> ascendmoea.core.Population
:canonical: ascendmoea.core.Population.to

```{autodoc2-docstring} ascendmoea.core.Population.to
```

````

`````

`````{py:class} Problem(n: int = 100, m: int | None = 2, d: int | None = 10, max_fe: int = 10000)
:canonical: ascendmoea.core.Problem

Bases: {py:obj}`abc.ABC`

```{autodoc2-docstring} ascendmoea.core.Problem
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.core.Problem.__init__
```

````{py:attribute} name
:canonical: ascendmoea.core.Problem.name
:value: >
   'Problem'

```{autodoc2-docstring} ascendmoea.core.Problem.name
```

````

````{py:property} device
:canonical: ascendmoea.core.Problem.device
:type: torch.device

```{autodoc2-docstring} ascendmoea.core.Problem.device
```

````

````{py:method} setting() -> None
:canonical: ascendmoea.core.Problem.setting
:abstractmethod:

```{autodoc2-docstring} ascendmoea.core.Problem.setting
```

````

````{py:method} initialization(n: int | None = None) -> ascendmoea.core.Population
:canonical: ascendmoea.core.Problem.initialization

```{autodoc2-docstring} ascendmoea.core.Problem.initialization
```

````

````{py:method} evaluation(dec) -> ascendmoea.core.Population
:canonical: ascendmoea.core.Problem.evaluation

```{autodoc2-docstring} ascendmoea.core.Problem.evaluation
```

````

````{py:method} evaluate(dec) -> ascendmoea.core.Population
:canonical: ascendmoea.core.Problem.evaluate

```{autodoc2-docstring} ascendmoea.core.Problem.evaluate
```

````

````{py:method} cal_obj(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.core.Problem.cal_obj

```{autodoc2-docstring} ascendmoea.core.Problem.cal_obj
```

````

````{py:method} cal_con(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.core.Problem.cal_con

```{autodoc2-docstring} ascendmoea.core.Problem.cal_con
```

````

````{py:method} cal_dec(x: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.core.Problem.cal_dec

```{autodoc2-docstring} ascendmoea.core.Problem.cal_dec
```

````

````{py:method} get_optimum(n: int = 1000)
:canonical: ascendmoea.core.Problem.get_optimum

```{autodoc2-docstring} ascendmoea.core.Problem.get_optimum
```

````

````{py:method} get_pf()
:canonical: ascendmoea.core.Problem.get_pf

```{autodoc2-docstring} ascendmoea.core.Problem.get_pf
```

````

````{py:property} pf
:canonical: ascendmoea.core.Problem.pf

```{autodoc2-docstring} ascendmoea.core.Problem.pf
```

````

````{py:property} optimum
:canonical: ascendmoea.core.Problem.optimum

```{autodoc2-docstring} ascendmoea.core.Problem.optimum
```

````

````{py:method} estimate_feasible_obj(n: int = 5000)
:canonical: ascendmoea.core.Problem.estimate_feasible_obj

```{autodoc2-docstring} ascendmoea.core.Problem.estimate_feasible_obj
```

````

`````

`````{py:class} Algorithm(save: int = -10)
:canonical: ascendmoea.core.Algorithm

Bases: {py:obj}`abc.ABC`

```{autodoc2-docstring} ascendmoea.core.Algorithm
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.core.Algorithm.__init__
```

````{py:attribute} name
:canonical: ascendmoea.core.Algorithm.name
:value: >
   'Algorithm'

```{autodoc2-docstring} ascendmoea.core.Algorithm.name
```

````

````{py:attribute} history_requires_snapshot
:canonical: ascendmoea.core.Algorithm.history_requires_snapshot
:value: >
   False

```{autodoc2-docstring} ascendmoea.core.Algorithm.history_requires_snapshot
```

````

````{py:method} solve(problem: ascendmoea.core.Problem, output: typing.Callable[[ascendmoea.core.Algorithm, ascendmoea.core.Problem], None] | None = None, should_stop: typing.Callable[[], bool] | None = None, should_pause: typing.Callable[[], bool] | None = None, *, device: torch.device | str | None = None, cpu_threads: int | None = None, seed: int | None = None) -> ascendmoea.core.Algorithm
:canonical: ascendmoea.core.Algorithm.solve

```{autodoc2-docstring} ascendmoea.core.Algorithm.solve
```

````

````{py:method} not_terminated(problem: ascendmoea.core.Problem, population: ascendmoea.core.Population, output: typing.Callable[[ascendmoea.core.Algorithm, ascendmoea.core.Problem], None] | None, should_stop: typing.Callable[[], bool] | None, should_pause: typing.Callable[[], bool] | None) -> bool
:canonical: ascendmoea.core.Algorithm.not_terminated

```{autodoc2-docstring} ascendmoea.core.Algorithm.not_terminated
```

````

````{py:property} final_population
:canonical: ascendmoea.core.Algorithm.final_population
:type: ascendmoea.core.Population

```{autodoc2-docstring} ascendmoea.core.Algorithm.final_population
```

````

`````

````{py:function} non_dominated_mask(obj: torch.Tensor) -> torch.Tensor
:canonical: ascendmoea.core.non_dominated_mask

```{autodoc2-docstring} ascendmoea.core.non_dominated_mask
```
````
