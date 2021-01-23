let btnadd=$('#btnadd')
let btnsort=$('#btnsort')
let btnclear=$('#btnclear')
let btnremove=$('#btnremove')
let inpbox=$('#inpbox')
let data=$('.data')
// let item=$('.item')


function additems(){
    if(inpbox.val()=="")return
    let item=$('<li>',{
        'class':'item',
        text:inpbox.val()
    })
    item.click(function(){
        // $(this).css('background-color','green')
        // $(this).css('border','green')
        item.toggleClass('change')
    })
    data.append(item);
    inpbox.val('')
}
inpbox.keypress(function(e){
    if(e.which==13){
        additems()
    } // there e--event and e.which return ascii code of code presed for enter 
    //it is 13
})
btnadd.click(additems)

btnremove.click(function(){
    $('.data .change').remove()
    //just removed the li which is inside the data with class change
})
btnclear.click(function(){
    $('.data').empty()
})
function sort(){
    $('.data .change').appendTo('.data')
}
btnsort.click(sort)

