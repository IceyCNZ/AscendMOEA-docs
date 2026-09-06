# {py:mod}`ascendmoea`

```{py:module} ascendmoea
```

```{autodoc2-docstring} ascendmoea
:allowtitles:
```

## Package Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`Algorithm <ascendmoea.core.Algorithm>`
  - ```{autodoc2-docstring} ascendmoea.core.Algorithm
    :summary:
    ```
* - {py:obj}`ComponentRegistry <ascendmoea.registry.ComponentRegistry>`
  - ```{autodoc2-docstring} ascendmoea.registry.ComponentRegistry
    :summary:
    ```
* - {py:obj}`GenerationRecord <ascendmoea.workflow.GenerationRecord>`
  - ```{autodoc2-docstring} ascendmoea.workflow.GenerationRecord
    :summary:
    ```
* - {py:obj}`HistoryMonitor <ascendmoea.workflow.HistoryMonitor>`
  - ```{autodoc2-docstring} ascendmoea.workflow.HistoryMonitor
    :summary:
    ```
* - {py:obj}`Monitor <ascendmoea.workflow.Monitor>`
  - ```{autodoc2-docstring} ascendmoea.workflow.Monitor
    :summary:
    ```
* - {py:obj}`OptimizationResult <ascendmoea.workflow.OptimizationResult>`
  - ```{autodoc2-docstring} ascendmoea.workflow.OptimizationResult
    :summary:
    ```
* - {py:obj}`Population <ascendmoea.core.Population>`
  - ```{autodoc2-docstring} ascendmoea.core.Population
    :summary:
    ```
* - {py:obj}`Problem <ascendmoea.core.Problem>`
  - ```{autodoc2-docstring} ascendmoea.core.Problem
    :summary:
    ```
* - {py:obj}`RunConfig <ascendmoea.workflow.RunConfig>`
  - ```{autodoc2-docstring} ascendmoea.workflow.RunConfig
    :summary:
    ```
* - {py:obj}`Workflow <ascendmoea.workflow.Workflow>`
  - ```{autodoc2-docstring} ascendmoea.workflow.Workflow
    :summary:
    ```
````

### Functions

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`configure_torch <ascendmoea.device.configure_torch>`
  - ```{autodoc2-docstring} ascendmoea.device.configure_torch
    :summary:
    ```
* - {py:obj}`create_algorithm <ascendmoea.algorithms.create_algorithm>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.create_algorithm
    :summary:
    ```
* - {py:obj}`create_problem <ascendmoea.problems.create_problem>`
  - ```{autodoc2-docstring} ascendmoea.problems.create_problem
    :summary:
    ```
* - {py:obj}`get_algorithm <ascendmoea.algorithms.get_algorithm>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.get_algorithm
    :summary:
    ```
* - {py:obj}`get_problem <ascendmoea.problems.get_problem>`
  - ```{autodoc2-docstring} ascendmoea.problems.get_problem
    :summary:
    ```
* - {py:obj}`list_algorithms <ascendmoea.algorithms.list_algorithms>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.list_algorithms
    :summary:
    ```
* - {py:obj}`list_problems <ascendmoea.problems.list_problems>`
  - ```{autodoc2-docstring} ascendmoea.problems.list_problems
    :summary:
    ```
* - {py:obj}`npu_is_available <ascendmoea.device.npu_is_available>`
  - ```{autodoc2-docstring} ascendmoea.device.npu_is_available
    :summary:
    ```
* - {py:obj}`optimize <ascendmoea.workflow.optimize>`
  - ```{autodoc2-docstring} ascendmoea.workflow.optimize
    :summary:
    ```
* - {py:obj}`seed_everything <ascendmoea.device.seed_everything>`
  - ```{autodoc2-docstring} ascendmoea.device.seed_everything
    :summary:
    ```
* - {py:obj}`select_device <ascendmoea.device.select_device>`
  - ```{autodoc2-docstring} ascendmoea.device.select_device
    :summary:
    ```
* - {py:obj}`synchronize <ascendmoea.device.synchronize>`
  - ```{autodoc2-docstring} ascendmoea.device.synchronize
    :summary:
    ```
````

