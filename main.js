const visNum = document.querySelector(".visitorNum")
setInterval(()=>{
    axios.post("http://localhost:3000/visitor/get-visitor",{
        title:"main"
    },{auth:{
        username:"fumi20080916",
        password:20080916
    }}).then((res)=>{
        visNum.textContent = res.data.data.counter
    })
},30000)