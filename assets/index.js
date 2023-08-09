// (function () {
//     function criaCalculadora() {
//         return {
//             display: document.querySelector('.display'),
            
//             inicia() {
//                 this.clickButton();
//                 this.pressionaEnter()
//             },

//             pressionaEnter() {
//                 this.display.addEventListener('keyup', e => {
//                   if (e.keyCode === 13) {
//                     this.realizaConta();
//                   }
//                 });
//               },
              
//             apagaUm() {
//                 this.display.value = this.display.value.slice(0, -1)  
//             },
    
//             realizaConta() {
//                 let conta = this.display.value;
    
//                 try {
//                     conta = eval(conta);
    
//                     if(conta === '' || Number.isNaN(conta) || typeof conta !== 'number')  alert('Conta invalida');
    
//                     this.display.value = conta;

//                 } catch(e) {
//                     console.error(e);
//                 }
//                 return conta;
//             },
    
//             clearDisplay() {
//                 this.display.value = " ";
//             },
    
//             clickButton() {
//                document.addEventListener('click', function(e) {
//                     const el = e.target;
                    
//                     if(el.classList.contains('btn-num')) {
//                         this.btnToDisplay(el.innerText)
//                     }
    
//                     if(el.classList.contains('btn-clear')) {
//                         this.clearDisplay();
//                     }
    
//                     if(el.classList.contains('btn-menosUm')) {
//                         this.apagaUm();
//                     }
                    
//                     if(el.classList.contains('btn-equals')) {
//                         this.realizaConta();
//                     }  
//                }.bind(this))
//             },
    
//             btnToDisplay(valor) {
//                 this.display.value += valor;
//             },
//         }
//     }
//     const calc =  criaCalculadora().inicia();
    
// })();


(function () {
    function Calculadora() {
        this.diplay = document.querySelector('.display');
    
        this.inicia  = () => {
            this.cliqueButton();
            this.clickEnter();
        };

        this.clickEnter = () => {
            this.diplay.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.fazConta();
                }
            });
        };

        this.cliqueButton = () => {
            document.addEventListener('click', event  => {
                const el =  event.target;
    
                if(el.classList.contains('btn-num')) this.btnAddDisplay(el);
    
                if(el.classList.contains('btn-clear')) this.diplay.value = "";
    
                if(el.classList.contains('btn-menosUm')) this.apagaUm();
    
                if(el.classList.contains('btn-equals')) this.fazConta();
            });
        };
    
        this.btnAddDisplay = el => this.diplay.value += el.innerText;  
    
        this.fazConta = () => {
            let conta = this.diplay.value;
    
            try {
                conta = eval(conta);
    
                if(conta === '' || Number.isNaN(conta) || typeof conta !== 'number') {
                    alert('Conta invalida');
                    return;
                }
                this.diplay.value = conta;
            }
            catch(e) {
                console.log(e)
            }
            return conta;
        }
    
        this.apagaUm = () => this.diplay.value = this.diplay.value.slice(0, -1);
    
    }
    
    let calc = new Calculadora();
    calc.inicia();
})();