import {
  TextField,
  FilledInput,
  FormControl,
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  FormHelperText
} from "@mui/material";
import { useState } from "react";
import SwitchButton from "../../components/Switch";
import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";

export default function Form({ modoClaro, setModoClaro }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formSchema = yup.object().shape({
    userName: yup.string().required("Este campo é obrigatorio"),
    email: yup
      .string()
      .required("Este campo é obrigatorio")
      .email("E-mail invalido"),
    password: yup
      .string()
      .required("Este campo é obrigatorio")
      .matches("^(?=.*[A-Z])", "A sua senha deve conter 1 letra Maiuscula")
      .matches("^(?=.*[a-z])", "A sua senha deve conter 1 letra minuscula")
      .matches("^(?=.*[0-9])", "A sua senha deve conter 1 numero")
      .matches(
        "^(?=.*[!#@$%&])",
        "A sua senha deve conter um caractere especial"
        )
      .matches("^.{8,}$", "A sua senha deve conter oito caracteres"),
    repeatPassword: yup
      .string()
      .required("Este campo é obrigatorio")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFuncion = (data) => navigate("/bemVindo", { state: { data } });

  return (
    <Container modoClaro={modoClaro}>
      <Box component="div" className="header">
        <h2>Registro de Usuario</h2>
        <SwitchButton setModoClaro={setModoClaro} />
      </Box>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitFuncion)}
      >
        <TextField
          className="userInput"
          label="Nome de Usuario"
          variant="filled"
          {...register("userName")}
          error={errors.userName}
          helperText={errors.userName?.message}
        />
        <TextField
          className="userInput"
          error={errors.email}
          label="E-Mail"
          variant="filled"
          {...register("email")}
          helperText={errors.email?.message}
        />
        <Box component="div" autoComplete="off">
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <InputLabel htmlFor="password">Senha</InputLabel>
            <FilledInput
            id="password"
            {...register('password')}
            error={errors.password}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>{errors.password?.message}</FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <InputLabel htmlFor="repeatPassword">Repetir senha</InputLabel>
            <FilledInput
            id="repeatPassword"
            error={errors.repeatPassword}
            {...register('repeatPassword')}
            label='Repetir senha'
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>{errors.repeatPassword?.message}</FormHelperText>
          </FormControl>
        </Box>
        <Button
          type="submit"
          sx={{ "background-color": "black", margin: "10px 10px" }}
        >
          Enviar
        </Button>
      </Box>
    </Container>
  );
}
