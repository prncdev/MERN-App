import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { me } from '../services/auth/authSlice';

const Home: React.FC = function () {
  const [userData, setUserData] = React.useState<any>();

  const dispatch = useDispatch();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );

  React.useEffect(() => {
    const sessionID = localStorage.getItem('userToken');
    const userToken: string | null = sessionID ? JSON.parse(sessionID) : null;
    dispatch(me(userToken));
    
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      setUserData(user);
    }
  }, [userData]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ul>
            {Object.entries(user).map(([key, value]: any, index) => {
              if(key !== 'id') {
                return (
                  <li className='py-3 px-2' key={key + index}>
                    <span className='font-semibold mx-2'>{key}</span>
                    <span className=''>{value}</span>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Home;
