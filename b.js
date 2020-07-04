const {add,mul} = require('./a') //引入a.js中的加法和乘法
const _ = require('lodash')
const sum = add(10,20) 
const multy = mul(100,200) 
console.log(sum) //打印和
console.log(multy)//打印积

const arr = _.concat([1,2],3)
console.log('arr...',arr)