const visNum = document.querySelector(".visitorNum")
setInterval(()=>{
    axios.post("http://172.16.202.101:80/visitor/get-visitor",{
        title:"main"
    },{auth:{
        username:"fumi20080916",
        password:20080916
    }}).then((res)=>{
        visNum.textContent = res.data.data.counter + "人"
    })
},30000)