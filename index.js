class HashTable {
    constructor() {
      this.storageLimit = 10
      this.table = new Array(this.storageLimit)
    }
  
    // data -> index
    getHash(data) {
      let hash = 0
      for (let i = 0; i < data.length; i++) {
        
        hash += data.charCodeAt(i)
      }
      console.log("hash", hash)
      return hash % this.storageLimit
    }
  
    /* if push data and value into hash function, 
    it would find a key for data and add its value on the entry*/
    add(data, value) {
      const index = this.getHash(data)
      this.table[index] = value
    }
  
    get(data) {
      const index = this.getHash(data)
      return this.table[index]
    }
  
    remove(data) {
      const index = this.getHash(data)
      delete this.table[index]
    }
  }
  
  const hashTable = new HashTable()
  hashTable.add("john", "111222333")
  hashTable.add("dave", "222333444")
  hashTable.add("stella", "333444555")
  hashTable.add("mike", "444555666")
  
  console.log(hashTable.table)