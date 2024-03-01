/* eslint-disable react/prop-types */
const BotonNumerico = ({valor, handleClick}) => {

    return ( 
        <button value={valor} onClick={handleClick} className="p-2 bg-gray-300 rounded-md shadow-md shadow-slate-200 font-bold text-xl transition-all ease-out duration-200 hover:bg-slate-600 hover:text-white">{valor}</button>
     );
}
 
export default BotonNumerico;