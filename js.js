document.getElementById("nav").onmouseover = function(event) {  //все элем. в поле нав отследить по мыше
	var target = event.target;  // отслед. где был клик
	if(target.className =="menu-item"){  // если при наведении имя совпадает с именем меню-айтем
		var s = target.getElementsByClassName("submenu"); // то получаем переменную с именем сабменю
		closeMenu();
		s[0].style.display = "block";

	}
}

document.onmouseover=function(event){
	var target= event.target;
	console.log(event.target);
	if (target.className!="menu-item" && target.className!="submenu"){
		closeMenu();
	}
}


// скрываем все подменю
function closeMenu(){
	var subm = document.getElementsByClassName("submenu");
	for (var i=0;i<subm.length;i++){
		subm[i].style.display="none";
	}
}




var tab;
var tabContent;

window.onload=function(){
	tabContent=document.getElementsByClassName("tabContent"); // получим массив класса табконт.
	tab=document.getElementsByClassName("tab"); // получим массив таб
	hideTabsContent(1);  // ф-ция скрытия вкладок
}

function hideTabsContent(a){
	for(var i=a;i<tabContent.length;i++){
		tabContent[i].classList.remove("show");
		tabContent[i].classList.add("hide");
		tab[i].classList.remove("whiteborder");
	}
}

document.getElementById("tabs").onclick=function(event) {
	var target=event.target;
	if(target.className=="tab"){
		for (var i=0;i<tab.length;i++){
			if(target == tab[i]){
				showTabsContent(i);
				break;
			}
		}
	}
}

function showTabsContent(b){
	if(tabContent[b].classList.contains("hide")){
		hideTabsContent(0);
		tabContent[b].classList.remove("hide");
		tabContent[b].classList.add("show");
	}
}