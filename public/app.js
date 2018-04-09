const app = function(){
  let catList = document.createElement("ul");
  catList.classList.add("cat");

  let listName = document.createElement("listName");
  listName.innerHTML = '<li>Name: Mildred</li>';

  let listFood = document.createElement("listFood");
  listFood.innerHTML = '<li>Favourite Food: Fish fingers</li>';

  let listImg = document.createElement("listImg");
  listImg.innerHTML = '<li><img width="500" src="http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"></li>';

  listName.appendChild(listFood);
  listName.appendChild(listImg);

  catList.appendChild(listName);

  let cats = document.querySelector("#cats");
  cats.appendChild(catList);


}

window.onload = app;
