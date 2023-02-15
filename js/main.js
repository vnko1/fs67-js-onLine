const URL = 'https://63ecd9dc31ef61473b2a8c82.mockapi.io/todo';

axios.get(URL).then(res => console.log(res.data));
// axios.post(URL, { text: 'hello', isDone: true });
// axios.put(`${URL}/5`, { text: 'Hello world', isDone: true });
// axios.delete(`${URL}/1`);
// axios.get(URL).then(res => console.log(res.data));
// axios.delete(`${URL}/6`);
// axios.get(URL).then(res => console.log(res.data));
// axios.post(URL, { text: 'post' });
