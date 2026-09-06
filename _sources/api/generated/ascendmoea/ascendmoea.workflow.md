# {py:mod}`ascendmoea.workflow`

```{py:module} ascendmoea.workflow
```

```{autodoc2-docstring} ascendmoea.workflow
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

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

* - {py:obj}`optimize <ascendmoea.workflow.optimize>`
  - ```{autodoc2-docstring} ascendmoea.workflow.optimize
    :summary:
    ```
````

### API

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

````{py:function} optimize(algorithm: ascendmoea.core.Algorithm, problem: ascendmoea.core.Problem, *, device: torch.device | str | None = None, seed: int | None = None, cpu_threads: int | None = None, monitors: ascendmoea.workflow.Monitor | collections.abc.Sequence[ascendmoea.workflow.Monitor] | None = None, synchronize_timing: bool = True) -> ascendmoea.workflow.OptimizationResult
:canonical: ascendmoea.workflow.optimize

```{autodoc2-docstring} ascendmoea.workflow.optimize
```
````
