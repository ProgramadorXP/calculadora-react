/* eslint-disable react/prop-types */
const BotonBorrar = ({borrarInput}) => {
    return ( 
        <button onClick={borrarInput} className="p-2 text-xl rounded-md font-bold  bg-slate-600 shadow-slate-500 tracking-wider text-white hover:bg-slate-400 transition-all ease-out duration-200 hover:text-black">DEL</button>
     );
}
 
export default BotonBorrar;