### Data

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`ALGORITHMS <ascendmoea.algorithms.ALGORITHMS>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.ALGORITHMS
    :summary:
    ```
* - {py:obj}`PROBLEMS <ascendmoea.problems.PROBLEMS>`
  - ```{autodoc2-docstring} ascendmoea.problems.PROBLEMS
    :summary:
    ```
* - {py:obj}`register_algorithm <ascendmoea.algorithms.register_algorithm>`
  - ```{autodoc2-docstring} ascendmoea.algorithms.register_algorithm
    :summary:
    ```
* - {py:obj}`register_problem <ascendmoea.problems.register_problem>`
  - ```{autodoc2-docstring} ascendmoea.problems.register_problem
    :summary:
    ```
````

### API

````{py:data} ALGORITHMS
:canonical: ascendmoea.algorithms.ALGORITHMS
:value: >
   'ComponentRegistry(...)'

```{autodoc2-docstring} ascendmoea.algorithms.ALGORITHMS
```

````

````{py:data} PROBLEMS
:canonical: ascendmoea.problems.PROBLEMS
:value: >
   'ComponentRegistry(...)'

```{autodoc2-docstring} ascendmoea.problems.PROBLEMS
```

````

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

`````{py:class} ComponentRegistry(kind: str, components: collections.abc.Iterator[type[ascendmoea.registry.ComponentT]] | tuple[type[ascendmoea.registry.ComponentT], ...] = ())
:canonical: ascendmoea.registry.ComponentRegistry

Bases: {py:obj}`collections.abc.MutableMapping`\[{py:obj}`str`\, {py:obj}`type`\[{py:obj}`ascendmoea.registry.ComponentT`\]\], {py:obj}`typing.Generic`\[{py:obj}`ascendmoea.registry.ComponentT`\]

```{autodoc2-docstring} ascendmoea.registry.ComponentRegistry
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.registry.ComponentRegistry.__init__
```

````{py:method} register(component: type[ascendmoea.registry.ComponentT] | None = None, *, name: str | None = None, replace: bool = False)
:canonical: ascendmoea.registry.ComponentRegistry.register

```{autodoc2-docstring} ascendmoea.registry.ComponentRegistry.register
```

````

````{py:method} create(name: str, /, **kwargs) -> ascendmoea.registry.ComponentT
:canonical: ascendmoea.registry.ComponentRegistry.create

```{autodoc2-docstring} ascendmoea.registry.ComponentRegistry.create
```

````

````{py:method} names() -> tuple[str, ...]
:canonical: ascendmoea.registry.ComponentRegistry.names

```{autodoc2-docstring} ascendmoea.registry.ComponentRegistry.names
```

````

`````

`````{py:class} GenerationRecord
:canonical: ascendmoea.workflow.GenerationRecord

```{autodoc2-docstring} ascendmoea.workflow.GenerationRecord
```

````{py:attribute} evaluations
:canonical: ascendmoea.workflow.GenerationRecord.evaluations
:type: int
:value: >
   None

```{autodoc2-docstring} ascendmoea.workflow.GenerationRecord.evaluations
```

````

````{py:attribute} population
:canonical: ascendmoea.workflow.GenerationRecord.population
:type: ascendmoea.core.Population
:value: >
   None

```{autodoc2-docstring} ascendmoea.workflow.GenerationRecord.population
```

````

`````

`````{py:class} HistoryMonitor(copy_to_cpu: bool = True)
:canonical: ascendmoea.workflow.HistoryMonitor

Bases: {py:obj}`ascendmoea.workflow.Monitor`

```{autodoc2-docstring} ascendmoea.workflow.HistoryMonitor
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.workflow.HistoryMonitor.__init__
```

````{py:method} on_start(algorithm: ascendmoea.core.Algorithm, problem: ascendmoea.core.Problem) -> None
:canonical: ascendmoea.workflow.HistoryMonitor.on_start

```{autodoc2-docstring} ascendmoea.workflow.HistoryMonitor.on_start
```

````

````{py:method} on_generation(algorithm: ascendmoea.core.Algorithm, problem: ascendmoea.core.Problem) -> None
:canonical: ascendmoea.workflow.HistoryMonitor.on_generation

```{autodoc2-docstring} ascendmoea.workflow.HistoryMonitor.on_generation
```

````

`````

