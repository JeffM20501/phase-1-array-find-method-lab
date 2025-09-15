// code your solution here
const superbowlWin=(arr)=>{
  const wins=arr.find(winner=>winner.result==='W')
  return wins?wins.year:undefined
}