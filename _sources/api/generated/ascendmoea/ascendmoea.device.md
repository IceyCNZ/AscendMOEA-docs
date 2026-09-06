# {py:mod}`ascendmoea.device`

```{py:module} ascendmoea.device
```

```{autodoc2-docstring} ascendmoea.device
:allowtitles:
```

## Module Contents

### Functions

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`npu_is_available <ascendmoea.device.npu_is_available>`
  - ```{autodoc2-docstring} ascendmoea.device.npu_is_available
    :summary:
    ```
* - {py:obj}`select_device <ascendmoea.device.select_device>`
  - ```{autodoc2-docstring} ascendmoea.device.select_device
    :summary:
    ```
* - {py:obj}`real_dtype_for_device <ascendmoea.device.real_dtype_for_device>`
  - ```{autodoc2-docstring} ascendmoea.device.real_dtype_for_device
    :summary:
    ```
* - {py:obj}`safe_dtype <ascendmoea.device.safe_dtype>`
  - ```{autodoc2-docstring} ascendmoea.device.safe_dtype
    :summary:
    ```
* - {py:obj}`configure_torch <ascendmoea.device.configure_torch>`
  - ```{autodoc2-docstring} ascendmoea.device.configure_torch
    :summary:
    ```
* - {py:obj}`seed_everything <ascendmoea.device.seed_everything>`
  - ```{autodoc2-docstring} ascendmoea.device.seed_everything
    :summary:
    ```
* - {py:obj}`synchronize <ascendmoea.device.synchronize>`
  - ```{autodoc2-docstring} ascendmoea.device.synchronize
    :summary:
    ```
````

### API

````{py:function} npu_is_available() -> bool
:canonical: ascendmoea.device.npu_is_available

```{autodoc2-docstring} ascendmoea.device.npu_is_available
```
````

````{py:function} select_device(requested: str | None = None) -> torch.device
:canonical: ascendmoea.device.select_device

```{autodoc2-docstring} ascendmoea.device.select_device
```
````

````{py:function} real_dtype_for_device(device: torch.device | str | None) -> torch.dtype
:canonical: ascendmoea.device.real_dtype_for_device

```{autodoc2-docstring} ascendmoea.device.real_dtype_for_device
```
````

````{py:function} safe_dtype(dtype: torch.dtype | None, device: torch.device | str | None) -> torch.dtype
:canonical: ascendmoea.device.safe_dtype

```{autodoc2-docstring} ascendmoea.device.safe_dtype
```
````

````{py:function} configure_torch(device: torch.device | str, cpu_threads: int | None = None) -> torch.dtype
:canonical: ascendmoea.device.configure_torch

```{autodoc2-docstring} ascendmoea.device.configure_torch
```
````

````{py:function} seed_everything(seed: int, device: torch.device | str | None = None) -> None
:canonical: ascendmoea.device.seed_everything

```{autodoc2-docstring} ascendmoea.device.seed_everything
```
````

````{py:function} synchronize(device: torch.device | str) -> None
:canonical: ascendmoea.device.synchronize

```{autodoc2-docstring} ascendmoea.device.synchronize
```
````
