var data = new Date()
var dia = data.getDate()
console.log(dia)
var div = document.getElementById("msg-motivacional")
//var dia = 1

const msg1 = "Eu tentei 99 vezes e falhei, mas na centésima tentativa eu consegui, nunca desista de seus objetivos mesmo que esses pareçam impossíveis, a próxima tentativa pode ser a vitoriosa. <i> <strong>Albert Einstein</strong></i>"

const msg2 = "Nas grandes batalhas da vida, o primeiro passo para a vitória é o desejo de vencer.<i> <strong>Gandhi</strong></i>"

const msg3 = "Quando era jovem, descobri que nove de cada dez coisas que eu fazia eram um fracasso. Eu não queria ser um fracasso. Então, passei a trabalhar dez vezes mais. <i><strong>George Bernard Shaw</strong></i>"

const msg4 = "É fazendo que se aprende a fazer aquilo que se deve aprender a fazer. <i><strong>Aristóteles</strong></i>"

const msg5 = "Uma chave importante para o sucesso é a auto-confiança. Uma chave importante para a auto-confiança é a preparação. <i><strong>Arthur Ashe</strong></i>"

const msg6 = "O sucesso é a soma de pequenos esforços repetidos dia após dia <i><strong>Autor desconhecido</strong></i>"

const msg7 = "A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro. <i><strong>Nathaniel Hawthorne</strong></i>"

const msg8 = " Comece de onde você está. Use o que você tiver. Faça o que você puder. <i><strong>Arthur Ashe</strong></i>"

const msg9 = 'Pessoas de sucesso fazem o que pessoas malsucedidas não querem fazer. Não queira que a vida seja mais fácil. Deseje que você seja ainda melhor. <i><strong>Jim Rohn</strong></i>'

const msg10 = 'Em nossas vidas, a mudança é inevitável. A perda é inevitável. A felicidade reside na nossa adaptabilidade em sobreviver a tudo de ruim. <i><strong>Buda</strong></i>'

const msg11 = 'Muitas das falhas da vida ocorrem quando não percebemos o quão próximos estávamos do sucesso na hora em que desistimos. <i><strong>Thomas Edison</strong></i>'

const msg12 = 'Sempre se lembre de que você tem mais fibra que acredita, é mais forte que parece e mais esperto do que você pensa que é. <i><strong> Robin Milne</strong></i>'

const msg13 = ''


if (dia == 1) {
    div.innerHTML = msg1
}
if (dia == 2) {
    div.innerHTML = msg2
}
if (dia == 3) {
    div.innerHTML = msg3
}
if (dia == 4) {
    div.innerHTML = msg4
}
if (dia == 5) {
    div.innerHTML = msg5
}
if (dia == 6) {
    div.innerHTML = msg6
}
if (dia == 7) {
    div.innerHTML = msg7
}
if (dia == 8) {
    div.innerHTML = msg8
}
if (dia == 9) {
    div.innerHTML = msg9
}
if (dia == 10) {
    div.innerHTML = msg10
}

