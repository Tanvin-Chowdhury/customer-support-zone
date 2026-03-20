### 
```jsx

1. JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript.
  Example - const element = <h3>Hello, World!</h3>;

2. Props - Data passed from parent, Can not changed read only.
   Example -
     function Welcome(props) {
        return <h3>Hello {props.name}</h3>;
    }
  State - Data managed inside component, Can be changed.
   Example - const [count, setCount] = useState(0);

3. useState is a React Hook that allows you to add state to functional components.
   Example -
     const [count, setCount] = useState(0);
   Here, count is current state
   setCount is function to update state
   Component re-renders automatically when state changes 

4. Share state between components in React by Lifting State Up. Move state to the closest common parent and pass via props.
   Example -
   function Parent() {
    const [data, setData] = useState("");
    return (
      <>
        <Child1 data={data} />
        <Child2 setData={setData} />
      </>
    );
  }

  function Child1({ data }) {
    return <h3>{data}</h3>;
  }
  
  function Child2({ setData }) {
    return (
      <button onClick={() => setData("Hello from Child2")}>
        Update Data
      </button>
    );
  } 

5. function Button() {
  function handleClick() {
    alert("Clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
