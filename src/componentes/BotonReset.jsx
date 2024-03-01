/* eslint-disable react/prop-types */
const BotonReset = ({clearInput}) => {
    return ( 
        <button onClick={clearInput} className="p-2 text-xl col-span-2 text-white font-bold rounded-md shadow-md bg-slate-600 shadow-slate-500 tracking-wider hover:bg-slate-400 transition-all ease-out duration-200 hover:text-black">RESET</button>
     );
}
 
export default BotonReset;