import { useState } from 'react'
import { useRef } from 'react'
import React from 'react'
import './TicTocToe.css'
import circle from "../assets/circle.png";
import cross from "../assets/cross.png";

let data=["","","","","","","","",""];

export const TicTocToe = () => {
      
    let [count , setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef=useRef(null);
    let cell1=useRef(null);
    let cell2=useRef(null);
    let cell3=useRef(null);
    let cell4=useRef(null);
    let cell5=useRef(null);
    let cell6=useRef(null);
    let cell7=useRef(null);
    let cell8=useRef(null);
    let cell9=useRef(null);

    let cell_array=[cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9];


    const toggle=(e,num)=>{
       if(lock){
           return 0;
       }
       if(count%2===0){
           e.target.innerHTML= `<img src='${cross}'>`;
           data[num]="x";
           setCount(++count);
       }else{
        e.target.innerHTML= `<img src='${circle}'>`;
           data[num]="o";
           setCount(++count);
       }
       checkWin();
    }

    

    const checkWin=()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
        {
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
        {
           won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
        {
           won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
        {
           won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
        {
           won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
        {
           won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
        {
           won(data[8]);
        }
        else if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
        {   
           won(data[2]);           
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
        {
           won(data[6]);
        }

    }

    const won=(winner)=>{
        setLock(true);
        if(winner==="x")
         {
            titleRef.current.innerHTML=`Congratulations! <img src="${cross}">Win!`;
         }
         else{
            titleRef.current.innerHTML=`Congratulations <img src="${circle}">Win!`;
         }
    }

    const reset=()=>{
        setCount(0);
        setLock(false);
        data=["","","","","","","","",""];
        titleRef.current.innerHTML="Tic-Toc-Toe &nbsp; <span>Game</span>";
        cell_array.map((e)=>{
            e.current.innerHTML="";
        });
    }

  return (
    <div className='container'>
        <h1 className="title" ref={titleRef} >Tic-Toc-Toe &nbsp; <span>Game</span></h1>
        <div className="board">
           <div className="row1">
              <div className="cell" ref={cell1} onClick={(e)=>toggle(e,0)}></div>
              <div className="cell" ref={cell2} onClick={(e)=>toggle(e,1)}></div>
              <div className="cell" ref={cell3} onClick={(e)=>toggle(e,2)} ></div>
           </div>
           <div className="row2">
              <div className="cell" ref={cell4} onClick={(e)=>toggle(e,3)}></div>
              <div className="cell" ref={cell5} onClick={(e)=>toggle(e,4)}></div>
              <div className="cell" ref={cell6} onClick={(e)=>toggle(e,5)}></div>
           </div>
           <div className="row3">
              <div className="cell" ref={cell7} onClick={(e)=>toggle(e,6)}></div>
              <div className="cell" ref={cell8} onClick={(e)=>toggle(e,7)}></div>
              <div className="cell" ref={cell9} onClick={(e)=>toggle(e,8)}></div>
           </div>
        </div>
        <button className='reset' onClick={reset}>Reset</button>

    </div>
  )
}
