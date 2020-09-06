npm init -y
npm install webpack webpack-cli --save-de

First to install some package
npm install --save-dev babel-loader @babel/core @babel/preset-env


# to Support Jsx 
npm install @babel/plugin-transform-react-jsx --save-dev


```
将jsx的方法改为 createElement
use: {
    loader: 'babel-loader',
    options: {
        presets: ['@babel/preset-env'],
        plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'createElement'}]]
    }
}
```