// recursive method
function flattenArray(arr) {
    // Write your code here
    const result = [];
    if(Array.isArray(arr)){
        arr.forEach(element => {
        result.push(...flattenArray(element))
        })
    } else {
        result.push(arr);
    }
    return result
  }
  const arr = [[1,2,[3]],4]
  console.log(flattenArray(arr))

  // Iterative method

  function flattenArray2(arr) {
    const result = []
    const stack = [...arr];
    while(stack.length){
       let current = stack.pop();
       if(Array.isArray(current)){
        current.forEach(val => stack.push(val))
       } else{
        result.unshift(current)
       }
    }
    return result;
  }
  const arr2= [[1,2,[3]],4]
  console.log(flattenArray2(arr2))