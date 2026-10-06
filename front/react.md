npm run dev


class=
className=
for=
htmlFor=
<input>
<input />

onclick=
onClick={function}

Props parametros de los componentes. (Datos que componentes padres les pasan a sus hijos)

funtion Saludo({ nombre }:SaludoProps){
    return <p>Hola, {nombre}</p>;
}

<Saludo nombre="Ana" />

Estados
Datos que pertenecen a un componente y pueden cambiar

let x

x=1

x=5
UseState

const [contador, setContador]=useState(0);
<button onClick={()=> set Contador(contador + 1)}>

{contador}