const sectionBienvenida = document.getElementById('bienvenida')
const sectionSeleccionCuenta = document.getElementById('seleccion-cuentas')
const sectionOpcionesDeLaCuenta = document.getElementById('opciones-de-cuenta')
const sectionConsultarSaldo = document.getElementById('section-Consultar-Saldo')
const sectionIngresarMonto = document.getElementById('section-Ingresar-Monto')
const sectionRetirarMonto = document.getElementById('section-Retirar-Monto')

const botonMostrarCuentas = document.getElementById('mostrar-cuentas')

const botonCuentaMali = document.getElementById('cuentaMali')
const botonCuentaGera = document.getElementById('cuentaGera')
const botonCuentaMaui = document.getElementById('cuentaMaui')

const botonConsultarSaldo = document.getElementById('consultarSaldo')
const botonIngresarMonto = document.getElementById('ingresarMonto')
const botonRetirarMonto = document.getElementById('retirarMonto')
const botonAñadirSaldo = document.getElementById('añadir-saldo')
const botonRetirarSaldo = document.getElementById('retirar-saldo')

const nombreDeLaCuenta = document.getElementById('nombre-de-la-cuenta')
const saldoDeLaCuenta = document.getElementById('saldo-de-la-cuenta')
const ingresosDeLaCuenta = document.getElementById('ingresos-de-la-cuenta')
const retirosDeLaCuenta = document.getElementById('retiros-de-la-cuenta')

const botonConsultarSaldoRegresar = document.getElementById('regresar-consultar-saldo')
const botonIngresarMontoRegresar = document.getElementById('regresar-ingresar-monto')
const botonRetirarMontoRegresar = document.getElementById('regresar-retirar-monto')

const passwordMali = 1234
const passwordGera = 4567
const passwordMaui = 9874

let passwordQueSePide
let nombreArray
let saldoArray

let saldoAñadido
let saldoRetirado
let numEnArray

var cuentas = [
    {nombre: 'Mali', saldo: 200},
    {nombre: 'Gera', saldo: 290},
    {nombre: 'Maui', saldo: 67}
  ]

function bienvenida(){
    sectionSeleccionCuenta.style.display = 'none'
    sectionOpcionesDeLaCuenta.style.display = 'none'
    sectionConsultarSaldo.style.display = 'none'
    sectionIngresarMonto.style.display = 'none'
    sectionRetirarMonto.style.display = 'none'

    if (botonMostrarCuentas) {
        botonMostrarCuentas.addEventListener('click', function() {
            seleccionarUnaCuenta()
        })
    }
}

function seleccionarUnaCuenta(){
    sectionSeleccionCuenta.style.display = 'block'

    sectionBienvenida.style.display = 'none'
    sectionOpcionesDeLaCuenta.style.display = 'none'
    sectionConsultarSaldo.style.display = 'none'
    sectionIngresarMonto.style.display = 'none'
    sectionRetirarMonto.style.display = 'none'

    botonCuentaMali.addEventListener('click', accesoCuenta)
    botonCuentaGera.addEventListener('click', accesoCuenta)
    botonCuentaMaui.addEventListener('click', accesoCuenta)
}

function accesoCuenta(event){
    switch (event.target.id) {
        case 'cuentaMali':
            ingresarPasswordMali()
            console.log(event.target)
            break;
        case 'cuentaGera':
            ingresarPasswordGera()
            break;
        case 'cuentaMaui':
            ingresarPasswordMaui()
            break;
        default:
            break;
    }
}

function ingresarPasswordMali(){
    passwordQueSePide = prompt('Ingresa la contraseña de la cuenta Mali: ')
    if(passwordQueSePide == passwordMali){
        nombreArray = cuentas[0].nombre
        saldoArray = cuentas[0].saldo
        numEnArray = 0
        multiplesOpciones()
    }else{
        alert('Contraseña incorrecta')
        seleccionarUnaCuenta()
    }
}

function ingresarPasswordGera(){
    passwordQueSePide = prompt('Ingresa la contraseña de la cuenta Gera: ')
    if(passwordQueSePide == passwordGera){
        nombreArray = cuentas[1].nombre
        saldoArray = cuentas[1].saldo
        numEnArray = 1
        multiplesOpciones()
    }else{
        alert('Contraseña incorrecta')
        seleccionarUnaCuenta()
    }
}

