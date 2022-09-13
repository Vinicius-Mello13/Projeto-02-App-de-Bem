// Tela de cadastro completo
export function signUp () {
    const [usersList, setUsersList] = useState(
      users.map((currentUser) => {
        return {
          username: currentUser.username,
          nome: currentUser.nome,
          sobrenome: currentUser.sobrenome,
          email: currentUser.email,
          password: currentUser.password,
        };
      })
    );
  const [form, setForm] = useState({
    title: "",
    description: "",
    img: "",
    // endereço: { rua: "", n: 0, CEP: 40000000 },
  });
  return (
    <div className="App">
      <Form
        form={form}
        setForm={setForm}
        setMovieList={setUsersList}
        movieList={usersList}
      />
    </div>
  );
  }