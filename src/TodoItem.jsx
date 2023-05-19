function TodoItem(props) {
  return (
    <li>
      <span>✓</span> 
      <p>{props.text}</p>
      <p>{props.number}</p>
      <span>🅧</span>
    </li>
    
  )
}

export { TodoItem }