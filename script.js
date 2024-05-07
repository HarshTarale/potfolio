
 const option =[{
  usename:"portfolio",
  password:"pass"
 }]
       
  const userDetailsLogin =async()=>{
    const userName=document.getElementById("username").value;
    const passWord=document.getElementById("password").value;
    const errermsg = document.getElementById("error-message")


   
   
     if(userName===""&&passWord ===""){
        errermsg.innerText="Inter The Input";                  
    }else if (userName===option[0].usename&&passWord==option[0].password){
      errermsg.innerText="";
      console.log("allcomeplet")
        window.location.href="component/home/home.html";
    }else{
      errermsg.innerText="username and password not match"
    }
}



    







