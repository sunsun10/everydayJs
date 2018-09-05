9-2
今天看了bind,call，apply。还有iife。bind在react里面的作用没搞懂。iife的模块化感觉不错

9-3
修改img边框的bug。

9-4
搞懂了hoc的一些细节。

react

1）Component和<Component />的区别
简单的情况，例如functional component。
Component 就是 () => 123 此乃匿名函数
那么render () this.Component() === (function () {return 123})() === render () <Component /> 此乃立即执行函数。

而jsx语法，无非是React.createElement()的语法糖（这句话也很含糊，我的理解就是，其实</>是个高阶函数，需要传入一个function，里面会执行（call or new Component class））

2）reactRouter4 里面 Route 组件需要传入一个 function 使用Component 和 (props) => <Component {...props}/> 区别是？
其实后者就是返回了一个高阶函数，前者是直接传入函数。差别就是，高阶函数可以注入变量，比如我可以包裹一个layOut

3）组合模式和hoc模式的区别
本质都是数据流维护。无论哪种模式，都维护了state。
hoc模式是函数工厂模式，返回的每个function，彼此之间毫无关联，只不过注入了相同的变量和逻辑。
子父组件1对1是wrapper，其实也可以当做hoc来用。
如果是一个父组件，多个子组件，父组件维护状态，状态传入子组件，那么这种和hoc就没有任何关系了，他通过父组件管理共有state。而hoc不具有这种共有数据管理机制。

4)
我们日常写的react，都是执行函数，当我们应用hoc的时候，我们就变成了函数式，所以才会各种搞不懂。

5）一个函数，能够传入函数执行结果（JSX）给他？
能，但是没啥意义。所以我觉得不能。

6）一个函数，传入函数（Component）给他，返还一个JSX和返回一个hocComponent有何区别？
我觉得没啥区别。反正最终都得执行不是吗？map这种函数，不就是把我的函数给执行了，然后返给我一个结果吗？如果他返给我一个高阶，我执行后也是这个结果，没有什么区别吧。
我觉得这个也许和调用者的预期有关。




9-5