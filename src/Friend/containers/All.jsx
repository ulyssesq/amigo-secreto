function All(){
    const friends = [
        {
            name: "Ulysses Queiroz",
            email: "ulyssesq@gmail.com",
            confirmed: true
        }
    ];
    return (
        <div>
            {friends.map(({name, email}) => {
                <div>
                    <h3>{name}</h3>
                    <span>{email}</span>
                </div>
            })}
        </div>
    );
}
