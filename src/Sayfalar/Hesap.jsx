import { UserAuth } from '../Bağlantı/HesapBaglantisi';
import React , {useState,useEffect} from "react";
import {AiOutlinePlusCircle} from "react-icons/ai";
import {GiBearFace} from "react-icons/gi";
import Todolist from './Todolist';
import {db} from '../firebase';
import { query,collection, onSnapshot, updateDoc,doc, addDoc,deleteDoc} from "firebase/firestore";


const style={
  ilkDiv: "h-screen w-screen p-4 bg-gradient-to-r from-[#fecaca] to-[#fca5a5]",
  ortakisim: "bg-slate-100 max-w-[600px] w-full m-auto rounded-lg shadow-xl p-6  ",
  baslik: "text-4xl font-medium  text-center text-blue-600/50 p-2",
  form:"flex justify-between",
  input:"border p-3 w-full text-xl",
  button: "border p-3 ml-3 bg-purple-400 text-slate-200",
  bilgi : "text-center p-3 text-[#fda4af] ",
  GiBearFace:"text-purple-600/50 ",
  p:"text-center text-xl  text-[#fda4af]",
  button1:" border py-2 px-5 mt-10 rounded-full bg-blue-500 hover:bg-blue-700 text-white",
  AiOutlinePlusCircle:"text-[#fda4af]"
 

}  


const Account = () => {
  const { cikis, user } = UserAuth();
  const [todoitems, setTodoitems] = useState([]);
  const [input, setInput] = useState('');

  
  const yeniTodoitem = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      alert('You cannot add an empty box to your list!');
      return;
    }
    await addDoc(collection(db, 'todoitems'), {
      text: input,
      completed: false,
    });
    setInput('');
  };

  useEffect(() => {
    const e = query(collection(db, 'todoitems'));
    const o = onSnapshot(e, (querySnapshot) => {
      let todoitemsArr = [];
      querySnapshot.forEach((doc) => {
      todoitemsArr.push({ ...doc.data(), id: doc.id });
      });
      setTodoitems(todoitemsArr);
    });
    return () => o();
  }, []);

  const gecis = async (todoitem) => {
    await updateDoc(doc(db, 'todoitems', todoitem.id), {
      completed: !todoitem.completed,
    });
  };

  const silmekicin = async (id) => {
    await deleteDoc(doc(db, 'todoitems', id));
  };

  const oturumuKapat = async () => {
    try {
      await cikis();
    } catch (error) {
      }
  };

  return (
    <div className={style.ilkDiv} >
      <div  className={style.ortakisim}  > 
      <h3 className={style.baslik}> Simple Todo App </h3>
      <center><GiBearFace className={style.GiBearFace} size={30} /></center>
      <br></br>
      
        <p className={style.p} >Welcome, {user?.displayName}</p>
      
     <center>
      <button className={style.button1} onClick={oturumuKapat}>    
        Logout
      </button>

      </center>
      <br></br>
      
      <form onSubmit={yeniTodoitem} className={style.form} >
          <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder="Add todo"/>
          <button> <AiOutlinePlusCircle className={style.AiOutlinePlusCircle} size={40} />  </button>
        </form>

        <ul>
          {todoitems.map((todoitem,todo)=>
          (<Todolist key={todo} todoitem={todoitem}  gecis={gecis} silmekicin={silmekicin} />)
          )}
          
        </ul>
        <p className={style.bilgi}>{`You have ${todoitems.length} todos`}</p>
      </div>
    </div>
  );
};

export default Account;