export default () => {
    const main = document.querySelector('.main')
    const btnSubmit = document.querySelector('.btnSubmit')
    const text = document.querySelector('.text')
    const ex = document.querySelector('.ex')

    let list = new Array
    let existingT = true

    const existing = () => {
        existingT = false
        if (list.indexOf(text.value) > -1) return existingT = true
    }

    function view() {
        var li = document.createElement('li')
        li.setAttribute('class', 'li')
        main.appendChild(li)
        li.innerHTML = `<img src="img/lixeira.png" height='17px' onclick='exc(this)'> ${text.value}`
    }

    function clean() {
        text.value = clean
    }

    function exc(e) {
        let confirmm = confirm('Tem certeza que quer excluir?')
        if (confirmm == true) e.parentNode.outerHTML = ''
    }

    let save = () => {
        localStorage.setItem('tarefa', list)
    }

    function checks() {
        if (existingT == false) {
            if (list[0] == '') list.splice(0, 1)
            list.push(text.value)
            localStorage.tarefa = list
        }

        if (text.value === '') {
            alert('Tarefa em branco!')
            list.splice(list.indexOf(''), 1)
        }

        if (existingT === false && text.value != '') {
            save()
            const del = document.createElement('button')
            del.value = text.value
            view()
        } else {
            alert('A tarefa já existe!')
            text.value = ''
        }
    }

    btnSubmit.onclick = (e) => {
        existing()
        checks()
        text.value = ''
    }

    //exemplos de tarefas
    if (localStorage.tarefa != undefined) {
        ex.style.display = 'none'
    } else {
        alert('Basta clicar na caixa de texto p/ remover os exemplos')
    }

    text.onclick = () => {
        ex.style.display = 'none'
    }

    function createLStorage() {
        if (localStorage.tarefa != undefined) {
            list = localStorage.getItem('tarefa').split(",")

            for (let i = 0; i < list.length; i++) {
                const li = document.createElement('li')
                li.setAttribute('class', 'li')
                main.appendChild(li)
                li.innerHTML = `<img src="img/lixeira.png" height='17px' onclick='exc(this)'>  ${list[i]}`
            }
        }
    }

    window.onload = () => {
        createLStorage()
    }
}