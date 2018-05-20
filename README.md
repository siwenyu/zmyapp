# zmyapp

> A Vue.js project

## 主页访问：



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## case:

```
npm run dev 报错：
Module build failed: Error: No PostCSS Config found in: /Users/siwenyu/Desktop/git/github/zmyapp/node_modules/amaze-vue/dist

解决办法：需要在根文件里面新建一个文件postcss.config.js ,在里面添加以下代码：

module.exports = { 
  plugins: { 
    'autoprefixer': {browsers: 'last 5 version'} 
  } 
}

```

