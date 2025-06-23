function Formulario() {
    return (
        <nav>
            <div class="container; flex-row-center; flex-col-center; box-branco">
                <div>
                    <label>E-mail</label><br></br>
                    <input type="text" class="input-principal"></input>
                </div><br></br>
                <div>
                    <label>Mensagem</label><br></br>
                    <input type="text" class="input-principal"></input>
                </div><br></br>
                <div class="flex-row-center">
                <button type="button" class="btn-principal">Enviar Mensagem</button>
                </div>
            </div>
        </nav>
    )
}
export default Formulario