const items = [
    { color: 'red', type: 'tv', age: 18 },
    { color: 'silver', type: 'phone', age: 20 },
    { color: 'blue', type: 'book', age: 17 }
  ];
  
  const excludes = [
    { k: 'color', v: 'blue' },
    { k: 'type', v: 'phone' }
  ];

  {
    color: ['red']
  }
function excludeItems(items, excludes) {
    function buildExclusionMap() {
        const map = {}
        excludes.forEach(item => {
            if(!map[item.k]) map[item.k] = []
            if(map[item.k].includes(map[item.v])) return false;
            map[item.k].push(item.v)
        })
        return map
    }
    const exlusionMap = buildExclusionMap();
   // console.log(exlusionMap)

    return items.filter(row => {
       for(const key in row){
        const val = row[key]
        if(exlusionMap[key] && exlusionMap[key].includes(val)) return false
       }
       return true
    })
  }

  
  console.log(excludeItems(items, excludes))