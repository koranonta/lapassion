var cart = []

const clearCart = () => {
  cart = []
}

const addToCart = (_id) => {
  //console.log(_id)
  //console.log(cart)
  const item = cart.find(elem => elem.id === _id)
  //console.log(item)
  if (item === undefined) {
    //console.log("New item -> add to cart")
    const selItem = productList.filter(item => {
        if (item.id === _id) return item
        return null
    })

    cart.push({
        id: selItem[0].id
       ,title: selItem[0].title
       ,price: selItem[0].price
       ,quantity: 1
       ,amount: selItem[0].price
    })

    console.log(cart)
    showBasket()
  }
  else {    
    console.log("item " + _id + " already exist in cart")
  }
}

const checkOut = async () => {
  let buf = ""
  let total = 0.0
  cart.forEach ((item, index) => {
    buf += (index + 1) + ". " + item.title + " " + item.quantity + " " + item.price + "\n"
    total = total += (+item.price * +item.quantity)
    //console.log(index, item.title, item.quantity, item.price)
  })
  buf += "  Total : " + total
  
  
  

  const payload = {
     "to": "U935a342b62b063750714fd93511a54e8",
     "message": buf
  }

/*  
  const url = 'http:/localhost:3001/pushmessage'

  const resp = await fetch(url, {
    method: 'POST',
	mode: 'cors',
	headers: {
	  'Content-Type': 'application/json'
	},
	body: payload
  })
  console.log(resp.json())
*/
/*
console.log(axios.getUri())

axios.post('http:/localhost:3001/pushmessage', payload)
    .then(response => console.log (response.data) )
    .catch(error => {        
        console.error('There was an error!', error);
    });
*/


  console.log( payload )
  
//  const instance = axios.create ({
//  })
  
const instance = axios.create({
     headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
     },

});

  
  
//  instance.defaults.baseURL = "http:/localhost:3001/"
/*
  console.log ( "change URL", instance.defaults.baseURL )
  let res = await instance({
     method: 'post',
     url: 'http://localhost:3001/pushmessage',
     data: payload
  })
  
  //console.log( instance. )
  
  //let res = await instance.post('pushmessage', payload)
  let data = res.data
  console.log(data)
*/
  
  //console.log ( "change URL", instance.defaults.baseURL )
  let res = await instance({
     method: 'get',
     url: 'localhost:3001/test',
  })
  
  //console.log( instance. )
  
  //let res = await instance.post('pushmessage', payload)
  let data = res.data
  console.log(data)

  

}

const getTableRow = (item) => {
   return `<tr>
     <td>${item.title}</td>
     <td>${item.price}</td>
     <td>${item.quantity}</td>
     <td>${item.amount}</td>  
   <tr>`
}

const showBasket = () => {
  if (cart !== []) {
    const cartDiv = document.getElementById("cart-summary");
    const tabHeader = `
    <table>
      <tr>
        <th>Title</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Amount</th>
      </tr>
    `
    let tabBody = ""
    let totalCart = 0
    cart.forEach(item => {
      tabBody += getTableRow(item)
      totalCart += +item.price
    })
    const total=`<tr><td></td><td></td><td><b>Total</b></td><td><b>${totalCart}</b></td></tr>`
    const checkOut = `<tr><td></td><td></td>
	  <td><a href="javascript:checkOut()">Checkout</i></a>
	</td><td></td></tr>`

    cartDiv.innerHTML = tabHeader + tabBody  + total + checkOut + "</table>"

  }
}