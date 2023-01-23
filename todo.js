function Todo({todo,index,remove,update}){
  
  function handleUpdate(){
    console.log('Ping:',index);
    update(index);
  }
  function handleDelete(){
    console.log('Ping:',index);
    remove(index);
  }
  const className = (todo.isCompleted) ? "todo checked": "todo unchecked";
  return  <div className={className}>
            <label >{todo.text}</label>
            <div class="controls">
              <input type="checkbox"   onClick={handleUpdate}/>
              <input type="image" src="/images/delete.png" alt="delete" width="15" height="15" onClick={handleDelete}/>      
            </div>
          </div>;
}
