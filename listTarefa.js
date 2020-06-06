const doc = document
const divPai = doc.querySelector('#divPai'), botaoEnviar = doc.querySelector('#botaoEnviar')
const campoText = doc.querySelector('#textoTarefa')
let tarefasArray = []
let QntTarefPermitida = true
let i = 0
let jaExiste;


if (localStorage.tarefa != undefined) tarefasArray = localStorage.getItem('tarefa').split(",")

botaoEnviar.addEventListener('click', (e) => {
    tarefaExistente(...tarefasArray)
    //add o elemento na array
    if (tarefasArray[7]) {
        alert('Você utrapassou o número máximo de tarefas permitida!')
        campoText.value = ''
        return QntTarefPermitida = false;
    }

    if (QntTarefPermitida == true && jaExiste == false) {
        if (tarefasArray[0] == '') tarefasArray.splice(0, 1)
            tarefasArray.push(campoText.value)
            localStorage.tarefa = tarefasArray
    }

    if (campoText.value === '') {
        alert('Tarefa em branco!')
        tarefasArray.splice(tarefasArray.indexOf(''), 1)

    } else if (jaExiste === false) {
        salvandoTarefas()
        //criando botão excluir
        const buttonExcluir = doc.createElement('button')
        buttonExcluir.id = 'btn_Excluir'
        buttonExcluir.value = campoText.value
        conf_ButtonExclui(buttonExcluir)
        cria_Exibe_Exclui(buttonExcluir, tarefasArray)
        campoText.value = ''
        
    } else if (jaExiste == true) {
        alert('A tarefa já existe!')
        campoText.value = ''
    }
})

function cria_Exibe_Exclui(btn_Excluir, tarefasArray) {
    const ul = doc.createElement('ul'), li = doc.createElement('li')
    li.id = 'li1'
    divPai.appendChild(ul)
    ul.appendChild(li)
    //exibindo tarefa
    li.innerHTML = `${campoText.value}`
    //excluindo elemento
    comandoExcluir(btn_Excluir, tarefasArray, li)
}

function comandoExcluir(btn_Excluir, tarefasArray, li) {
    btn_Excluir.addEventListener('click', () => {
        btn_Excluir.remove(btn_Excluir)
        li.remove(li)
        if (tarefasArray.indexOf(btn_Excluir.value), 1) {
            tarefasArray.splice(tarefasArray.indexOf(btn_Excluir.value), 1)
            localStorage.tarefa = tarefasArray
        } else if (tarefasArray.indexOf(btn_Excluir.value), 1) {
            tarefasArray.splice(tarefasArray.indexOf(btn_Excluir.value), 1)
            localStorage.tarefa = tarefasArray
        } else if (tarefasArray.indexOf(btn_Excluir.value), 1) {
            tarefasArray.splice(tarefasArray.indexOf(btn_Excluir.value), 1)
            localStorage.tarefa = tarefasArray
        } else if (tarefasArray.indexOf(btn_Excluir.value), 1) {
            tarefasArray.splice(tarefasArray.indexOf(btn_Excluir.value), 1)
            localStorage.tarefa = tarefasArray
        } else if (tarefasArray.indexOf(btn_Excluir.value), 1) {
            tarefasArray.splice(tarefasArray.indexOf(btn_Excluir.value), 1)
            localStorage.tarefa = tarefasArray
        } else if (tarefasArray.indexOf(btn_Excluir.value), 1) {
            tarefasArray.splice(tarefasArray.indexOf(btn_Excluir.value), 1)
            localStorage.tarefa = tarefasArray
        } else if (tarefasArray.indexOf(btn_Excluir.value), 1) {
            tarefasArray.splice(tarefasArray.indexOf(btn_Excluir.value), 1)
            localStorage.tarefa = tarefasArray
        } else if (tarefasArray.indexOf(btn_Excluir.value), 1) {
            tarefasArray.splice(tarefasArray.indexOf(btn_Excluir.value), 1)
            localStorage.tarefa = tarefasArray
        }
    })
}

function conf_ButtonExclui(myButton) {
    const textbtn = doc.createTextNode(`Excluir`)
    myButton.appendChild(textbtn)
    divPai.appendChild(myButton)
}

function tarefaExistente(...arayDeTarefas) {
    jaExiste = false
    if (arayDeTarefas.indexOf(campoText.value) > -1) return jaExiste = true;
}

 //localStorage
let salvandoTarefas = function () {
    localStorage.setItem('tarefa', tarefasArray)
}

window.onload = () => {
    if (localStorage.tarefa != undefined) {
        if (tarefasArray[0] == '') {

        } else {
            for (let i = 0; i < tarefasArray.length; i++) {
                const ul = doc.createElement('ul'), li = doc.createElement('li')
                li.id = 'li2'
                divPai.appendChild(ul)
                ul.appendChild(li)
                li.innerHTML = tarefasArray[i]

                const buttonExcluir = doc.createElement('button')
                buttonExcluir.id = 'btn_Excluir2'
                buttonExcluir.value = tarefasArray[i]
                conf_ButtonExclui(buttonExcluir)
                comandoExcluir(buttonExcluir, tarefasArray, li)
            }
        }
    }
}