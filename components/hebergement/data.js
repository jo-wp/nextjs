function data({ donnees }) {
    return (
    <div>
        {donnees.map((donnee)=>(
          <li>
            <h1>FTP </h1>
            <p>Host : {donnee.ftpHost}</p>
            <p>User : {donnee.ftpUser}</p>
            <p>Password : {donnee.ftpPassword}</p>
          </li>
        ))}
    </div>
    )
  }

export default data