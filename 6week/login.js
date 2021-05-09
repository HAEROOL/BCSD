var login = document.getElementById('login_info')
login.addEventListener('click',ex_login)
function ex_login(){
    var info = document.login_form
    var id  = info.login_id.value
    var pw = info.login_pw.value
    console.log(id,pw)
    if (!id||!pw){
        alert('다시 입력해주세요')
    }
    else{
        fetch('./test.json')
        .then(function(response) {
        return response.json();
        })
        .then(function(loadedJSON){
            console.log(JSON.stringify(loadedJSON));
            if(!id||!pw){
                alert('모두 입력해 주세요')
            }
            else{
                var mem_list = Object.values(loadedJSON)
                console.log(mem_list)
                for(var i=0;i<mem_list.length;i++){
                    if (mem_list[i]['id'] == id){
                        if (mem_list[i]['pw'] == pw){
                            alert('로그인 성공!')
                                window.location.href = "./board.html";
                                return
                        }
                        else{
                            alert('잘못된 비밀번호')
                            return
                        }
                    }
                }
                alert('잘못된 id')
                return
            }
        });
    }
}