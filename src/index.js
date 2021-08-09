import $ from 'jquery'
import './css/index.css';
import './css/index.less';
import ab from './utils/test.js'
console.log(ab)
$(function(){
    $('li:odd').css('backgroundColor', 'pink')
    $('li:even').css('backgroundColor', 'green')
})

class Person {
    static info = 'person info'
}
console.log(Person.info)