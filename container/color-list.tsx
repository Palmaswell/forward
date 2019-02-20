import * as React from 'react';


export function ColorList(): JSX.Element {
  const [count, setCount] = React.useState(0);

  return (
    <>
    <h1>Hello everyone 👋</h1>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
    </>
  );
}
