# Python API 参考

[返回中文文档](../index.md) · [English](../en/api/index.md)

API 页面在每次构建时都会对 `src/ascendmoea` 进行静态分析，因此函数签名、类型注解和文档字符串会随源码同步更新。

::::{grid} 1 2 2 3
:gutter: 3

:::{grid-item-card} 核心对象
:link: generated/ascendmoea/ascendmoea.core
:link-type: doc
种群、问题、算法、张量转换和非支配关系。
:::

:::{grid-item-card} 工作流
:link: generated/ascendmoea/ascendmoea.workflow
:link-type: doc
运行配置、监控器、结果对象和标准优化循环。
:::

:::{grid-item-card} 算法
:link: generated/ascendmoea/ascendmoea.algorithms
:link-type: doc
内置算法实现、注册表和构造工具。
:::

:::{grid-item-card} 问题
:link: generated/ascendmoea/ascendmoea.problems
:link-type: doc
基准、约束、多模态、稀疏和实际问题。
:::

:::{grid-item-card} 算子
:link: generated/ascendmoea/ascendmoea.operators
:link-type: doc
采样、选择、变异、交叉、多样性和种群算子。
:::

:::{grid-item-card} 指标
:link: generated/ascendmoea/ascendmoea.metrics
:link-type: doc
HV、IGD、GD、IGDX、PSP、CPF、DM 和可行性指标。
:::

::::

```{toctree}
:caption: 自动生成的 API
:maxdepth: 4

generated/index
```
