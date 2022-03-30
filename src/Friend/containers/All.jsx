function All(){
    const friends = [
        {
            name: "Ulysses Queiroz",
            email: "ulyssesq@gmail.com",
            confirmed: true
        },
        {
            name: "Juana",
            email: "ju.lucho@yahoo.com",
            confirmed: true
        }
    ];

    console.log(friends);
    return (
        <div>
            {friends.map(({name, email}, index) => (
                <div key={index}>
                    <h3>{name}</h3>
                    <span>{email}</span>
                </div>
            ))}
        </div>
    );
}

export default All;