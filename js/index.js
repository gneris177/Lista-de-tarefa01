const ul = document.querySelector(".main")
const btnSubmit = document.querySelector(".btnSubmit")
const text = document.querySelector(".text")
const ex = document.querySelector(".ex")
let list = []
let existingT = false

btnSubmit.onclick = (e) => {
  existing()
  checks()
  text.value = ""
}

const existing = () => {
  if (list.indexOf(text.value) > -1) existingT = true
}

function checks() {
  if (existingT == false) {
    if (list[0] == "") list.splice(0, 1)
    list.push(text.value)
    localStorage.tarefa = list
  }

  if (text.value === "") {
    alert("Tarefa em branco!")
    list.splice(list.indexOf(""), 1)
  }

  if (existingT === false && text.value != "") {
    save()
    view()
  } else {
    alert("A tarefa já existe!")
    text.value = ""
  }
}

const view = () => ul.innerHTML += `<li onclick="excluir(this)" class="li"> <img src="img/lixeira.png" height='17px' onclick="excluir()"> ${text.value} </li>`

function excluir(li) {
  const confirme = confirm('Tem certeza que quer excluir?')
  if (confirme === true) {
    li.parentNode.removeChild(li)
  }
}

const clean = () => text.value = clean

const save = () => localStorage.setItem("tarefa", list)

function createLStorage() {
  if (localStorage.tarefa != undefined) {
    list = localStorage.getItem("tarefa").split(",")
    for (let i = 0; i < list.length; i++) {
      ul.innerHTML += `<li onclick="excluir(this)" class="li"> <img src="img/lixeira.png" height='17px' onclick="excluir()"> ${list[i]} </li>`
    }
  }
}

//exemplos de tarefas
if (localStorage.tarefa != undefined) {
  ex.style.display = "none"
} else {
  alert("Basta clicar na caixa de texto p/ remover os exemplos")
}

text.onclick = () => ex.style.display = "none"

//local storage
window.onload = () => createLStorage()