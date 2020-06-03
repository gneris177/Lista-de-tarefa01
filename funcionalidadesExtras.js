const divPaiBarra = doc.querySelector('.container-sm2')
const barraP1 = doc.querySelector('#pqUsar')
const barraP2 = doc.querySelector('#comoUsar')

barraP1.addEventListener('mouseenter', (e) => {
    let divText = doc.createElement('div')
    divText.id = 'divText'
    divPaiBarra.appendChild(divText)
    let p = doc.createElement('p')
    divText.appendChild(p)
    //texto
    p.innerHTML = 'Todos nós temos milhões de coisas pra fazer todos os dias.<br> Muitas vezes não sabemos por onde começar e nem como vamos dar <br> conta de tudo. É muito fácil ficar sobrecarregado com tudo que <br> precisamos concluir e acabamos esquecendo de fazer coisas <br> importantes. A lista de tarefas é uma excelente ferramenta<br> para te ajudar a alcançar seus objetivos.'
    //saindo da div   
    barraP1.addEventListener('mouseout', () => {
        divText.remove(divText)
    })
})

barraP2.addEventListener('mouseenter', () => {
    let divText2 = doc.createElement('div')
    divText2.id = 'divText2'
    divPaiBarra.appendChild(divText2)
    let p = doc.createElement('p')
    divText2.appendChild(p)
    //texto
    p.innerHTML = 'Para adicionar uma tarefa, basta ir até a caixa de texto escrever<br> sua tarefas e clicar no botao "enviar". Você pode adicionar até 8 tarefas. <br> sua tarefa ficará salva em seu navegador..'
    //saindo da div   
    barraP2.addEventListener('mouseout', () => {
        divText2.remove(divText2)
    })

})