const root = document.getElementById('root')
const react = {
    type : 'a',
    props : {
        href : 'https://fonts.google.com/',
        target : '_blank'
    },
    children : "Click me to visit Google"

}
function customRender(react , root){
  const ele = document.createElement(react.type)
   ele.setAttribute('href' , react.props.href)
   ele.setAttribute('target' , react.props.target) 
  ele.innerHTML =  react.children
  root.appendChild(ele);
}
customRender(react , root)