import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
} from '@mui/material';
import React from 'react';

type PasswordInputProps = {
  helperText?: string | null;
} & OutlinedInputProps;

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ error, helperText, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };

    return (
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          {props.label}
        </InputLabel>
        <OutlinedInput
          ref={ref}
          error={error}
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Пароль"
          {...props}
        />
        {error && (
          <FormHelperText
            error
            id="outlined-adornment-password"
          >
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
);

export default PasswordInput;
