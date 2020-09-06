import {createElement, Component, render} from './toy-react'

for(let a of [1, 3, 5])
    console.log(a);


class MyComponent extends Component{
    constructor(){
        super();
        this.state = {
            a:1,
            b:1
        };
    }
    render(){
        console.log('com')
        // <button onclick={() => {this.state.a++; this.rerender()}}>add</button>
        return <div>
            <h1>asdasd</h1>
            <button onclick={() => {this.setState({a: this.state.a + 1})   }}>add</button>
            <span>{this.state.a.toString()}</span>
            <span>{this.state.b.toString()}</span>
            {this.children}
        </div>
    }
}
// jsx 使用纯小写时会认为是 原生元素,  否则会认为是组件(调用时没有 引号)
window.a = <MyComponent>
    <div>123123</div>
</MyComponent>;
console.log(window.a)
render(window.a, document.body);