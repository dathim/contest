import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/users/user.slice';
import { useActions, useAppSelector } from './hooks/useActions';
import { useGetTestQuery } from './store/api/api';
import { Layout } from '@/components/Layout/Layout';
// import { useDispatch } from 'react-redux';
// import { gql, useQuery } from '@apollo/client';
// import { addUser } from './store/reducers/usersSlice';

// const GET_USERS = gql`
//   query GetDogs {
//     dogs {
//       id
//       breed
//     }
//   }
// `;

function App() {
  console.log('RENDER');
  const [count, setCount] = useState(0);

  // const dispatch = useDispatch();
  // const { loading, error, data } = useQuery(GET_USERS);
  // useEffect(() => {
  //   if (data) {
  //     data.users.forEach((user: any) => dispatch(addUser(user)));
  //   }
  // }, [data, dispatch]);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  const { addUser } = useActions();
  console.log(addUser);
  const users = useAppSelector((state) => state.users);

  console.log(users);

  // const { makeTestAction } = useActions();

  // useEffect(() => {
  //   makeTestAction();
  // }, []);

  // const test = useAppSelector((state) => state.testAsync);
  // console.log(test);

  const { isLoading, data } = useGetTestQuery(null);
  console.log({ RTK: data });

  if (isLoading) return <h1>LOADING</h1>;

  return (
    <Layout>
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => addUser('dawd')}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    </Layout>
  );
}

export default App;
