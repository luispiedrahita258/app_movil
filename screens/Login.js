import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//Formik
import { Formik } from 'formik';

//icons

import {Octicons, Ionicons,Fontisto} from '@expo/vector-icons';
//
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    Subtitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
}from './../components/styles';

import { View } from 'react-native';


const {brand,darkLight,primary} = Colors;

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
    <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
            <PageLogo resizeMode="cover" source={require('./../assets/img/goku1.jpg')} />
            <PageTitle>Bienvenido</PageTitle>
            <Subtitle>Iniciar Sesión</Subtitle>
            <Formik
            initialValues={{email: '', password: '' }}
            onSubmit={(values)=>{
            console.log(values);
            }}
            >{({handleChange, handleBlur, handleSubmit,values}) => (<StyledFormArea>
                <MyTextInput
                label="Dirección de Correo"
                icon="mail"
                placeholder= "ejemplo@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType= "email-address"
                />
                <MyTextInput
                label="Contraseña"
                icon="lock"
                placeholder= "* * * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
                />
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                    <ButtonText>
                        Iniciar Sesión
                    </ButtonText>
                </StyledButton>
                <Line />
                <StyledButton google={true} onPress={handleSubmit}>
                    <Fontisto name="google" color={primary} size={25} />
                    <ButtonText google={true}>Iniciar sesión con Google</ButtonText>
                    </StyledButton>
                    <ExtraView>
                    <ExtraText>No tienes una cuenta?</ExtraText>
                    <TextLink>
                        <TextLinkContent>Registrate</TextLinkContent>
                    </TextLink>
                    </ExtraView>
            </StyledFormArea>
            )}

            </Formik>
        </InnerContainer>
    </StyledContainer>
    );
};

const MyTextInput = ({label,icon,isPassword,hidePassword,setHidePassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}  />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    );
};

export default Login;