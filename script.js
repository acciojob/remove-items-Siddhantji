//your JS code here. If required.
let a = document.getElementById("colorSelection");
let b = document.querySelector("input[type='button']");

b.addEventListener("click",function (params) {
	const s = a.selectedIndex;
	if(s !== -1){
		a.remove(s);
	}
	else{
		alert('please select an option to remove');
}
});
