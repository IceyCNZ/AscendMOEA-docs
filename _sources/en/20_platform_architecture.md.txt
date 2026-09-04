---
hide_ai_links: true
---

# AscendMOEA Platform Architecture

AscendMOEA unifies runtime and hardware control, tensorized operators, algorithm portfolios, and extensible problem suites in one reproducible execution pipeline.

```{image} ../_static/AscendMOEA_framework.svg
:alt: AscendMOEA platform architecture
:class: framework-figure
:width: 100%
```

A shared PyTorch tensor state connects CPU and Huawei Ascend NPU backends while one workflow coordinates initialization, evolution, selection, termination, metric evaluation, and experiment records. Algorithms, problems, operators, metrics, and registries remain available through open extension interfaces.