`````{py:class} Monitor
:canonical: ascendmoea.workflow.Monitor

```{autodoc2-docstring} ascendmoea.workflow.Monitor
```

````{py:method} on_start(algorithm: ascendmoea.core.Algorithm, problem: ascendmoea.core.Problem) -> None
:canonical: ascendmoea.workflow.Monitor.on_start

```{autodoc2-docstring} ascendmoea.workflow.Monitor.on_start
```

````

````{py:method} on_generation(algorithm: ascendmoea.core.Algorithm, problem: ascendmoea.core.Problem) -> None
:canonical: ascendmoea.workflow.Monitor.on_generation

```{autodoc2-docstring} ascendmoea.workflow.Monitor.on_generation
```

````

````{py:method} on_finish(result: ascendmoea.workflow.OptimizationResult) -> None
:canonical: ascendmoea.workflow.Monitor.on_finish

```{autodoc2-docstring} ascendmoea.workflow.Monitor.on_finish
```

````

````{py:method} on_error(algorithm: ascendmoea.core.Algorithm, problem: ascendmoea.core.Problem, error: BaseException) -> None
:canonical: ascendmoea.workflow.Monitor.on_error

```{autodoc2-docstring} ascendmoea.workflow.Monitor.on_error
```

````

`````

`````{py:class} OptimizationResult
:canonical: ascendmoea.workflow.OptimizationResult

```{autodoc2-docstring} ascendmoea.workflow.OptimizationResult
```

````{py:attribute} algorithm
:canonical: ascendmoea.workflow.OptimizationResult.algorithm
:type: ascendmoea.core.Algorithm
:value: >
   None

```{autodoc2-docstring} ascendmoea.workflow.OptimizationResult.algorithm
```

````

````{py:attribute} problem
:canonical: ascendmoea.workflow.OptimizationResult.problem
:type: ascendmoea.core.Problem
:value: >
   None

```{autodoc2-docstring} ascendmoea.workflow.OptimizationResult.problem
```

````

````{py:attribute} device
:canonical: ascendmoea.workflow.OptimizationResult.device
:type: torch.device
:value: >
   None

```{autodoc2-docstring} ascendmoea.workflow.OptimizationResult.device
```

````

````{py:attribute} elapsed_seconds
:canonical: ascendmoea.workflow.OptimizationResult.elapsed_seconds
:type: float
:value: >
   None

```{autodoc2-docstring} ascendmoea.workflow.OptimizationResult.elapsed_seconds
```

````

````{py:property} population
:canonical: ascendmoea.workflow.OptimizationResult.population
:type: ascendmoea.core.Population

```{autodoc2-docstring} ascendmoea.workflow.OptimizationResult.population
```

````

````{py:property} evaluations
:canonical: ascendmoea.workflow.OptimizationResult.evaluations
:type: int

```{autodoc2-docstring} ascendmoea.workflow.OptimizationResult.evaluations
```

````

`````

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

`````{py:class} RunConfig
:canonical: ascendmoea.workflow.RunConfig

```{autodoc2-docstring} ascendmoea.workflow.RunConfig
```

````{py:attribute} device
:canonical: ascendmoea.workflow.RunConfig.device
:type: torch.device | str | None
:value: >
   None

```{autodoc2-docstring} ascendmoea.workflow.RunConfig.device
```

````

````{py:attribute} seed
:canonical: ascendmoea.workflow.RunConfig.seed
:type: int | None
:value: >
   None

```{autodoc2-docstring} ascendmoea.workflow.RunConfig.seed
```

````

````{py:attribute} cpu_threads
:canonical: ascendmoea.workflow.RunConfig.cpu_threads
:type: int | None
:value: >
   None

```{autodoc2-docstring} ascendmoea.workflow.RunConfig.cpu_threads
```

````

````{py:attribute} synchronize_timing
:canonical: ascendmoea.workflow.RunConfig.synchronize_timing
:type: bool
:value: >
   True

```{autodoc2-docstring} ascendmoea.workflow.RunConfig.synchronize_timing
```

````

`````

