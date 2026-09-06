# {py:mod}`ascendmoea.experiment`

```{py:module} ascendmoea.experiment
```

```{autodoc2-docstring} ascendmoea.experiment
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`RunRecord <ascendmoea.experiment.RunRecord>`
  - ```{autodoc2-docstring} ascendmoea.experiment.RunRecord
    :summary:
    ```
````

### Functions

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`records_to_frame <ascendmoea.experiment.records_to_frame>`
  - ```{autodoc2-docstring} ascendmoea.experiment.records_to_frame
    :summary:
    ```
* - {py:obj}`run_experiment <ascendmoea.experiment.run_experiment>`
  - ```{autodoc2-docstring} ascendmoea.experiment.run_experiment
    :summary:
    ```
* - {py:obj}`run_single <ascendmoea.experiment.run_single>`
  - ```{autodoc2-docstring} ascendmoea.experiment.run_single
    :summary:
    ```
* - {py:obj}`significance_tests <ascendmoea.experiment.significance_tests>`
  - ```{autodoc2-docstring} ascendmoea.experiment.significance_tests
    :summary:
    ```
* - {py:obj}`summarize <ascendmoea.experiment.summarize>`
  - ```{autodoc2-docstring} ascendmoea.experiment.summarize
    :summary:
    ```
````

### API

`````{py:class} RunRecord
:canonical: ascendmoea.experiment.RunRecord

```{autodoc2-docstring} ascendmoea.experiment.RunRecord
```

````{py:attribute} algorithm
:canonical: ascendmoea.experiment.RunRecord.algorithm
:type: str
:value: >
   None

```{autodoc2-docstring} ascendmoea.experiment.RunRecord.algorithm
```

````

````{py:attribute} problem
:canonical: ascendmoea.experiment.RunRecord.problem
:type: str
:value: >
   None

```{autodoc2-docstring} ascendmoea.experiment.RunRecord.problem
```

````

````{py:attribute} run
:canonical: ascendmoea.experiment.RunRecord.run
:type: int
:value: >
   None

```{autodoc2-docstring} ascendmoea.experiment.RunRecord.run
```

````

````{py:attribute} metrics
:canonical: ascendmoea.experiment.RunRecord.metrics
:type: dict[str, float]
:value: >
   None

```{autodoc2-docstring} ascendmoea.experiment.RunRecord.metrics
```

````

`````

````{py:function} records_to_frame(records: list[ascendmoea.experiment.RunRecord]) -> pandas.DataFrame
:canonical: ascendmoea.experiment.records_to_frame

```{autodoc2-docstring} ascendmoea.experiment.records_to_frame
```
````

````{py:function} run_experiment(alg_factory: collections.abc.Callable[[], ascendmoea.core.Algorithm], pro_factory: collections.abc.Callable[[], ascendmoea.core.Problem], n_runs: int, *, device: torch.device | str | None = None, base_seed: int | None = None, cpu_threads: int | None = None) -> list[ascendmoea.experiment.RunRecord]
:canonical: ascendmoea.experiment.run_experiment

```{autodoc2-docstring} ascendmoea.experiment.run_experiment
```
````

````{py:function} run_single(alg: ascendmoea.core.Algorithm, pro: ascendmoea.core.Problem, output_callback: collections.abc.Callable[[ascendmoea.core.Algorithm, ascendmoea.core.Problem], None] | None = None, should_stop_cb: collections.abc.Callable[[], bool] | None = None, *, device: torch.device | str | None = None, seed: int | None = None, cpu_threads: int | None = None) -> tuple[dict[str, float], ascendmoea.core.Algorithm]
:canonical: ascendmoea.experiment.run_single

```{autodoc2-docstring} ascendmoea.experiment.run_single
```
````

````{py:function} significance_tests(df: pandas.DataFrame, metric: str, test: str, baseline_alg: str | None = None) -> list[dict[str, typing.Any]]
:canonical: ascendmoea.experiment.significance_tests

```{autodoc2-docstring} ascendmoea.experiment.significance_tests
```
````

````{py:function} summarize(df: pandas.DataFrame, metric: str, style: str = 'mean_std') -> pandas.DataFrame
:canonical: ascendmoea.experiment.summarize

```{autodoc2-docstring} ascendmoea.experiment.summarize
```
````
