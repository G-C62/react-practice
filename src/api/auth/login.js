
const loginApi = async (axios, form, setAuth) => {
  try {
    setAuth({ userid: '', token: '' });

    // const response = await axios.post('/login', {
    //   userid: form.userid,
    //   password: form.password,
    // });

    //setAuth({ userid: form.userid, token: response.data.access_token})
    setAuth({ userid: 'test', token: 'token'})

    // console.log(JSON.stringify(response));
  } catch (error) {
    console.log(error);
  }
};

export default loginApi;
