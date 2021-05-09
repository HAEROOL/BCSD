var register = document.getElementById('register')
register.addEventListener('click',setRegister)
function setRegister(){
    var regi = document.register_form;
    var member = new Object()
    var uid = regi.form_id.value
    var upw = regi.form_pw.value
    var uname = regi.form_name.value
    var ubirth = regi.date.value
    member.name = uname
    member.birth = ubirth
    member.id = uid
    member.pw = upw
    
    fetch('./test.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(loadedJSON){
        console.log(JSON.stringify(loadedJSON));
        if(!uid||!upw||!uname||!ubirth){
            alert('모두 입력해 주세요')
        }
        else if(!regi.form_agree.checked){
            alert('동의합니다에 체크해주세요')
        }
        else{
            var mem_list = Object.values(loadedJSON)
            console.log(mem_list)
            for(var i=0;i<mem_list.length;i++){
                if (mem_list[i]['id'] == member.id){
                    alert('id가 같습니다')
                    return
                }
            }
            mem_list.push(member)
            console.log(mem_list)
        }
    });
    
}
