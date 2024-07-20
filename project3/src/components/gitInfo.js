async function GitInfoLoader(){
   const response = await fetch('https://api.github.com/users/hiteshchoudhary')
   const data = await response.json()
   return data 
}
export default GitInfoLoader