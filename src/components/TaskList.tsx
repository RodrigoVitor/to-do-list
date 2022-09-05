export const TaskList = () => {
    return (
        <div className="mt-4 border-2">
            <p className=" bg-blue-700 text-center  p-2 text-[#fff]">Minha Lista</p>
            <div className="border-b-2 flex justify-around items-center">
                <p className="mt-5 mb-5 font-bold">
                    Conteudo teste
                </p>
                <button className="bg-red-500 hover:bg-red-400 p-2 rounded-md text-[#fff]">X</button>
            </div>
            <div className="border-b-2 flex justify-around items-center" >
                <p className="mt-5 mb-5 font-bold">
                    Conteudo teste
                </p>
                <button className="bg-red-400 p-2 rounded-md">X</button>
            </div>
            <div className="border-b-2 flex justify-around items-center">
                <p className="mt-5 mb-5 font-bold">
                    Conteudo teste
                </p>
                <button className="bg-red-400 p-2 rounded-md">X</button>
            </div>
        </div>
    )
}