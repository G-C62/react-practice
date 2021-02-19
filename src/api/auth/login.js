import Cookies from 'js-cookie';

const loginApi = async (axios, form, setAuth) => {
  try {
    setAuth({ userid: '', token: '' });

    const response = await axios.post('/login', {
      userid: form.userid,
      password: form.password,
    });

    console.log(Cookies.get('userid'));

    console.log(JSON.stringify(response));
  } catch (error) {
    console.log(error);
  }
};

export default loginApi;
