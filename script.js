
var res = document.querySelector('div#res')
var nam1 = document.getElementById('name1')
var nam2 = document.getElementById('name2')
var load = document.getElementById('loa')


const reviews = [
    {
        id: 1,
        text: " Par Perfeito! ",
    },

    {
        id: 2,
        text: "Não foram feitos um para o outro!",
    },
    {
        id: 3,
        text: "Apenas Amigos!",

    },
    {
        id: 4,
        text: "Casal Promissor!",

    },
    {
        id: 5,
        text: "Nem deveriam se conhecer!",

    },
    {
        id: 6,
        text: "Serás Corno, Meu Mano!",

    },
    {
        id: 7,
        text: "Vai espumar em menos de 2 meses!",

    },
    {
        id: 8,
        text: "Mô nengue, pausa mbora, vais ser corno!",

    },
    {
        id: 9,
        text: "Nenhum tem coragem de admitir os sentimentos!",

    },
    {
        id: 10,
        text: "Estás a demorar, rapaz, age!",

    },
    {
        id: 11,
        text: "Não te querem!",

    },
    {
        id: 12,
        text: "Completamente Incompatíveis!",

    },
    {
        id: 13,
        text: "Fica no teu cantinho que é melhor!",

    },
    {
        id: 14,
        text: "Epáh, vão te barrar, mas tenta só!",

    },
    {
        id: 15,
        text: "Estão sempre a discutir, mas se curtem!",

    },
    {
        id: 16,
        text: "Futuro Casal!",

    },
    {
        id: 17,
        text: "Procura outra pessoa para gostar!",

    },
];

    
    const info = document.getElementById('info')
    const randombtn = document.querySelector('.random-btn')

    let currentItem = 0;

    window.addEventListener('DOMContentLoaded', function(){
        const item = reviews[currentItem];
         //info.textContent = item.text; 

    })

    function showPerson(person){
        const item = reviews[person]
         info.textContent = item.text; 

    }


   

            randombtn.addEventListener('click', function(){
                
                if(nam1.value == 0 || nam2.value == 0 ){
                    window.alert('ERROR: INSERT NAME')
                    //info.textContent = '';
                } else if(nam1.value !=0 || nam2.value != 0){
                    console.log('working...');

                currentItem = Math.floor(Math.random() * reviews.length);
                //showPerson(currentItem);

                    this.innerHTML = "<span class='load'></span>";
                    setTimeout(() => {
                        //this.innerHTML =  currentItem = Math.floor(Math.random() * reviews.length);;
                        this.innerHTML = showPerson(currentItem);
                        this.innerHTML = "VERIFY";
                    },2000);
                
                }
                //nam1.value = '';
               // nam2.value = '';
                randombtn.disabled = true;
                         
             });
             

            


    
    