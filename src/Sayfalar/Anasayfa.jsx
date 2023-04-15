import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../Bağlantı/HesapBaglantisi';
import {GiBearFace} from "react-icons/gi";
import {BsStars} from "react-icons/bs";

const style={
  div:" text-center h-screen w-screen p-4 bg-gradient-to-r from-[#fecaca] to-[#fca5a5]",
  div2 :"bg-slate-100 max-w-[600px] w-full m-auto rounded-lg shadow-xl p-6",
  div3:" max-w-[600px] w-full m-auto rounded-lg shadow-xl p-6 bg-[#fecaca]",
  h1:"text-center font-sans text-4xl text-[#fb7185] p-2 ",
  h2:"text-center  font-sans text-2xl text-[#fb7185] p-2 ",
  link:"text-center  font-sans text-2xl text-[#fb7185] p-2 rounded-lg  p-3 bg-[#fff1f2] ",
  GiBearFace:"text-purple-600/50 ",
  baslik:"text-4xl font-medium  text-center text-blue-600/50 p-2",
  BsStars:"text-white ",
  BsStars2:"text-white"
}


const Anasayfa = () => {
  const { user, cikis } = UserAuth();
  

  const oturumuKapat = async () => {
    try {
      await cikis()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className={style.div} >
      <div className={style.div2}  >     
      <h3 className={style.baslik}> Simple Todo App </h3>
      <center><GiBearFace className={style.GiBearFace} size={30} /></center>
      <br></br>
      <div className={style.div3} >
      <BsStars className={style.BsStars} size={50}/>
        <h1 className={style.h1}>  Welcome !</h1>
        <br></br>    
      <h2 className={style.h2}  > Are You Ready To Plan Your Day?</h2> 
      {user?.displayName ? (
        <button onClick={oturumuKapat}>Logout</button>
      ) : (
        <div>
          <br></br> <br></br>
          <Link className={style.link} to='/signin'> Click : Sign In</Link>
          <BsStars className={style.BsStars2 } size={50} />
          </div>
      )}

      
       </div>
      </div>
      


    </div>
  )
}

export default Anasayfa