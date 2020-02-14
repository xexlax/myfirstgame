var posOfCells=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var posVal=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
var blank=16;
function initial() {
fill();
dice();
}
function fill() {
    let r=Math.floor(Math.random()*7)+2
    for(let i=1;i<16;i++){
        let domObj =document.getElementById('c'+i);
        domObj.style.backgroundImage='url(pic'+r+'.jpg)';
        domObj.innerText=i;
    }}


function move(num){
    realMove(num);
    if(win())gameOver();
}
function realMove(num){
    if(num>15||num<1)return;
    if(canMove(posOfCells[num-1])){

        posVal[blank-1]=num; //空位上的值变为新块的值
        posVal[posOfCells[num]-1]=0; //块移动前的位置上的值变为0
        let domObj =document.getElementById('c'+num);
        domObj.style.left=getLeft(blank)+'px';
        domObj.style.top=getTop(blank)+'px';
        let temp=blank;
        blank=posOfCells[num-1];
        posOfCells[num-1]=temp;


    }
}

function canMove(num){

    if(blank===num+1||blank===num-1){
        if(blank+num===9||blank+num===17||blank+num===25)return false;
        else return true;
    }
    if(blank===num+4||blank===num-4){return true;}
    return false;
}

function getLeft(x){
    return 100*((x-1)%4);
}
function getTop(x){
    return 100*(Math.floor((x-1)/4));
}


function dice(){

for(let i=0;i<2000;i++){
  reverse();
}


    let d=document.getElementById('finish');
    d.style.display='none';
}
function reverse(){
    let r=Math.floor(Math.random()*15);
    realMove(r+1);

}
function win(){
    for(let i=0;i<15;i++)

        {if (posOfCells[i]!==i+1) return false;}
    return true;
}

function gameOver(){
    let d=document.getElementById('finish');
    d.style.display='inline';
    for(let i=1;i<16;i++){
        let domObj =document.getElementById('c'+i);
        domObj.innerText='';}


}
window.onload=function(){
   initial();
}