`````{py:class} Workflow(algorithm: ascendmoea.core.Algorithm, problem: ascendmoea.core.Problem, monitors: ascendmoea.workflow.Monitor | collections.abc.Sequence[ascendmoea.workflow.Monitor] | None = None, config: ascendmoea.workflow.RunConfig | None = None)
:canonical: ascendmoea.workflow.Workflow

```{autodoc2-docstring} ascendmoea.workflow.Workflow
```

```{rubric} Initialization
```

```{autodoc2-docstring} ascendmoea.workflow.Workflow.__init__
```

````{py:method} run(output: collections.abc.Callable[[ascendmoea.core.Algorithm, ascendmoea.core.Problem], None] | None = None, should_stop: collections.abc.Callable[[], bool] | None = None, should_pause: collections.abc.Callable[[], bool] | None = None) -> ascendmoea.workflow.OptimizationResult
:canonical: ascendmoea.workflow.Workflow.run

```{autodoc2-docstring} ascendmoea.workflow.Workflow.run
```

````

`````

````{py:function} configure_torch(device: torch.device | str, cpu_threads: int | None = None) -> torch.dtype
:canonical: ascendmoea.device.configure_torch

```{autodoc2-docstring} ascendmoea.device.configure_torch
```
````

````{py:function} create_algorithm(name: str, /, **kwargs)
:canonical: ascendmoea.algorithms.create_algorithm

```{autodoc2-docstring} ascendmoea.algorithms.create_algorithm
```
````

````{py:function} create_problem(name: str, /, **kwargs)
:canonical: ascendmoea.problems.create_problem

```{autodoc2-docstring} ascendmoea.problems.create_problem
```
````

````{py:function} get_algorithm(name: str)
:canonical: ascendmoea.algorithms.get_algorithm

```{autodoc2-docstring} ascendmoea.algorithms.get_algorithm
```
````

````{py:function} get_problem(name: str)
:canonical: ascendmoea.problems.get_problem

```{autodoc2-docstring} ascendmoea.problems.get_problem
```
````

````{py:function} list_algorithms() -> tuple[str, ...]
:canonical: ascendmoea.algorithms.list_algorithms

```{autodoc2-docstring} ascendmoea.algorithms.list_algorithms
```
````

````{py:function} list_problems() -> tuple[str, ...]
:canonical: ascendmoea.problems.list_problems

```{autodoc2-docstring} ascendmoea.problems.list_problems
```
````

````{py:function} npu_is_available() -> bool
:canonical: ascendmoea.device.npu_is_available

```{autodoc2-docstring} ascendmoea.device.npu_is_available
```
````

````{py:function} optimize(algorithm: ascendmoea.core.Algorithm, problem: ascendmoea.core.Problem, *, device: torch.device | str | None = None, seed: int | None = None, cpu_threads: int | None = None, monitors: ascendmoea.workflow.Monitor | collections.abc.Sequence[ascendmoea.workflow.Monitor] | None = None, synchronize_timing: bool = True) -> ascendmoea.workflow.OptimizationResult
:canonical: ascendmoea.workflow.optimize

```{autodoc2-docstring} ascendmoea.workflow.optimize
```
````

````{py:data} register_algorithm
:canonical: ascendmoea.algorithms.register_algorithm
:value: >
   None

```{autodoc2-docstring} ascendmoea.algorithms.register_algorithm
```

````

````{py:data} register_problem
:canonical: ascendmoea.problems.register_problem
:value: >
   None

```{autodoc2-docstring} ascendmoea.problems.register_problem
```

````

````{py:function} seed_everything(seed: int, device: torch.device | str | None = None) -> None
:canonical: ascendmoea.device.seed_everything

```{autodoc2-docstring} ascendmoea.device.seed_everything
```
````

````{py:function} select_device(requested: str | None = None) -> torch.device
:canonical: ascendmoea.device.select_device

```{autodoc2-docstring} ascendmoea.device.select_device
```
````

````{py:function} synchronize(device: torch.device | str) -> None
:canonical: ascendmoea.device.synchronize

```{autodoc2-docstring} ascendmoea.device.synchronize
```
````
