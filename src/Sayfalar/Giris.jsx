import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../Bağlantı/HesapBaglantisi';
import { useNavigate } from 'react-router-dom';

const style={
  div:"text-center h-screen w-screen p-4 bg-gradient-to-r from-[#fecaca] to-[#fca5a5]  display grid place-items-center, height 100 width 100 ",
  div2:"max-w-[240px] m-auto py-4 "

}

const Signin = () => {
  const { googleIlegiris, user } = UserAuth();
  const navigate = useNavigate();
  const googleOturumac = async () => {
    try {
      await googleIlegiris();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className={style.div} >
     
      <div className={style.div2}>
        
       
        <GoogleButton className={style.googleButton} onClick={googleOturumac} />    
        
      </div>
    </div>
  );
};

export default Signin;