console.log("ciao")

const elemList = document.querySelector('.list-mail')


let mail = ""
for (let i = 0; i < 10; i++ ) {
    axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
            console.log(resp)
            const elemMail = resp.data.response
            mail += `<div class="list-mail">
                        <ul>
                            <li>${elemMail}</li>
                        </ul>    
                    </div>`

            if (i = 9) {
                elemList.innerHTML = mail
            }           
        })
}

