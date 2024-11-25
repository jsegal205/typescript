const varied = {
    "order1": {"size": "small", "color": "blue"},
    "order2": {"size": "small", "color": "blue", "material": "plastic"},
    "order3": {"size": "large", "material": "metal"},
    "order4": {"size": "small", "color": "blue", "material": "metal"},
    "order5": {"color": "red", "material": "metal"}
}

const consistent = {
    "order1": {"size": "small", "color": "blue", "material": "metal"},
    "order2": {"size": "small", "color": "blue", "material": "plastic"},
    "order3": {"size": "large", "color": "blue", "material": "metal"},
    "order4": {"size": "small", "color": "blue", "material": "metal"},
    "order5": {"size": "small", "color": "red", "material": "metal"}
}

const empty = {}

const allUniq = {
    "order1": {"size": "xs"},
    "order2": {"size": "small"},
    "order3": {"size": "medium"},
    "order4": {"size": "large"},
    "order5": {"size": "xl"}
}


type Input = { [key: string]: {[subkey: string]: string}}
type Output = [{[key: string]: string}, {[subkey: string]: string}]
type MostCommonPairsFn = (input: Input) => Output

type CountKeys = {[keyVal: string]: number}
type MaxUniq = {[key: string]: string} & { maxCount: number}

// open questions
// what happens if they all have uniq keys? what should be returned?

const mostCommonPairs: MostCommonPairsFn = (input: Input) => {

  // loop through input
  // loop through all keys in
  // create hash of {`key:value`: count}

  const countedKeys =
    Object.entries(input)
      .reduce((accum: CountKeys, [_key, val]): CountKeys => {

        Object.entries(val)
          .forEach(([subKey, subVal]) => {
            const countKey = `${subKey}:${subVal}`

            if (accum[countKey]){
              accum[countKey] += 1
            } else {
              accum[countKey] = 1
            }
          })
        return accum
      }, {} as CountKeys)

  // loop through counted keys object
  // create map of all keys of the max value, keep track of the max count

  const maxUniq =
    Object.entries(countedKeys)
      .reduce((accum: MaxUniq, [keyVal, count]: [string, number]) => {

        const [key, val] = keyVal.split(":")
        if (count >= accum["maxCount"]) {
          accum[key] = val
          accum["maxCount"] = count
        }
        // else skip

        return accum
      }, {maxCount: 0} as MaxUniq);

  //

  const others =
    Object.entries(countedKeys)
    .reduce((accum, [keyVal, count]) => {
      if (count !== maxUniq["maxCount"]) {
        const [key, val] = keyVal.split(":")
        accum[key] = val
      }
      return accum
    }, {})

    // could drop max count from maxUniq map if it's not needed
    // delete maxUniq["maxCount"]

    // return tuple of [mostCommonPairs, lessCommonPairs]
    return [maxUniq, others]
}

console.log("consistent")
console.log(mostCommonPairs(consistent))
console.log("varied")
console.log(mostCommonPairs(varied))
console.log("empty")
console.log(mostCommonPairs(empty))
console.log("allUniq")
console.log(mostCommonPairs(allUniq))
