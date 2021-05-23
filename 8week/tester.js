const addLocal = document.querySelector('#addLocal'),
    addSession = document.querySelector('#addSession'),
    showLocal = document.querySelector('#showLocal'),
    showSession = document.querySelector('#showSession'),
    deleteLocal = document.querySelector('#deleteLocal'),
    deleteSession = document.querySelector('#deleteSession'),
    makeCookie = document.querySelector('#makeCookie')

addLocal.addEventListener('click',()=>{
    var key = document.querySelector('#local_key').value
    var value = document.querySelector('#local_value').value
    localStorage.setItem(key,value)
})

addSession.addEventListener('click',()=>{
    var key = document.querySelector('#session_key').value
    var value = document.querySelector('#session_value').value
    sessionStorage.setItem(key,value)
})

showLocal.addEventListener('click',()=>{
    const display = document.querySelector('#displayLocal')
    var len = localStorage.length
    if(len==0){
        alert('Local Storage is empty')
    }else{
        for(let i=0;i<len;i++){
            var key_val = localStorage.key(i)
            var value = localStorage.getItem(key_val)
            var text = document.createTextNode('key는 '+key_val+', value는 '+value+'입니다.')
            var br = document.createElement('br')
            display.appendChild(text)
            display.appendChild(br)
        }
    }
    
})

showSession.addEventListener('click',()=>{
    const display = document.querySelector('#displaySession')
    var len = sessionStorage.length
    if(len==0){
        alert('Session Storage is empty')
    }else{
        for(let i=0;i<len;i++){
            var key_val = sessionStorage.key(i)
            var value = sessionStorage.getItem(key_val)
            var text = document.createTextNode('key는 '+key_val+', value는 '+value+'입니다.')
            var br = document.createElement('br')
            display.appendChild(text)
            display.appendChild(br)
        }
    }
})

deleteLocal.addEventListener('click',()=>{
    localStorage.clear()
})
deleteSession.addEventListener('click',()=>{
    sessionStorage.clear()
})

function setCookie(name,value,exp){
    var date=new Date()
    date.setTime(date.getTime()+exp*24*60*60*1000)
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path-/'
}

makeCookie.addEventListener('click',()=>{
    var name = document.querySelector('#cookie_key').value
    var value = document.querySelector('#cookie_value').value
    setCookie(name,value,7)
})