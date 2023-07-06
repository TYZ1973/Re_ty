import ReactDom from 'react-dom/client';
import App from "./App";

import '../src/index.css';

// 简单的函数组件的例子，组件首字母要大写

// function App(){

//     return <div>Hello react?????</div>

// }


const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<App/>);