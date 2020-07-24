import React, { useState, useEffect } from "react";
import axios from 'axios';


function App() {
  const [githubUser, setGithubUser] = useState();
  const [repositories, setRepositories] = useState([]);
  const [repo, setRepo] = useState();


  async function handleSearch(e) {
    e.preventDefault();
    const response = await axios.get(`https://api.github.com/users/${githubUser}/repos`);
    setRepositories(response.data);
  }

  async function handleAddStar(e, repo) {
    e.preventDefault();
    window.open('https://github.com/login/oauth/authorize?client_id=80a77c38e30282ca279c');
    //const response = await axios.put(`https://api.github.com/user/starred/${githubUser}/${repo}`);
  }

  return (
    <div className="App container mt-5">
      <h2>Repositório</h2>
      <div className="form-inline">
        <input 
          type="text" 
          class="form-control" 
          id="search" 
          value={githubUser}
          onChange={e => setGithubUser(e.target.value)} 
        ></input>
        <button className="btn btn-dark" onClick={handleSearch}>Buscar</button>
      </div>
       
      <ul className="list-group  mt-5">
        {repositories.map(repository => 
          <li className="list-group-item" key={repository.id}>
            {repository.name}&nbsp;&nbsp;
            <button onClick={(e) => handleAddStar(e, repository.name)}>Adicionar Estrela</button>
          </li>)}
      </ul>
    </div>
  );
}

export default App;
