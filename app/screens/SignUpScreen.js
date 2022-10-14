import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import * as Yup from 'yup'

import AppForm from '../components/AppForm'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import AppFormField from '../components/AppFormField'
import FormText from '../components/FormText'
import PreviousButton from '../components/PreviousButton'
import SubmitButton from '../components/SubmitButton'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
})

const SignUpScreen = (props) => (
  <>
    <PreviousButton />
    <FormText title='SignUp' subTitle="Let's explore your dream house" />
    <AppForm
      initialValues={{ email: '' }}
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
      <AppText style={styles.text}>You will receive a confirmation email. Click to verify</AppText>
      <ImageBackground
        resizeMode='stretch'
        style={styles.container}
        source={require('../assets/login.png')}
      >
        <View style={styles.dropShadow}>
          <View style={styles.buttons}>
            <SubmitButton title='Next' />
            <AppButton title='Already have an account?' color='theme' />
          </View>
        </View>
      </ImageBackground>
    </AppForm>
  </>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    paddingBottom: 35,
    bottom: 0,
    top: 60,
  },
  buttons: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 85,
  },
  text: {
    marginTop: 30,
    marginLeft: 25,
    fontSize: 12,
  },
  dropShadow: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    paddingBottom: 35,
  },
})

export default SignUpScreen
