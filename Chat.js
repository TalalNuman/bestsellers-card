import React from "react";

const style ={
  backgroundColor: '#FEF2EE',
}
const upperCard ={
  height: '154px',
  width:  '375px',
  backgroundColor: '#4643D3',
  borderRadius: '24px 24px 0 0',
}
const lowerCard={
  position: 'absolute',
  height: '58px',
  width:  '375px',
  backgroundColor: '#FFF',
  borderRadius: '0 0 24px 24px',
}
const btn={
  text : '18px',
  color: '#4643D3',
  height: '18px',
width: '60px',
left: '450px',
top: '289px',
}
const inputStyle={
  borderRadius: '0 0 0 24px'
}
const paragraph={
  position: 'relative' 
}
 const Chat = (props)=> {
  return (
  <div style={style} className="flex flex-col h-screen items-center justify-center">
    <div style={upperCard} className=" ">
    <div class="flex pt-5 pl-8">
          <img class="w-12 h-12 rounded-full mr-4" src={props.image} alt="profile-pic"/>
          
          <div class="text-sm">
            <h3 class="text-lg text-white">{props.name}</h3>
            <p class="text-gray-500 leading-loose">{props.label}</p>
          </div>
          <button className="ml-auto pr-8 -mt-6"> <img style={{width:'22px'}} src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-cancel-mintab-for-ios-becris-lineal-becris.png" alt='cancel'/> </button>
        </div>
        

    <div style={paragraph} className=" px-8 py-3 text-white">
    {props.message}
    </div>

    </div>
    <div style={lowerCard} className="py-3">
    <input style={inputStyle} className="px-10" placeholder="Type your message..."/>
    <button style= {btn} className=" font-semibold px-10">Send</button>
    </div>
     </div>
  );
}
export default Chat;
