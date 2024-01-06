 const wraper = document.querySelector('.sliderwrapper');
 const menuitems = document.querySelectorAll('.menuitem');

const products = [
    {
        id:1,
        title:'Air Force',
        price: 119,
        colors:[
            {
                code:'black',
                img:"imgs/air.png",
            },
            {
                code:"darkblue",
                img:"imgs/air2.png",
            },
        ],
    },
    {
        id:2,
        title:'Air Jordan',
        price: 149,
        colors:[
            {
                code:'lightgray',
                img:"imgs/jordan.png",
            },
            {
                code:"green",
                img:"imgs/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
          {
            code: "lightgray",
            img: "imgs/blazer.png",
          },
          {
            code: "green",
            img: "imgs/blazer2.png",
          },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
          {
            code: "black",
            img: "imgs/crater.png",
          },
          {
            code: "lightgray",
            img: "./imgs/crater2.png",
          },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
          {
            code: "gray",
            img: "imgs/hippie.png",
          },
          {
            code: "black",
            img: "imgs/hippie2.png",
          },
        ],
    },

];



let choosenproduct = products[0]

const currentproductimg = document.querySelector('.productImg');
const currentproducttitle = document.querySelector('.productTitle');
const currentproductprice = document.querySelector('.productPrice');
const currentproductcolors = document.querySelectorAll('.color');
const currentproductsizes = document.querySelectorAll('.size');








 

menuitems.forEach(( item , index) => {
    item.addEventListener("click", function () {
           //change the current slide
            wraper.style.transform = `translateX(${-100 * index}vw)`;
            //change the choosen product 
          choosenproduct = products[index]

           //chnage texts of current product
          currentproducttitle.textContent = choosenproduct.title;
          currentproductprice.textContent = "$" + choosenproduct.price;
          currentproductimg.src = choosenproduct.colors[0].img;
          // assining new colors
          currentproductcolors.forEach((color , index) => {
            color.style.background = choosenproduct.colors[index].code;
          });
        });
      
});
currentproductcolors.forEach((color , index) => {
  color.addEventListener('click', ()=>{
    currentproductimg.src=choosenproduct.colors[index].img

  }) 
});

currentproductsizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentproductsizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productbutton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');


productbutton.addEventListener('click',()=>{
  payment.style.display='flex'
  
});

close.addEventListener('click',()=>{
  payment.style.display='none'
  
});
 
 
