Hash tables 

hash tables is a data structure in which every value is associated with a key and we can find that key using hash function. there are some method related to hash function: Put, Remove, Search, Size, InEmpty. 

1. Put
 
  put(item){
    let key = this.conputerHash(item)
    return !this.table[key] ? this.table[key] = item: false
}

2. Remove

  remove(item){
      let key = this.computerHash(item)
      return this.table[key] = undefined
  }

3. Search & Size

  search(item){
      let key = this.computerHash(item)
      return this.table[ket] === item
  }size(){
      let counter = 0;
      for (let i = 0, len = this.table.length; i < len; i++){
          if(this.table[i]){
              counter++
          }
      }
      return counter;
  }

  4. 