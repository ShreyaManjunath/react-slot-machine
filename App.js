import React from 'react';


const SlotM =(props) =>{

  if(props.x===props.y && props.x===props.z){
    return(
      <>
      <div className="slot_inner">
        <h1>{" "} {props.x} {props.y} {props.z} {""}</h1>
        <h1>This is Matching.</h1>
        <hr />
      </div>
      </>
    )
  }
  else{
    return(
      <>
      <div className="slot_inner">
        <h1>{" "} {props.x} {props.y} {props.z} {""}</h1>
        <h1>This is not Matching.</h1>
        <hr />
      </div>
      </>
    )
  }
}

const App = () =>{
  return(
    <>
    <h1 className="heading_style  ">⭐️Welcome to <span style={{fontWeight:"bold"}}>Slot Machine Game ⭐️</span></h1>
    <div className="slot_machine">
    <SlotM x='🎅' y='🎅' z='🎅' />
    <SlotM x='😏' y='🤧' z='😭'/>
    <SlotM x='🍑' y='🍎' z='🍉' />
    <SlotM x='🐵' y='🐵' z='🐵'/>
   
    </div>
    </>
  )
};


export default App;
