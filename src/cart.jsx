import './App.css';
import React from 'react';


function Cart(){
    var cart = [
        {
            id: 1,
            title: 'Samsung Galaxy S7',
            price: 599.99,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4H6WNg6zKckgHDiYH7O1ZdgkrW2Cc5YC2PQ&usqp=CAU',
            amount: 1,
        },
        {
            id: 2,
            title: 'google pixel ',
            price: 499.99,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07DvC-ql_t8rhd89SpSE3WgXfMJgDQ35YBQ&usqp=CAU',
            amount: 1,
        },
        {
            id: 3,
            title: 'Xiaomi Redmi Note 2',
            price: 699.99,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_u57RHBWmIk04dg7t6rlwr-WmGidTCqSKqw&usqp=CAU',
            amount: 1,
        },
        {
            id: 4,
            title: 'Xiaomi 12pro | 5G',
            price: 799.99,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGykE1UOQ0W7W4e2Hh01BNZIwqh8JpFKZY9d3P8CX0aUwA-hG5JmVBdfmmQGdR90sKuQ&usqp=CAU',
            amount: 1,
        }
    ];
    var [carts,setCarts] = React.useState(cart);
    function del(index){
        var x = [...carts];
        x.splice(index,1);
        setCarts(x);
    }
    function inc(a){
        a.amount = a.amount+1;
        setCarts([...carts]);
    }
    function dec(a,i){
        if(a.amount>1){
            a.amount = a.amount-1;
            setCarts([...carts]);
        }
        else{
            carts.splice(i,1);
            setCarts([...carts]);
        }
    }
    function clear(){
        setCarts([]);
        document.getElementById("line").style.display="none";
        document.getElementById("total").style.display="none";
        document.getElementById("clear").style.display="none";
    }
  return (
    <div className="App">
        <div style={{backgroundColor:"skyblue",height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h1>Use Reducer</h1>
            <div style={{marginLeft:"700px",fontSize:"30px"}}>
                <span>{carts.reduce((x,y)=>x+y.amount,0)}</span>
            </div>
        </div>
        <h1>Your Bag</h1>
            {
                carts.map((a,i)=>{
                    return (
                        <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",}}>
                            <div>
                                <img src={a.img} alt="" width="100px" height="150px"/>
                            </div>
                            <div>
                                <div>
                                    <h4>{a.title}</h4>
                                    <p>{"$"+a.price}</p>
                                    <button id="btn1" onClick={(i)=>{del(i)}}>remove</button> 
                                </div>    
                            </div>
                            <div style={{textAlign:"center"}}>
                                <div>
                                    <button id="btn2" onClick={()=>{inc(a)}}>+</button>
                                </div>
                                <div>
                                    <span id="cnt">{a.amount}</span>
                                </div>
                                <div>
                                    <button id="btn3" onClick={()=>{dec(a,i)}}>-</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        <div id="line" style={{border:'1px solid'}}></div>
        <div id="total" style={{display:"flex"}}>
            <div style={{marginLeft:'300px',marginRight:'300px',fontSize:'20px',fontWeight:'bold'}}>
                <p>Total Price</p>
            </div>
            <div style={{marginRight:'300px'}}>
                <p>=</p>
            </div>
            <div>
                <p>$ {carts.reduce((x,y)=>x+y.amount*y.price,0)}</p>
            </div>
        </div>
        <div id="clear" style={{marginBottom:'30px'}}>
            <button  style={{width:'100px',height:'50px',backgroundColor:'none',border:'1px solid red',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{clear()}}>Clear Cart</button>
        </div>
    </div>
  );
}

export default Cart;
