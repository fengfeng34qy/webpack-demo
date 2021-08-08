import $ from 'jquery'
import './css/index.css';
import './css/index.less';
$(function(){
    $('li:odd').css('backgroundColor', 'pink')
    $('li:even').css('backgroundColor', 'green')
})