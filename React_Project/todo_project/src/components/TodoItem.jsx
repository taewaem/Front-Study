import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {

     const onChangeCheckbox=()=>{
        onUpdate(id);
     };

     const onClickDeleteButton=()=>{
        onDelete(id);
     };
  

    return(
        <div className="TodoItem">
            <input 
            type="checkbox" 
            onChange={onChangeCheckbox}
            readOnly
            checked={isDone}
            />

      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleString()}</div>
      <button className="deleteBtn" onClick={onClickDeleteButton}>
        삭제
      </button>
        </div>
    );

};

export default TodoItem;