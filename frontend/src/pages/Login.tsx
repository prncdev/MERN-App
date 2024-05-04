import { Box, Button, InputAdornment } from '@mui/material';
import { FC, useState } from 'react';
import { FaRegUserCircle, FaSignInAlt } from 'react-icons/fa';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { Input } from '../components';

const Login: FC = function () {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handlerFromData = function (e: any) {
    const { name, value }: any = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <Box
      component='form'
      autoComplete='off'
      sx={{
        boxShadow: '3px 3px 32px -10px rgba(0,0,0,0.75)',
        paddingInline: 2,
        paddingBlock: 2,
        borderRadius: 2,
      }}
    >
      <h1 className='w-full flex gap-8 my-1 justify-center items-center font-semibold text-4xl'>
        <FaSignInAlt size={36}/>
        Log in
      </h1>
      <p className='text-xl text-center my-2 font-semibold text-gray-500'>
        Log in start using the service.
      </p>
      <section className='flex flex-col gap-3 py-2'>
        <div>
          <Input
            fullWidth
            label='Email'
            placeholder='Enter Email address or phone'
            name='email'
            value={formData.email}
            onChange={handlerFromData}
            type='text'
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <FaRegUserCircle size={22} />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <Input
            fullWidth
            label='Password'
            placeholder='Enter Password'
            name='password'
            value={formData.password}
            onChange={handlerFromData}
            type={isVisible ? 'text' : 'password'}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment
                  className='cursor-pointer'
                  position='end'
                  onClick={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <MdOutlineVisibility size={22} />
                  ) : (
                    <MdOutlineVisibilityOff size={22} />
                  )}
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className='w-2/5 mx-auto'>
          <Button
            variant='contained'
            className='w-full !py-3'
            disabled={!formData.email || !formData.password}
          >
            Login
          </Button>
        </div>
      </section>
    </Box>
  );
};

export default Login;
