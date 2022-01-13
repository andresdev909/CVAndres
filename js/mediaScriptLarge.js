const $RESUMEWRAP = document.querySelector('.resume')
let elementResumeWrap = window.getComputedStyle($RESUMEWRAP)
let resumeWrapSize = elementResumeWrap.getPropertyValue('width')

    console.log(resumeWrapSize)
