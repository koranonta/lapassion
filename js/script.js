const createDiv = (_classAttr) => {
  const domElem = document.createElement("div")
  domElem.setAttribute("class", _classAttr)
  return domElem
}



const createCard = (_id, _imgUrl, _title, _subTitle, _price) => {
  const topDiv = createDiv("col-md-4 mt-2")
  const card = createDiv("card")
  topDiv.appendChild(card)
  const cardBody1 = createDiv("card-body")
  card.appendChild(cardBody1)  
  const cardImg = createDiv("card-img-actions")
  const image = document.createElement("img")
  cardBody1.appendChild(image)
  image.setAttribute("src", "./img-thumb/" + _imgUrl)
  image.setAttribute("class", "card-img img-fluid")
  image.setAttribute("width", "350")
  image.setAttribute("height", "350")
  
  const cardBody2 = createDiv("card-body bg-light text-center")
  card.appendChild(cardBody2) 
  const cardInfo = createDiv("mb-2")
  cardBody2.appendChild(cardInfo)
  const msg01 = document.createElement("h4")
  msg01.setAttribute("class","font-weight-semibold mb-2")
  cardInfo.appendChild(msg01)
  const titleElem = document.createElement("a")
  titleElem.setAttribute("href", "#")
  titleElem.setAttribute("class", "text-default mb-2")
  titleElem.setAttribute("data-abc", "true")
  var text = document.createTextNode(_title);
  titleElem.appendChild(text)
  msg01.appendChild(titleElem)

  const msg02 = document.createElement("h6")
  const subTitleElem = document.createElement("a")
  cardInfo.appendChild(msg02)
  msg02.appendChild(subTitleElem)
  subTitleElem.setAttribute("href", "#")
  subTitleElem.setAttribute("class", "text-muted")
  subTitleElem.setAttribute("data-abc", "true")
  text = document.createTextNode(_subTitle);
  subTitleElem.appendChild(text)


  const priceSpan = document.createElement("span")  
  const msg03 = document.createElement("h3")
  cardBody2.appendChild(msg03)
  msg03.setAttribute("class", "mb-0 font-weight-semibold")
  text = document.createTextNode("฿ " + _price);
  msg03.appendChild(text)
  
  const buyBtn = document.createElement("a")
  buyBtn.setAttribute("href", "javascript:addToCart(" + _id + ")")
  buyBtn.innerHTML = '<i class="fa fa-shopping-cart" aria-hidden="true"></i>'
  
  priceSpan.appendChild(msg03)
  priceSpan.appendChild(buyBtn)
  cardBody2.appendChild(priceSpan)



/*
  const msg03 = document.createElement("h3")
  cardBody2.appendChild(msg03)
  msg03.setAttribute("class", "mb-0 font-weight-semibold")
  text = document.createTextNode("฿ " + _price);
  msg03.appendChild(text)
  cardBody2.appendChild(msg03)
*/
  //console.log("image Url: ", _imgUrl)
  //console.log("title: ", _title)
  //console.log("subTitle: ", _subTitle)
  //console.log("_price: ", _price)
  return topDiv
}

const filterCategory = (_filter) => {
  console.log(_filter)
  const domElem = document.getElementById("mainDiv")
  while (domElem.firstChild) {
    domElem.removeChild(domElem.lastChild);
  }
  let list = productList
  if (_filter !== "") {
    list = productList.filter(elem => {
       if (elem.catg === _filter) return elem
       else return null
   })
  }
  list.forEach (elem => {
     domElem.appendChild( createCard(elem.id, elem.imgUrl, elem.title, elem.subTitle, elem.price) )
  })

}

const addCard = () => {
  const domElem = document.getElementById("mainDiv")
  //console.log( domElem )
  //domElem.appendChild( createCard("IMG_7490.JPG", "Caramel crunchy almond", "piece", "350.00") )
  productList.forEach (elem => {
     domElem.appendChild( createCard(elem.id, elem.imgUrl, elem.title, elem.subTitle, elem.price) )
  })

//  const topDiv = document.createElement("div")
//  topDiv.setAttribute("class", "col-md-4 mt-2")
//  const tag = document.createElement("p");
//  const text = document.createTextNode("Tutorix is the best e-learning platform");
//  tag.appendChild(text);
//  topDiv.appendChild(tag)
//  domElem.appendChild(topDiv)

}