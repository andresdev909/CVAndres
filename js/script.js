const $menuBurguer = document.getElementById("menu"),
    $menu__colapsed = document.getElementById("menu__colapsed"),
    $closeBurguer = document.getElementById("close"),

    $slide = document.querySelector("#internalWrap"),
    $arrowRight = document.getElementById("arrowRight"),
    $arrowLeft = document.getElementById("arrowLeft"),

    $showBoxCert = document.querySelector(".certification--view"),
    $certInfo = document.querySelector(".certification__info"),

    $showBoxCertFcc = document.querySelector(".certification--fCC"),
    $certInfoFcc = document.querySelector(".certification__fCC"),

    $showBoxCertEngl = document.querySelector(".certification--English"),
    $certInfoEngl = document.querySelector(".certification__English")

// Valor de heigth tarjeta menu hamburgesa
const $MENUTARJET = document.querySelector(".menu__colapsed")
let elementValue = window.getComputedStyle($MENUTARJET);
let elementSize = elementValue.getPropertyValue('height');

$MENUTARJET.style.top = "-"+elementSize

//Seccion de manejo del menu Hamburguesa
$menuBurguer.addEventListener('click',()=>{
    $menu__colapsed.style.setProperty('top','0')
})
$closeBurguer.addEventListener('click',()=>{
    $menu__colapsed.style.setProperty('top','-'+elementSize)
})

//Seccion de slide sobre mi
// //Control de la flecha izquierda
$arrowLeft.addEventListener('click',()=>{
    let firstTarjet = document.querySelectorAll(".wrapTarjet")[0]
    $slide.style.marginLeft = "-210px"
    $slide.style.transition = "all 0.5s"
    setTimeout(function(){
        $slide.style.transition = "none"
        $slide.insertAdjacentElement('beforeend', firstTarjet)
        $slide.style.marginLeft = "0px"
    },500)

})
let tarjet = document.querySelectorAll(".wrapTarjet")
let lastTarjet = tarjet[tarjet.length - 1]
$slide.insertAdjacentElement('afterbegin', lastTarjet)
// //Control dela flecha Derecha
$arrowRight.addEventListener('click',()=>{
    let wrappersTarjet = document.querySelectorAll(".wrapTarjet")
    let wrappersTarjetLast = wrappersTarjet[wrappersTarjet.length - 1]
    $slide.style.marginLeft = "0px"
    $slide.style.transition = "all 0.5s"
    setTimeout(function(){
        $slide.style.transition = "none"
        $slide.insertAdjacentElement('afterbegin', wrappersTarjetLast)
        $slide.style.marginLeft = "-210px"
    },500)
})

// Seccion sobre Estudiuos adicionales
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