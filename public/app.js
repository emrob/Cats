// const app = function(){
//   let catList = document.createElement("ul");
//   catList.classList.add("cat");
//
//   let listName = document.createElement("listName");
//   listName.innerHTML = '<li>Name: Mildred</li>';
//
//   let listFood = document.createElement("listFood");
//   listFood.innerHTML = '<li>Favourite Food: Fish fingers</li>';
//
//   let listImg = document.createElement("listImg");
  // listImg.innerHTML = '<li><img width="500" src="http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"></li>';
//
//   listName.appendChild(listFood);
//   listName.appendChild(listImg);
//
//   catList.appendChild(listName);
//
//   let cats = document.querySelector("#cats");
//   cats.appendChild(catList);
//
//
// }
//
// window.onload = app;


// refactored:
 const createCatList = function(){
   let catList = document.createElement("ul");
   catList.classList.add("cat");
   return catList;
 }

 const createName = function(name){
   let listName = document.createElement("listName");
   listName.innerHTML = name;
   return listName
}

 const createFavFood = function(favFood){
 let listFood = document.createElement("listFood");
 listFood.innerHTML = favFood;
 return listFood;
}

 const createImg = function(img){
 let listImg = document.createElement("listImg");
 listImg.innerHTML = "<li>img</li>";
 return listImg;
}

const appendElements = function(catList, listName, listFood, listImg){
  listName.appendChild(listFood);
  listName.appendChild(listImg);
  catList.appendChild(listName);
  let cats = document.querySelector("#cats");
  cats.appendChild(catList);

}

const addCat = function(name, favFood, img) {
  const catList = createCatList();
  const listName = createName(name);
  const listFood = createFavFood(favFood);
  const listImg = createImg(img);

  appendElements(catList, listName, listFood, listImg);
}

const app = function(){

addCat("<li>Name: Mr Pickles<li>", "<li>Favourite Food: Fish fingers</li>",
'<li>"http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"</li>');

}


window.onload = app;
