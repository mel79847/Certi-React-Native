import { useEffect, useState } from "react";

function useMelState(initial) {
    let stateValue = initial;
    const setValue = (value) => {
        stateValue = value;
    }
    return [stateValue,setValue];
}

export const Title = ({ name, title }) => {
    const [lastname, setLastname] = useState();

    useEffect(()=> {
      setLastname('sonco');
    }, []);
  return (
    <>
      <div> Hola {name} {lastname} desde {title}</div>
    </>
  );
};

