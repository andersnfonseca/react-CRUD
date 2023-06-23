import React from "react";
import Main from "../template/Main";

export default props => 
    <Main icon="home" title="Inicio" 
        subtitle="Subtitulo">
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema para exemplificar CRUD em React</p>
    </Main>