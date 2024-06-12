const Forms = () => {

    return (
        <div>
        
        <form action="" method="post">
            <label htmlFor="email">Email</label><br />
            <input type="email" id="email" /><br />
            <label htmlFor="password">Senha:</label><br />
            <input type="password" name="password" id="password" /><br />

            <button type="submit">Logar</button>
        </form>
        </div>
    )
}

export default Forms