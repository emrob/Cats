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
   let ul = document.createElement("ul");
   ul.classList.add("cat");
   return ul;
 }

 const createName = function(name){
   let listName = document.createElement("li");
   listName.innerHTML = name;
   return listName
}

 const createFavFood = function(favFood){
 let listFood = document.createElement("li");
 listFood.innerHTML = favFood;
 return listFood;
}

 const createImg = function(photo){
 let listImg = document.createElement("li");
 listImg.innerHTML = "<img width='500' src=photo >";
 return listImg;
}


const appendElements = function(ul, listName, listFood, listImg){
  listName.appendChild(listFood);
  listName.appendChild(listImg);
  ul.appendChild(listName);
  let cats = document.querySelector("#cats");
  cats.appendChild(ul);

}

const addCat = function(name, favFood, photo) {
  const ul = createCatList();
  const listName = createName(name);
  const listFood = createFavFood(favFood);
  const listImg = createImg(photo);

  appendElements(ul, listName, listFood, listImg);
}


window.onload = function(){
addCat("Name: Mr Pickles", "Favourite Food: Fish fingers",
"http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg");

};
