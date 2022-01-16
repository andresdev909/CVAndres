
class webActionsMenu{

    /*Atributos*/
    constructor()
    { 
        this.menuBurguer = document.getElementById("menu")
        this.closeBurguer = document.getElementById("close")
    }
    /**Getters y setters */
    setPositionMenu(nameClass, value){
        const $CONTMENU = document.querySelector(nameClass)
        $CONTMENU.setAttribute('style', `top: ${value};`)
    }
    getElementSize(nameClass){//Resibe elnombre de la clase delelemento a evaluar
        const $ELEMENT = document.querySelector(nameClass)

        let elemHeight = window.getComputedStyle($ELEMENT);
        let elemSizeH = elemHeight.getPropertyValue('height');

        let elemWhith = window.getComputedStyle($ELEMENT);
        let elemSizeW = elemWhith.getPropertyValue('width');

        return({
            eWidth: elemSizeW,
            eHeight: elemSizeH
        })
    }
    /**Metodos */
    

}

class webActionsSlide{
    constructor()
    {
        this.arrowRight = document.getElementById("arrowRight")
        this.arrowLeft = document.getElementById("arrowLeft")
        this.slide = document.querySelector(".internalWrap")
    }
    tarjetBeforeEnd(){
        const numberTarjets = document.querySelectorAll(".wrapTarjet")/**Selleciono todaslas tarjetas y las guardo enun array */
        this.slide.style.marginLeft = '-210px'
        this.slide.style.transition = 'all 0.5s'
        setTimeout(()=>{
            this.slide.style.transition = 'none'
            this.slide.insertAdjacentElement('beforeend', numberTarjets[0])
            this.slide.style.marginLeft = '0px'
        },500)

    }
    tarjetAfterBegin(){
        const numberTarjets = document.querySelectorAll(".wrapTarjet")/**Selleciono todaslas tarjetas y las guardo enun array */
        this.slide.style.marginLeft = '0px'
        this.slide.style.transition = 'all 0.5s'
        setTimeout(()=>{
            this.slide.style.transition = 'none'
            this.slide.insertAdjacentElement('afterbegin', numberTarjets[numberTarjets.length - 1])
            this.slide.style.marginLeft = '-210px'
        },500)
    }

    
}

const   

    $showBoxCert = document.querySelector(".certification--view"),
    $certInfo = document.querySelector(".certification__info"),

    $showBoxCertFcc = document.querySelector(".certification--fCC"),
    $certInfoFcc = document.querySelector(".certification__fCC"),

    $showBoxCertEngl = document.querySelector(".certification--English"),
    $certInfoEngl = document.querySelector(".certification__English")


/** Seccion de manejo del menu Hamburguesa **/
let menu = new webActionsMenu()
let valueWidth = menu.getElementSize(".menu__colapsed").eWidth
////Presenta en movil y desktop
if(parseFloat(valueWidth.slice(0,-2)) < 918.688)
{
    menu.setPositionMenu(".menu__colapsed", '-'+menu.getElementSize(".menu__colapsed").eHeight)
}
else
{
    menu.setPositionMenu(".menu__colapsed", '0px')
}

menu.menuBurguer.addEventListener('click',()=>{
    menu.setPositionMenu(".menu__colapsed", '0px')
})
menu.closeBurguer.addEventListener('click',()=>{
    menu.setPositionMenu(".menu__colapsed", '-'+menu.getElementSize(".menu__colapsed").eHeight)
})

/** Seccion de slide sobre mi **/
let slideAction = new webActionsSlide()
////Control de la flecha izquierda
slideAction.arrowLeft.addEventListener('click',()=>{
    slideAction.tarjetBeforeEnd()
})

////Control dela flecha Derecha
slideAction.arrowRight.addEventListener('click',()=>{
    slideAction.tarjetAfterBegin()
})

/** Seccion sobre Estudiuos adicionales **/
function activarVentana(element){
    let elementStyle = window.getComputedStyle(element);
    let elementDisplay = elementStyle.getPropertyValue('display');
    
    if(elementDisplay == 'none'){
        element.style.display = "flex"
    }else{
        element.style.display = "none"
    }
}
$showBoxCert.addEventListener('click',()=>{
    activarVentana($certInfo)  
})
$showBoxCertFcc.addEventListener('click',()=>{
    activarVentana($certInfoFcc)  
})
$showBoxCertEngl.addEventListener('click',()=>{
    activarVentana($certInfoEngl)  
})