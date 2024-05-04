import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { lightBlue, pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import { FC, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { Input } from '../components';
import { ageList } from '../constants/ageList';
// interface IError {
//   [key: string]: string;
// }

const Signin: FC = function () {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: '',
    gender: '',
    email: '',
    password: '',
    conpassword: '',
  });

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handlerFromData = function (e: any) {
    const { name, value }: any = e.target;
    setFormData({ ...formData, [String(name).trim()]: value });
  };

  const handleFormSubmit = function (event: any) {
    event.preventDefault();
    const fullName = formData.name + ' ' + formData.surname;
    console.log(fullName);
  };

  const controlProps = (item: string) => ({
    checked: formData.gender === item,
    onChange: handlerFromData,
    value: item,
    name: 'gender',
    inputProps: { 'aria-label': item },
  });

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
      onSubmit={handleFormSubmit}
    >
      <h1 className='w-full flex gap-8 my-1 justify-center items-center font-semibold text-4xl'>
        <FaUser size={36} />
        Sign up
      </h1>
      <p className='text-xl text-center my-2 font-semibold text-gray-500'>
        Create an account it's free and always be.
      </p>
      <section className='flex flex-col gap-3 py-2'>
        <div className='flex gap-3'>
          <Input
            fullWidth
            label='First Name'
            placeholder='Enter Name'
            name='name'
            value={formData.name}
            onChange={handlerFromData}
            type='text'
            required
          />

          <Input
            fullWidth
            label='Surname'
            placeholder='Enter Surname'
            name='surname'
            value={formData.surname}
            onChange={handlerFromData}
            type='text'
            required
          />
        </div>
        <div>
          <Input
            fullWidth
            label='Email'
            placeholder='Enter Email address or phone'
            name='email'
            value={formData.email}
            onChange={handlerFromData}
            type='email'
            required
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
        <div>
          <Input
            fullWidth
            label='Confirm password'
            placeholder='Re-enter password'
            name='conpassword'
            value={formData.conpassword}
            onChange={handlerFromData}
            type={isVisible ? 'text' : 'password'}
            required
          />
        </div>

        <div className='flex flex-col gap-3'>
          <div>
            <FormControl sx={{ minWidth: 120 }} size='small'>
              <InputLabel required id='select-small-label'>
                Age
              </InputLabel>
              <Select
                labelId='select-small-label'
                name='age'
                label='Age'
                placeholder="What's your age?"
                value={formData.age}
                onChange={handlerFromData}
              >
                <MenuItem value=''>
                  <em>What's your age?</em>
                </MenuItem>
                {ageList.map((age) => (
                  <MenuItem key={'age' + age} value={age}>
                    {age}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div>
            <FormControl>
              <FormLabel required>
                Gender
              </FormLabel>
              <FormControlLabel
                control={
                  <Radio
                    sx={{
                      color: lightBlue[900],
                      '&.Mui-checked': {
                        color: lightBlue[700],
                      },
                    }}
                    {...controlProps('male')}
                  />
                }
                label='Male'
              />
              <FormControlLabel
                control={
                  <Radio
                    sx={{
                      color: pink[800],
                      '&.Mui-checked': {
                        color: pink[600],
                      },
                    }}
                    {...controlProps('female')}
                  />
                }
                label='Female'
              />
            </FormControl>
          </div>
        </div>

        <div className='w-1/2 mx-auto'>
          <Button
            variant='contained'
            className='w-full !py-3'
            type='submit'
            disabled={
              !formData.name ||
              !formData.surname ||
              !formData.age ||
              !formData.email ||
              !formData.gender ||
              !formData.password ||
              !formData.conpassword
            }
          >
            Sign up
          </Button>
        </div>
      </section>
    </Box>
  );
};

export default Signin;
