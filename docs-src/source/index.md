---
hide-toc: true
hide_ai_links: true
---

{.home-title}
# AscendMOEA 文档

```{raw} html
<section class="hero">
  <div class="hero-copy">
    <span class="hero-kicker">张量化 · 可复现 · 昇腾原生</span>
    <h1>面向华为昇腾 NPU 的<br><span>张量化多目标进化优化平台</span></h1>
    <p>统一组织算法、问题、算子与实验流程，并提供便捷的 CPU 开发与验证路径。</p>
    <div class="hero-actions">
      <a class="primary" href="00_%E9%98%85%E8%AF%BB%E8%B7%AF%E7%BA%BF.html">开始使用</a>
      <a class="secondary" href="en/index.html">English Guide</a>
      <a class="secondary" href="15_API%E9%80%9F%E6%9F%A5.html">API 参考</a>
    </div>
  </div>
  <div class="hero-mark" aria-hidden="true">
    <img src="_static/ascendmoea-mark.svg" alt="">
  </div>
</section>
```

## 为昇腾而设计，也便于日常开发

::::{grid} 1 2 2 3
:gutter: 3

:::{grid-item-card} ⚡ 张量化核心
:class-card: feature-card
批优先的 PyTorch 算子统一管理种群数据、计算精度和设备位置，减少不必要的数据搬运。
:::

:::{grid-item-card} ◈ 昇腾 NPU 加速
:class-card: feature-card
同一套工作流可在 `npu:0` 上加速，也可切换到 CPU 完成开发、调试和结果核验。
:::

:::{grid-item-card} ◎ 面向科研流程
:class-card: feature-card
集成算法、问题库、质量指标、运行监控和重复实验工具，便于构建可复现的研究流程。
:::

::::

## 平台框架

```{figure} _static/AscendMOEA_framework.svg
:alt: AscendMOEA 平台框架
:class: framework-figure
:target: 20_平台框架.html
:width: 100%

AscendMOEA 将运行环境、张量化算子、算法组合与问题扩展统一在一条可复现执行链路中。
```

## 快速开始

::::{tab-set}

:::{tab-item} 安装
```bash
python -m pip install .
```
:::

:::{tab-item} 运行
```python
from ascendmoea import optimize
from ascendmoea.algorithms import NSGAII
from ascendmoea.problems import DTLZ2

problem = DTLZ2(n=100, m=3, max_fe=10_000)
result = optimize(NSGAII(save=20), problem, device="cpu", seed=42)
print(result.evaluations, result.elapsed_seconds)
```
:::

:::{tab-item} 昇腾 NPU
```python
result = optimize(
    NSGAII(save=20),
    problem,
    device="npu:0",
    seed=42,
)
```
:::

::::

```{admonition} 项目仓库
:class: tip
源代码、问题反馈与贡献入口：[dqlme/AscendMOEA](https://github.com/dqlme/AscendMOEA)
```

```{toctree}
:hidden:
:maxdepth: 3

00_阅读路线
01_平台定位与边界
02_安装与昇腾环境
03_第一个优化任务
04_核心对象与执行流
05_算法目录与选择
06_问题库与数据资源
07_张量算子手册
08_自定义问题开发
09_自定义算法开发
10_指标实验与监控
11_CPU与NPU性能规范
12_多NPU批量调度
13_故障定位手册
14_可运行案例集
15_API速查
16_API核心与工作流
17_API算法
18_API问题
19_API算子指标实验绘图
20_平台框架
en/index
api/index
```
