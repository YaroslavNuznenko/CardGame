var str='';
var img=['img/b0.jpg','img/b1.jpg','img/b2.jpg','img/b3.jpg','img/b4.jpg',
		'img/b0.jpg','img/b1.jpg','img/b2.jpg','img/b3.jpg','img/b4.jpg'];
var mas=[1,2,3,4,0,1,2,3,4,0];
mas =shuffle(mas);
$(function(){
	setField();
	var clickCheck=0;
	$('.flip-container').on('click',function(){
		$(this).toggleClass('hover');

		clickCheck++;
		if(clickCheck==2){
			setTimeout(checkFun,500);
			clickCheck=0;
		}
	});

});
function setField(){
	str+="<tr>";
		for (var i = 0,j=0; i < 10; i++,j++) {
			str+="<td class= 'flip-container' data-num='img"+mas[j]+"'>\
			<div class='flipper '><div class='front'><img src='img/card-back.jpg'></div>\
			<div class='back'><img src="+img[mas[j]]+"></div></div></td>";
			if(i==4){
				str+="</tr><tr>";
			}
		}
		str+="</tr>";
		$('table').append(str);
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function checkFun() {

	var mas=$('.hover');
	console.log(mas);
	if($(mas[0]).attr('data-num')!=$(mas[1]).attr('data-num')){
		$(mas[0]).removeClass('hover');
		$(mas[1]).removeClass('hover');
	}
	else{
		$(mas[0]).remove();
		$(mas[1]).remove();
	}
	mas=[];
}
