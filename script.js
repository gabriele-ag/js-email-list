// console.log("ciao")

const elemList = document.querySelector('.list-mail')
const btnList = document.querySelector('#new-list-mail')


let mail = ""
for (let i = 0; i < 10; i++ ) {
    axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
            console.log(resp)
            const elemMail = resp.data.response
            mail += `<li>${elemMail}</li>`   
            elemList.innerHTML = mail         
        })
}

btnList.addEventListener("click", (event) => {
    event.preventDefault()
    for (let i = 0; i < 10; i++ ) {
    axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
            console.log(resp)
            const elemMail = resp.data.response
            mail += `<li>${elemMail}</li>`   
            elemList.innerHTML = mail         
        })
}
})
