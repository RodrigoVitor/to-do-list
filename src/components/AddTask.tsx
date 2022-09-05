export const AddTask = () => {
    return (
        <div className="mt-3 lg:w-3/6">
            <h3 className="md:font-bold md:text-center">Adicionar nova Tarefa:</h3>
            <form className="mt-3 md:text-center lg:w-5/6">
                <input type="text" className="border-2 p-1 lg:w-full" placeholder="Digite a tarefa" />
                <div className="flex justify-between md:justify-center lg:flex lg:justify-between">
                    <button className="mt-3 md:mr-2 bg-green-500 hover:bg-green-400 p-2 text-[#fff] rounded-md">Adicionar</button>
                    <button className="mt-3 bg-red-500 hover:bg-red-400 p-2 text-[#fff] rounded-md">Remover tudo</button>
                </div>
            </form>
        </div>
    )
}