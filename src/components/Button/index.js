import './styles.scss';


export const Button = (props) => {
  return (

        <button id={props.variant}>
          {props.text}
        </button>
    
  )

}



// function Button() {
//   return (
//     <>


//     <button className="primary">
//       Contactanos
//     </button>

//     <button className="secondary">
//     Quiero saber mas
//     </button>
    

//         <button className="light">
//        Hola
//     </button>

//     <button className="whit">
//     CONOCE LO NUEVO
//     </button>

//     <button className="info">
//     Más información   > 
//     </button>

//     </>

//   );
// }

export default Button;