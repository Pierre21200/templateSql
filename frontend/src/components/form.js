import { useEffect, useState, useContext } from 'react';
import { StateContext } from '../utils/context';
import { login } from '../utils/fetch';

function Form({ contact, userLog }) {
  const { user, setUser } = useContext(StateContext);

  const [userInfos, setUserInfos] = useState({ pseudo: '', mail: '', password: '' });
  const [sign, setSign] = useState(false);
  const [log, setLog] = useState(false);

  function submit(e) {
    e.preventDefault();
    login(userInfos);
  }

  function showLog() {
    setLog(true);
    setSign(false);
  }

  function showSign() {
    setLog(false);
    setSign(true);
  }

  useEffect(() => {
    setUser(localStorage.getItem('user'));
  }, [user]);

  useEffect(() => {
    console.log(userInfos);
  }, [userInfos]);

  return (
    <div>
      {!contact && !userLog ? (
        <div>
          <button onClick={() => showLog()}>Connexion</button>
          <button onClick={() => showSign()}>Inscription</button>
        </div>
      ) : null}

      <form>
        {contact && userLog ? (
          <label>
            Contact LogIn
            <p>userPseudo</p>
            <p>userMail</p>
            <label>
              Message
              <textarea type='text' name='message'></textarea>
            </label>
          </label>
        ) : contact && !userLog ? (
          <label>
            Contact LogOut
            <label>
              Adresse Mail
              <input type='mail' name='mail'></input>
            </label>
            <label>
              Message
              <textarea type='text' name='message'></textarea>
            </label>
          </label>
        ) : null}

        {log ? (
          <label>
            Connexion
            <label>
              Adresse Mail
              <input
                type='mail'
                name='mail'
                value={userInfos.mail}
                onChange={(e) => setUserInfos({ ...userInfos, mail: e.target.value })}
              ></input>
            </label>
            <label>
              Mot de Passe
              <input
                type='password'
                name='password'
                onChange={(e) => setUserInfos({ ...userInfos, password: e.target.value })}
              ></input>
            </label>
            <button onClick={(e) => submit(e)}>Envoyer</button>
          </label>
        ) : sign ? (
          <label>
            Inscription
            <label>
              Pseudo
              <input type='text' name='pseudo'></input>
            </label>
            <label>
              Adresse Mail
              <input type='mail' name='mail'></input>
            </label>
            <label>
              Mot de Passe
              <input type='password' name='password'></input>
            </label>
          </label>
        ) : null}
      </form>
    </div>
  );
}

export default Form;