function ingresarPasswordMaui(){
    passwordQueSePide = prompt('Ingresa la contraseña de la cuenta Maui: ')
    if(passwordQueSePide == passwordMaui){
        nombreArray = cuentas[2].nombre
        saldoArray = cuentas[2].saldo
        numEnArray = 2
        multiplesOpciones()
    }else{
        alert('Contraseña incorrecta')
        seleccionarUnaCuenta()
    }
}

function multiplesOpciones(){
    sectionOpcionesDeLaCuenta.style.display = 'block'
    
    sectionBienvenida.style.display = 'none'
    sectionSeleccionCuenta.style.display = 'none'
    sectionConsultarSaldo.style.display = 'none'
    sectionIngresarMonto.style.display = 'none'
    sectionRetirarMonto.style.display = 'none'

    nombreDeLaCuenta.innerHTML = nombreArray

    botonConsultarSaldo.addEventListener('click', (e) => {
        consultarSaldoCuenta()
    })

    botonIngresarMonto.addEventListener('click', (e) => {
        ingresarMontoCuenta()
    })

    botonRetirarMonto.addEventListener('click', (e) => {
        retirarMontoCuenta()
    })
}

function consultarSaldoCuenta(){
    sectionConsultarSaldo.style.display = 'block'

    sectionBienvenida.style.display = 'none'
    sectionSeleccionCuenta.style.display = 'none'
    sectionOpcionesDeLaCuenta.style.display = 'none'
    sectionIngresarMonto.style.display = 'none'
    sectionRetirarMonto.style.display = 'none'

    saldoDeLaCuenta.innerHTML = ('$'+saldoArray)

    botonConsultarSaldoRegresar.addEventListener('click', (e) => {
        multiplesOpciones()
    })
}

function ingresarMontoCuenta(){
    sectionIngresarMonto.style.display = 'block'

    sectionBienvenida.style.display = 'none'
    sectionSeleccionCuenta.style.display = 'none'
    sectionOpcionesDeLaCuenta.style.display = 'none'
    sectionConsultarSaldo.style.display = 'none'
    sectionRetirarMonto.style.display = 'none'

    ingresosDeLaCuenta.innerHTML = ('$'+saldoArray)
}

botonAñadirSaldo.addEventListener('click', (e) => {
    saldoAñadido = prompt('Ingresa el saldo que deseas añadir a tu cuenta:')
    saldoArray = Number(saldoAñadido) + cuentas[numEnArray].saldo
    console.log(saldoArray)

    if(Number(saldoArray) <= 990){
        cuentas[numEnArray].saldo = cuentas[numEnArray].saldo + Number(saldoAñadido)
        ingresosDeLaCuenta.innerHTML = ('$'+saldoArray)
    }else{
        alert('No puedes tener más de $990 pesos en tu cuenta!')
    }
})

botonIngresarMontoRegresar.addEventListener('click', (e) => {
    multiplesOpciones()
})

function retirarMontoCuenta(){
    sectionRetirarMonto.style.display = 'block'

    sectionBienvenida.style.display = 'none'
    sectionSeleccionCuenta.style.display = 'none'
    sectionOpcionesDeLaCuenta.style.display = 'none'
    sectionConsultarSaldo.style.display = 'none'
    sectionIngresarMonto.style.display = 'none'

    retirosDeLaCuenta.innerHTML = ('$'+saldoArray)
}

botonRetirarSaldo.addEventListener('click', (e) => {
    saldoRetirado = prompt('Ingresa el saldo que deseas retirar de tu cuenta:')
    saldoArray = cuentas[numEnArray].saldo - Number(saldoRetirado)
    console.log(saldoArray)

    if(Number(saldoArray) >= 10){
        cuentas[numEnArray].saldo = cuentas[numEnArray].saldo - Number(saldoRetirado)
        retirosDeLaCuenta.innerHTML = ('$'+saldoArray)
    }else{
        alert('No puedes tener menos de $10 pesos en tu cuenta!')
    }
})

botonRetirarMontoRegresar.addEventListener('click', (e) => {
    multiplesOpciones()
})

window.addEventListener('load', bienvenida())