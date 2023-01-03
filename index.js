// to do: 
//[] define important variables 
//[] create basic gameboard using js
//[] disk movement (stack one to stack two)
const columns = document.getElementsByClassName('.col'); 
const winningColumns = document.getElementsByClassName('.c2,.c3'); 
let rings;    
const c1 = document.getElementsByClassName('.c1'); 
const c2 = document.getElementsByClassName('.c2'); 
const moves = document.getElementsByClassName('.moves'); 
const reset = document.getElementById('#reset'); 
const levelButton = document.getElementsByClassName('.level'); 
const arrows = document.getElementsByClassName('.arrow'); 

const game = {
    rings: 4, 
    moves: 0, 
    active: false,
    originCol: {},
    targetCol: {}, 
    moverId: 0, 
    targetId: 0, 
    over: true, 
    registerEvents: function (){
        columns.on('click', function (){
            if(!game.over){
                game.click($(this));
            }
        });
        columns.mouseenter(function(){
            if(!game.active){
                this.children('.ring').eq(0).addClass('hover'); 
            } else {
                game.moveRing($(this)); 
            }
        }) 
        columns.mouseleave(function(){
            this.children('.ring').eq(0).removeClass('hover'); 
        })

    },
    

}
