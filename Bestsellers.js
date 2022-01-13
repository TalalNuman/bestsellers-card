import React from "react";
const product ={
  width:'311px',
  height:'120px',
  borderRadius: '24px',
}
const productName={
  color:'#FE805C',
}
  function ProductCard(props){
  return  <div style={product} className="flex mx-auto my-2 hover:bg-pink-100">
  <div className="flex w-1/3 items-center justify-center "> <img className="w-4/5 h-20" src={props.image} alt="product-pic"/> </div>
  <div className="flex-col  w-2/3">
  <div style={productName} className="p-2 text-md font-semibold">{props.name}</div>
  <div className="py-1 px-2 text-sm text-gray-500">{props.label}</div>
  <div className="py-1 px-2 text-md font-semibold">{props.price}</div>
  </div>
</div>;
}

const style ={
  backgroundColor: '#FEF2EE',
}
const card={
  height: '498px',
  width: '375px',
  borderRadius: '24px',
}
export default function Card() {
  return (
  <div style={style}  className="flex h-screen items-center justify-center">
      <div style={card} className="bg-white"><h2 className=" p-6 text-3xl font-semibold"> Bestsellers</h2>
        <ProductCard image="" name="Nike Air Max 270" label="Nike" price="$195.80"/>
        <ProductCard image="" name="Nike Air Max 90" label="Nike" price="$195.80"/>
        <ProductCard image="" name="Nike Air Max Plus" label="Nike" price="$195.80"/>
       </div>
  </div>
  )};
  
