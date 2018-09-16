import axios from 'axios';
import axiosRetry from 'axios-retry';
import moment from 'moment';

axiosRetry(axios, { retries: 4}); 

export default function loginUser(successLogin,errorLogin,data){   
  const URL=`/db/users.json`;
  const config={
   method:"get",
   url:URL,
  };
  axios(config).then((response)=>{
   successLogin(response);
  }).catch(function(error){
    errorLogin(error);
  });

}