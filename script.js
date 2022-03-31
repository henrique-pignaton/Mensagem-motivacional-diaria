const data=new Date()
const dia=data.getDate()
const div=document.getElementById("msg-motivacional")
const mes=data.getMonth()+1
const msg1="Eu tentei 99 vezes e falhei, mas na centésima tentativa eu consegui, nunca desista de seus objetivos mesmo que esses pareçam impossíveis, a próxima tentativa pode ser a vitoriosa. <br><i><strong>-Albert Einstein</strong></i>"
const msg2="Nas grandes batalhas da vida, o primeiro passo para a vitória é o desejo de vencer.<br><i><strong>-Gandhi</strong></i>"
const msg3="Quando era jovem, descobri que nove de cada dez coisas que eu fazia eram um fracasso. Eu não queria ser um fracasso. Então, passei a trabalhar dez vezes mais. <br><i><strong>- George Bernard Shaw</strong></i>"
const msg4="É fazendo que se aprende a fazer aquilo que se deve aprender a fazer. <br><br><i><strong>- Aristóteles</strong></i>"
const msg5="Uma chave importante para o sucesso é a auto-confiança. Uma chave importante para a auto-confiança é a preparação. <br><i><strong>- Arthur Ashe</strong></i>"
const msg6="O sucesso é a soma de pequenos esforços repetidos dia após dia <br><i><strong>- Autor desconhecido</strong></i>"
const msg7="A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro. <br><i><strong>- Nathaniel Hawthorne</strong></i>"
const msg8=" Comece de onde você está. Use o que você tiver. Faça o que você puder. <br><i><strong>- Arthur Ashe</strong></i>"
const msg9='Pessoas de sucesso fazem o que pessoas malsucedidas não querem fazer. Não queira que a vida seja mais fácil. Deseje que você seja ainda melhor. <br><i><strong>- Jim Rohn</strong></i>'
const msg10='Em nossas vidas, a mudança é inevitável. A perda é inevitável. A felicidade reside na nossa adaptabilidade em sobreviver a tudo de ruim. <br><i><strong>- Buda</strong></i>'
const msg11='Muitas das falhas da vida ocorrem quando não percebemos o quão próximos estávamos do sucesso na hora em que desistimos. <br><i><strong>- Thomas Edison</strong></i>'
const msg12='Sempre se lembre de que você tem mais fibra que acredita, é mais forte que parece e mais esperto do que você pensa que é. <br><i><strong>-  Robin Milne</strong></i>'
const msg13='Não importa qual a profissão que você escolheu, se queres ser bem sucedido faça o que gosta, se você fizer o que gosta, irá fazer com excelência e quem executa o seu trabalho com excelência o sucesso é inevitável. <br><i><strong>-  Victor Prates</strong></i>'
const msg14='O mundo é grande e cabe nesta janela sobre o mar. O mar é grande e cabe na cama e no colchão de amar. O amor é grande e cabe no breve espaço de beijar. <br><i><strong>- Carlos Drummond de Andrade</strong></i>'
const msg15='Achar que o mundo não tem um criador é o mesmo que afirmar que um dicionário é o resultado de uma explosão numa tipografia. <br><i><strong>- Benjamin Franklin</strong></i>'
const msg16='Difícil não é lutar por aquilo que se quer, e sim desistir daquilo que se mais ama. Eu desisti. Mas não pense que foi por não ter coragem de lutar, e sim por não ter mais condições de sofrer. <br><i><strong>- Bob Marley</strong></i>'
const msg17='Amo como ama o amor. Não conheço nenhuma outra razão para amar senão amar. Que queres que te diga, além de que te amo, se o que quero dizer-te é que te amo? <br><i><strong>- Fernando Pessoa</strong></i>'
const msg18='A vida é uma peça de teatro que não permite ensaios. Por isso, cante, chore, dance, ria e viva intensamente, antes que a cortina se feche e a peça termine sem aplausos. <br><i><strong>- Desconhecido</strong></i>'
const msg19='Aprendi que não posso exigir o amor de ninguém...<br>Posso apenas dar boas razões para que gostem de mim... <br>E ter paciência para que a vida faça o resto... <br><i><strong>- Desconhecido</strong></i>'
const msg20='Com o tempo, você vai percebendo que, para ser feliz com uma outra pessoa, você precisa, em primeiro lugar, não precisar dela.<br>Percebe também que aquele alguém que você ama (ou acha que ama) e que não quer nada com você, definitivamente não é o "alguém" da sua vida.<br>Você aprende a gostar de você, a cuidar de você e, principalmente, a gostar de quem também gosta de você.<br> O segredo é não correr atrás das borboletas... é cuidar do jardim para que elas venham até você.<br> No final das contas, você vai achar não quem você estava procurando, mas quem estava procurando por você! <br><i><strong>- Desconhecido</strong></i>'
const msg21='Amor não é se envolver com a pessoa perfeita, aquela dos nossos sonhos. Não existem príncipes nem princesas. Encare a outra pessoa de forma sincera e real, exaltando suas qualidades, mas sabendo também de seus defeitos. O amor só é lindo, quando encontramos alguém que nos transforme no melhor que podemos ser. <br><i><strong>- Desconhecido</strong></i>'
const msg22='Cada pessoa que passa em nossa vida, passa sozinha, é porque cada pessoa é única e nenhuma substitui a outra! Cada pessoa que passa em nossa vida passa sozinha e não nos deixa só porque deixa um pouco de si e leva um pouquinho de nós. Essa é a mais bela responsabilidade da vida e a prova de que as pessoas não se encontram por acaso. <br><i><strong>- Desconhecido</strong></i>'
const msg23='<br>O tempo é muito lento para os que esperam <br> Muito rápido para os que têm medo <br> Muito longo para os que lamentam Muito curto para os que festejam Mas, para os que amam, o tempo é eterno. <br><i><strong>- Henry Van Dyke</strong></i>'
const msg24='A maior covardia de um homem é despertar o amor de uma mulher sem ter a intenção de amá-la. <br><i><strong>- Augusto Branco</strong></i>'
const msg25='Sim, minha força está na solidão. Não tenho medo nem de chuvas tempestivas nem das grandes ventanias soltas, pois eu também sou o escuro da noite <br><i><strong>- Clarice Lispector</strong></i>'
const msg26='Só existem dois dias no ano que nada pode ser feito. Um se chama ontem e o outro se chama amanhã, portanto hoje é o dia certo para amar, acreditar, fazer e principalmente viver.    <br><i><strong>- Dalai Lama</strong></i>'
const msg27='Deus, para a felicidade do homem, inventou a fé e o amor. O Diabo, invejoso, fez o homem confundir fé com religião e amor com casamento. <br><i><strong>- Machado de Assis</strong></i>'
const msg28='Se tu me amas, ama-me baixinho <br>Não o grites de cima dos telhados <br>Deixa em paz os passarinhos <br>Deixa em paz a mim! <br>Se me queres, <br>enfim, <br>tem de ser bem devagarinho, Amada, <br>que a vida é breve, e o amor mais breve ainda... <br><i><strong>- Mario Quintana</strong></i>'
const msg29='Saudade é um pouco como fome. Só passa quando se come a presença. Mas às vezes a saudade é tão profunda que a presença é pouco: quer-se absorver a outra pessoa toda. Essa vontade de um ser o outro para uma unificação inteira é um dos sentimentos mais urgentes que se tem na vida.<br><i><strong>- Clarice Lisnpector</strong></i>'
const msg30='Faça o que for necessário para ser feliz. Mas não se esqueça que a felicidade é um sentimento simples, você pode encontrá-la e deixá-la ir embora por não perceber sua simplicidade. <br><i><strong>- Martha Medeiros</strong></i>'
const msg31='<img src="./77B38E74-EE06-4EB2-8A63-9031E494337C.jpeg" alt="">'
if(dia==1){div.innerHTML=msg1}
if(dia==2){div.innerHTML=msg2}
if(dia==3){div.innerHTML=msg3}
if(dia==4){div.innerHTML=msg4}
if(dia==5){div.innerHTML=msg5}
if(dia==6){div.innerHTML=msg6}
if(dia==7){div.innerHTML=msg7}
if(dia==8){div.innerHTML=msg8}
if(dia==9){div.innerHTML=msg9}
if(dia==10){div.innerHTML=msg10}
if(dia==11){div.innerHTML=msg11}
if(dia==12){div.innerHTML=msg12}
if(dia==13){div.innerHTML=msg13}
if(dia==14){div.innerHTML=msg14}
if(dia==15){div.innerHTML=msg15}
if(dia==16){div.innerHTML=msg16}
if(dia==17){div.innerHTML=msg17}
if(dia==18){div.innerHTML=msg18}
if(dia==19){div.innerHTML=msg19}
if(dia==20){div.innerHTML=msg20}
if(dia==21){div.innerHTML=msg21}
if(dia==22){div.innerHTML=msg22}
if(dia==23){div.innerHTML=msg23}
if(dia==24){div.innerHTML=msg24}
if(dia==25){div.innerHTML=msg25}
if(dia==26){div.innerHTML=msg26}
if(dia==27){div.innerHTML=msg27}
if(dia==28){div.innerHTML=msg28}
if(dia==29){div.innerHTML=msg29}
if(dia==30){div.innerHTML=msg30}
if(dia==31){div.innerHTML=msg31}
console.log('Hoje é ',dia,"/",mes)
