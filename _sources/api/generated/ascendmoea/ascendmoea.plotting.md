# {py:mod}`ascendmoea.plotting`

```{py:module} ascendmoea.plotting
```

```{autodoc2-docstring} ascendmoea.plotting
:allowtitles:
```

## Module Contents

### Functions

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`draw_dec <ascendmoea.plotting.draw_dec>`
  - ```{autodoc2-docstring} ascendmoea.plotting.draw_dec
    :summary:
    ```
* - {py:obj}`draw_metric_curve <ascendmoea.plotting.draw_metric_curve>`
  - ```{autodoc2-docstring} ascendmoea.plotting.draw_metric_curve
    :summary:
    ```
* - {py:obj}`draw_obj <ascendmoea.plotting.draw_obj>`
  - ```{autodoc2-docstring} ascendmoea.plotting.draw_obj
    :summary:
    ```
* - {py:obj}`draw_problem_obj <ascendmoea.plotting.draw_problem_obj>`
  - ```{autodoc2-docstring} ascendmoea.plotting.draw_problem_obj
    :summary:
    ```
* - {py:obj}`update_population_trace <ascendmoea.plotting.update_population_trace>`
  - ```{autodoc2-docstring} ascendmoea.plotting.update_population_trace
    :summary:
    ```
````

### API

````{py:function} draw_dec(dec, title: str = 'Population (variables)') -> plotly.graph_objects.Figure
:canonical: ascendmoea.plotting.draw_dec

```{autodoc2-docstring} ascendmoea.plotting.draw_dec
```
````

````{py:function} draw_metric_curve(fes, values, name: str) -> plotly.graph_objects.Figure
:canonical: ascendmoea.plotting.draw_metric_curve

```{autodoc2-docstring} ascendmoea.plotting.draw_metric_curve
```
````

````{py:function} draw_obj(obj, pf=None, title: str = 'Population (objectives)') -> plotly.graph_objects.Figure
:canonical: ascendmoea.plotting.draw_obj

```{autodoc2-docstring} ascendmoea.plotting.draw_obj
```
````

````{py:function} draw_problem_obj(problem, pop_obj, title: str = 'Population (objectives)', include_pf: bool = True) -> plotly.graph_objects.Figure
:canonical: ascendmoea.plotting.draw_problem_obj

```{autodoc2-docstring} ascendmoea.plotting.draw_problem_obj
```
````

````{py:function} update_population_trace(fig: plotly.graph_objects.Figure, pop_obj) -> plotly.graph_objects.Figure
:canonical: ascendmoea.plotting.update_population_trace

```{autodoc2-docstring} ascendmoea.plotting.update_population_trace
```
````
