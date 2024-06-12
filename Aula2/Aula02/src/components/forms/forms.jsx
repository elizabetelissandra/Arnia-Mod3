import './forms.css'

const Forms = () => {
        function visibility(){
            const tela =  document.getElementById("divform")

            if(document.getElementById("botaoLogar").className(ligado))
        }
    return (
        <div id= "divform" className='ligado'>
        <h2>Digite seus dados para logar no sistema</h2>
        <form action="" method="post">
            <label htmlFor="email">Email</label><br />
            <input type="email" id="email" /><br />
            <label htmlFor="password">Senha:</label><br />
            <input type="password" name="password" id="password" /><br />

            <button type="submit" id='botaoLogar'>Logar</button>
        </form>
        </div>
    )
}

export default Forms