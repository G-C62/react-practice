import { useContext, useEffect, useState, useCallback } from 'react';

import AuthContext from '../Context/AuthContext';
import FetcherContext from '../Context/FetcherContext';

import loginApi from '../api/auth/login';
import CONF from '../config';

const Login = ({ history }) => {
  const loginFrom = {
    userid: '',
    password: '',
  };

  const [form, setForm] = useState(loginFrom);

  const { auth, setAuth } = useContext(AuthContext);
  const { axios } = useContext(FetcherContext);

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    },
    [form],
  );

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      loginApi(axios, form, setAuth);

    },
    [form, axios, setAuth],
  );

  useEffect(() => {
    if (auth.token && auth.token !== '') {
      history.push(CONF.HOME_PATH);
    }
  });

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          autoComplete="userid"
          name="userid"
          placeholder="아이디"
          onChange={onChange}
          value={form.userid}
          autoFocus
        />
        <input
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
};

export default Login;
