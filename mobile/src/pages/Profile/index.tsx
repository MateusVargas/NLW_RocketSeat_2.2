import React, { useEffect, useState } from 'react'
import { View, Image, Text, ScrollView, ImageBackground, TextInput, CheckBox, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton, BorderlessButton} from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import styles from './styles'

import bgImage from '../../assets/images/give-classes-background.png'
import {Feather} from '@expo/vector-icons'

function Profile() {
    const {navigate} = useNavigation()
    

    useEffect(()=>{
        
    },[])

    function goToSignUpPages() {
        navigate('SignUpStep1')
    }

    function goToHomePage(){
        navigate('Landing')
    }

    function goToRecoveryPassword(){
        navigate('RecoveryPassword')
    }

    return(
        <View style={styles.container}>
            <PageHeader 
                topBarTitle="Meu perfil"
                profileData={{
                    subject: 'Geografia',
                    avatar: 'foto',
                    name: 'joao'
                }}
            />

            <ScrollView style={styles.containerProfile}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                <View style={styles.data}>
                    
                    <View style={styles.fields}>
                        <Text style={styles.formTitle}>Seus dados</Text>

                        <View style={styles.line}/>

                        <TextInput 
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Nome"
                        />
                        <TextInput
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Sobrenome"
                        />
                        <TextInput 
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="E-mail"
                        />
                        <TextInput 
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Whatsapp"
                        />
                        <TextInput
                            multiline={true}
                            numberOfLines={15} 
                            placeholderTextColor="#c1bccc"
                            style={styles.textarea}
                            placeholder="Bio"
                        />

                        <Text style={styles.formTitle}>Sobre a aula</Text>
                        
                        <View style={styles.line}/>

                        <TextInput 
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Matéria"
                        />
                        <TextInput 
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Custo da sua hora por aula"
                        />

                        <Text style={styles.formTitle}>Horários disponíveis</Text>
                        
                        <View style={styles.line}/>

                        <TextInput 
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Dia da semana"
                        />

                        <View style={styles.inlineButtons}>
                            <TextInput 
                                placeholderTextColor="#c1bccc"
                                style={styles.inlineInput}
                                placeholder="De"
                            />
                            <TextInput 
                                placeholderTextColor="#c1bccc"
                                style={styles.inlineInput}
                                placeholder="Até"
                            />
                        </View>

                        <View style={styles.buttonView}>
                            <RectButton style={styles.button}>
                                <Text style={styles.buttonText}>Salvar alterações</Text>
                            </RectButton>
                        </View>
                    </View>

                </View>

            </ScrollView>            
            
        </View>
    )
}
export default Profile