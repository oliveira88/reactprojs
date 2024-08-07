import Main from "../templates/Main/Main";
import React from "react";
import axios from "axios";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuário: Incluir, Listar, Alterar e Excluir",
};

const baseUrl = "http://localhost:3001/users";
const initialState = {
  user: { nome: "", email: "" },
  list: [],
};
export default class UserCrud extends React.Component {
  state = { ...initialState };

  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    );
  }

  clear() {
    this.setState({ user: initialState.user });
  }

  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : `${baseUrl}`;
    axios[method](url, user).then((r) => {
      const list = this.getUpdatedList(r.data);
      this.setState({ user: initialState.user, list });
    });
  }

  getUpdatedList(user, willAdd = true) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    if (willAdd) {
      list.unshift(user);
    }
    return list;
  }

  updateField(e) {
    const user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({ user });
  }

  componentDidMount() {
    axios.get(baseUrl).then((r) => {
      this.setState({ list: r.data });
    });
  }

  load(user) {
    this.setState({ user });
  }

  remove(user) {
    const url = `${baseUrl}/${user.id}`;
    axios.delete(url).then((r) => {
      const list = this.getUpdatedList(user, false);
      this.setState({ list });
    });
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome:</label>
              <input
                type="text"
                className="form-control"
                name="nome"
                value={this.state.user.nome}
                onChange={(e) => this.updateField(e)}
                placeholder="Digite o nome..."
              />
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>E-mail:</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={this.state.user.email}
                  onChange={(e) => this.updateField(e)}
                  placeholder="Digite o e-mail..."
                />
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                this.save();
              }}
            >
              Salvar
            </button>
            <button
              className="btn btn-secondary mx-2"
              onClick={() => {
                this.clear();
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <td>ID</td>
            <td>Nome</td>
            <td>E-mail</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  renderRows() {
    return this.state.list.map((u) => (
      <tr key={u.id}>
        <td>{u.id}</td>
        <td>{u.nome}</td>
        <td>{u.email}</td>
        <td>
          <button className="btn btn-warning" onClick={() => this.load(u)}>
            <i className="fa fa-pencil"></i>
          </button>
          <button className="btn btn-danger mx-2" onClick={() => this.remove(u)}>
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    ));
  }
}
