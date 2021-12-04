type ProduceFunc = <T>(base: T, receipe: (draft: T) => any) => void

const produce: ProduceFunc = (base, recipe) => {
  // your code here

}
