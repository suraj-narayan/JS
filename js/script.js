const zIndent = -1000
let startPos = zIndent / 5
const items = document.querySelectorAll('.item')
const itemValues = []
const lastItem = document.querySelector('.last')
let stopHeight = null
let qwe = null

window.addEventListener('scroll', ()=>{
  const top = document.documentElement.scrollTop
  const delta = startPos - top  
  startPos = top
  
  items.forEach((item, i)=>{

    itemValues.push((i * zIndent) + zIndent)
    itemValues[i] += delta * -3

    item.style.transform = `translateZ(${itemValues[i]}px)`  
    item.style.opacity = itemValues[i] < Math.abs(zIndent) / 3 ? 1 : 0
    item.style.display = itemValues[i] < Math.abs(zIndent) * 0.6 ? 'flex' : 'none' 
  })
})

window.scrollTo(0, 1)