/*
En React, es mejor que los componentes sean chicos, simples e independientes.

Un componente puede ser largo y estar formado por muchos elementos que se quieren modificar en un futuro, pero es difícil hacerlo si el componente es tan grande, por ejemplo:
*/

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

/*
En este componente, se aceptan las siguientes propiedades:

- author (objeto)
- text (string)
- date (objeto date)

Es difícil reusar pedazos del codigo siendo que están todos los elementos en un mismo complemento. Por lo tanto, se puede dividir de la siguiente manera:
*/

function Avatar(props) {
  const { avatarUrl, name } = props.user;
  return <img className="Avatar" src={avatarUrl} alt={name} />;
}

/*
'Avatar' no necesita saber que va a estar siendo renderizado en un comentario, por eso se le da un nombre mas genérico --> 'user' en lugar de 'author'.

* Es conveniente nombrar las propiedades desde el punto de vista del propio componente, y no de contexto general en el que se va a utilizar dicho componente. *
*/

function UserInfo(props) {
  const { user } = props;
  return (
    <div className="UserInfo">
      <Avatar user={user} />
      <div className="UserInfo-name">{user.name}</div>
    </div>
  );
}

/*
Ahora que se crearon los componentes 'Avatar' y 'UserInfo', pueden ser utilizados las veces necesarias a lo largo de todo el código, aunque solo sean necesarios una vez. Es mejor que los componentes queden simplificados y por separado.

Ahora el componente principal a renderizar se ve de la siguiente manera:
*/

function Comment(props) {
  const { author, text, date } = props;
  return (
    <div className="Comment">
      <UserInfo user={author} />
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{formatDate(date)}</div>
    </div>
  );
}
