Hash tables 

hash tables is a data structure in which every value is associated with a key and we can find that key using hash function. there are some method related to hash function: Put, Remove, Search, Size, InEmpty. 
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/315px-Hash_table_3_1_1_0_1_0_0_SP.svg.png)

1. Put
 
  put(item){
    let key = this.conputerHash(item)
    return !this.table[key] ? this.table[key] = item: false
}
![alt text](https://gblobscdn.gitbook.com/assets%2F-M0tzdQoYXoPhCiqfqxs%2F-M7Y_5joCQkAp5eT8QA3%2F-M7YdAgHK04EG3-Ci-go%2FScreen%20Shot%202020-05-18%20at%205.18.04%20AM.png?alt=media&token=702f0ed3-0c59-40f6-bf73-045451f56cea)
using Put method, we can insert values into the hashtables. 

2. Remove

  remove(item){
      let key = this.computerHash(item)
      return this.table[key] = undefined
  }
![alt text](https://gblobscdn.gitbook.com/assets%2F-M0tzdQoYXoPhCiqfqxs%2F-M7Y_5joCQkAp5eT8QA3%2F-M7YdL9_mDae1mtzoKvW%2FScreen%20Shot%202020-05-18%20at%205.18.50%20AM.png?alt=media&token=f2cbd5d2-4ad1-43e7-bb9c-e21374baac25)  
using Remove method, we can delete values. 
3. Search & Size

  search(item){
      let key = this.computerHash(item)
      return this.table[ket] === item
  }
  
using search method, we can find value which we want to find and it returns as boolean value

4. Size

  size(){
      let counter = 0;
      for (let i = 0, len = this.table.length; i < len; i++){
          if(this.table[i]){
              counter++
          }
      }
      return counter;
  }
using size method, it allows us to know how long the hash tables is. it returns integer value

5. IsEmpty

  isEmpty(){
      for(let i = 0, len = this.table.length i < len; i++){
          if(this.table[i]){
              return false;
          }
      }
      return true
  } 

using isEmpty method, we can check the values of existence and nonexistence in the hash tables. when it has, returns true   

6. Traverse

  traverse(fn){
      for(et i = 0; i.table.length; i++){
          if(this.table[i]){
              let current = this.table[i]
              while (current){
                  fn(current);
                  current = current.next
              }
          }
      }
  }


![alt text](https://gblobscdn.gitbook.com/assets%2F-M0tzdQoYXoPhCiqfqxs%2F-M7Y_5joCQkAp5eT8QA3%2F-M7YdusFFO7hJDvhMPyN%2FScreen%20Shot%202020-05-18%20at%205.20.48%20AM.png?alt=media&token=3a45f94d-c371-420e-a9a2-fe852e12f6d6)