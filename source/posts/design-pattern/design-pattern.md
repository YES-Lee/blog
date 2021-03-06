---
title: 设计模式六大原则
date: 2019-09-18 15:29:49
thumbnail: ./cover.jpg
categories:
  - 技术
tags:
  - 设计模式
  - 六大原则
keywords:
  - javascript设计原则
  - 单一职责原则
  - 里氏替换原则
  - 接口隔离原则
  - 依赖倒置原则
  - 迪米特法则
  - 开闭原则
---

软件开发过程中常用的六大设计原则

<!-- more -->

## 单一职责原则（Single Responsibility Principle）

### 定义

不要存在多余一个导致类变更的原因

### 解释

一个类只负责一项职责

### 作用

根据业务功能分离代码模块

### 分析

单一职责原则非常简单，稍微拥有编程经验的人都会去遵守单一职责原则，即使不知道该原则的存在。但是在实践过程中，单一职责原则会面临最大的敌人——职责扩散

所谓职责扩散，指的是由于某些原因，职责 P 被划分为粒度更细的职责 P1, P2, …等，这种情况，我们需要根据实际情况来决定遵循单一职责原则的粒度。

如果一个职责的扩散不可控，那么必须在职责扩散失控前，重构代码

## 里氏替换原则（Liskov Substitution Principle）

### 定义

如果对每一个类型为 T1 的对象 o1，都有类型为 T2 的对象 o2，使得以 T1 定义的所有程序 P 在所有的对象 o1 都代换成 o2 时，程序 P 的行为没有发生变化，那么类型 T2 是类型 T1 的子类型

所有引用基类的地方必须能透明地使用其子类的对象

### 解释

子类要能够完成父类所有的职责，在这样的一个系统中，基类（祖先类）的对象，被其子类对象替换后，整个系统工作不会受到影响。

::子类可以扩展父类，但是不能修改（重写）父类的方法::

### 作用

提高系统稳定性、可扩展性

### 分析

在面向对象编程过程中，里氏替换原则要求我们，在子类里面不要重写/修改父类中已经实现的方法（抽象方法除外）

- 子类可以实现父类的抽象方法，但不能覆盖父类的非抽象方法。
- 子类中可以增加自己特有的方法。
- 当子类的方法重载父类的方法时，方法的前置条件（即方法的形参）要比父类方法的输入参数更宽松。
- 当子类的方法实现父类的抽象方法时，方法的后置条件（即方法的返回值）要比父类更严格。

## 接口隔离原则（Interface Segregation Principle）

### 定义

客户端不应该依赖它不需要的接口；一个类对另一个类的依赖应该建立在最小的接口上

### 解释

类 A 所依赖的接口，应该只包含类 A 用到的方法

### 作用

避免无用代码，防止类过于臃肿

### 分析

接口隔离原则，在于控制接口的粒度，如果一个接口中包含过多的方法，那么在实现类中就需要实现所有方法，就会导致代码非常臃肿。这个时候就需要将接口拆分为粒度更细的多个接口。

但是，接口的粒度控制要有个度，如果接口太小，又会导致系统设计复杂

## 依赖倒置原则（Dependence Inversion Principle）

### 定义

高层模块不应该依赖低层模块，二者都应该依赖其抽象；抽象不应该依赖细节；细节应该依赖抽象

### 解释

将类的相互依赖抽离出一个抽象层（接口或者抽象类），如：类 A 依赖类 B，创建一个接口 I，类 A 依赖接口 I，类 B 实现接口 I

依赖倒置的核心是面向接口编程，理解了面向接口编程，也就理解了依赖倒置原则

### 作用

降低代码耦合度

### 描述

依赖倒置原则目标主要是降低代码耦合度，降低代码维护成本，以及提高可扩展性

- 低层模块尽量都要有抽象类或接口，或者两者都有。
- 变量的声明类型尽量是抽象类或接口。
- 使用继承时遵循里氏替换原则。

## 迪米特法则（Law Of Demeter）

### 定义

一个对象应该对其他对象保持最少的了解

### 解释

一个类对其依赖知道的越少越好，低耦合，高内聚

### 作用

降低代码耦合度

### 分析

## 开闭原则（Open Close Principle）

### 定义

一个软件实体如类、模块和函数应该对扩展开放，对修改关闭

### 解释

一个封装好的代码块（类/模块等），应该允许使用者扩展其功能，但不允许使用者修改其功能

### 描述

::用抽象构建框架，用实现扩展细节::
