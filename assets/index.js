(function () {
    function criaCalculadroa() {
        return {
            display: document.querySelector('.display'),
            
            inicia() {
                this.clickButton();
                this.pressionaEnter()
            },

            pressionaEnter() {
                this.display.addEventListener('keyup', e => {
                  if (e.keyCode === 13) {
                    this.realizaConta();
                  }
                });
              },
              
            apagaUm() {
                this.display.value = this.display.value.slice(0, -1)  
            },
    
            realizaConta() {
                let conta = this.display.value;
    
                try {
                    conta = eval(conta);
    
                    if(conta === '' || Number.isNaN(conta) || typeof conta !== 'number')  alert('Conta invalida');
    
                    this.display.value = conta;

                } catch(e) {
                    console.error(e);
                }
                return conta;
            },
    
            clearDisplay() {
                this.display.value = " ";
            },
    
            clickButton() {
               document.addEventListener('click', function(e) {
                    const el = e.target;
                    
                    if(el.classList.contains('btn-num')) {
                        this.btnToDisplay(el.innerText)
                    }
    
                    if(el.classList.contains('btn-clear')) {
                        this.clearDisplay();
                    }
    
                    if(el.classList.contains('btn-menosUm')) {
                        this.apagaUm();
                    }
                    
                    if(el.classList.contains('btn-equals')) {
                        this.realizaConta();
                    }  
               }.bind(this))
            },
    
            btnToDisplay(valor) {
                this.display.value += valor;
            },
        }
    }
    const calc = criaCalculadroa().inicia();
    
})();
