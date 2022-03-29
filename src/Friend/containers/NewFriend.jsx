import React, {useState} from 'react';

function NewFriend() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const sendInvite = (event) => {
        event.preventDefault();
        console.log("nome", name);
        console.log("email", email);
        console.log("Convite enviado com sucesso!");
    }

    return (
        <form>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" onChange={(event) => setName(event.target.value)}></input>
            </div>

            <div>
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" onChange={(event) => setEmail(event.target.value)}></input>
            </div>

            <button onClick={sendInvite}>Convidar</button>
        </form>
    );
}

export default NewFriend;