const UsersDisplay = () => {
  return (
    <>
      <h2>Usuários</h2>
      <ul id="users">
        <UserItem
          occupation="Médico"
          name="João"
          age={18}
          sum={sum}
          hello={hello}
        />
        <UserItem
          occupation="Médico"
          name="Maria"
          age={20}
          sum={sum}
          hello={hello}
        />
        <UserItem
          occupation="Médico"
          name="Pedro"
          age={22}
          sum={sum}
          hello={hello}
        />
      </ul>
    </>
  );
};

export default UsersDisplay;
