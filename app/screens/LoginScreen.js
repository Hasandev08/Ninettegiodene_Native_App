import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import * as Yup from 'yup'

import AppFormField from '../components/AppFormField'
import FormText from '../components/FormText'
import PreviousButton from '../components/PreviousButton'
import SubmitButton from '../components/SubmitButton'
import AppForm from '../components/AppForm'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

function LoginScreen(props) {
  return (
    <>
      <PreviousButton />
      <FormText title='Login' subTitle="Let's explore your dream house" />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          name='email'
          keyboardType='email-address'
          placeholder='Enter your email'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          name='password'
          secureTextEntry
          placeholder='Password'
          textContentType='password'
        />
        <ImageBackground
          resizeMode='stretch'
          style={styles.container}
          source={require('../assets/login.png')}
        >
          <View style={styles.buttons}>
            <SubmitButton title='Login' />
          </View>
        </ImageBackground>
      </AppForm>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    paddingBottom: 50,
    top: 60,
  },
  buttons: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 130,
  },
  text: {
    marginTop: 10,
    marginLeft: 25,
    fontSize: 12,
  },
})

export default LoginScreen
