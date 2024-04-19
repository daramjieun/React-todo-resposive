import { useState } from "react"

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
}

function App() {
  // const [count, setCount] = useState(0)
  const [inputText, setInputText] = useState('')
  // const todos = fetchTodos();
  const [todos, setTodos] = useState(fetchTodos());

  const handleInput = (event) => {
    console.log(event)
    const value = event.target.value;
    setInputText(value);
  }

  const handleClick = () => {
    console.log('clicked')
    localStorage.setItem(inputText, inputText);
    // todos.push(inputText)
    // spread 문법, 원본 데이터를 보장한 상태에서 추가적으로 넣음
    // push 대신 리액트에서 배열 상태 추가 방식
    setTodos((currentTodos) => {
      return [...currentTodos, inputText]
    })
    // input 태그 초기화
    setInputText('');
  }

  const handleRemove = (todo) => {
    // console.log(todo, index)
    // todos.splice(index, 1);
    // console.log(todos)
    const result = todos.filter(todoItem => {
      if (todoItem !== todo) {
        return true;
      }
    })
    setTodos(result);
    localStorage.removeItem(todo);
  }

  return (
    <div>
      <h1>TODO 앱</h1>
      <div>
        <input type="text" value={inputText} onChange={handleInput} />
        <button onClick={handleClick}>add</button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <span>{todo}</span>
                <button onClick={() => handleRemove(todo, index)}>remove</button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App