import React, { ReactNode } from 'react'
import {View,Image,Text} from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'

import styles from './styles'
import backIcon from '../../assets/images/icons/back.png'
import logo from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native'

interface PageHeaderProps{
    title?: string,
    topBarTitle: string,
    headerRight?: ReactNode;//componente como propriedade
    profileData?: {
        subject: string | null, 
        avatar: string,
        name: string
    };
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, topBarTitle, headerRight, profileData, children }) => {

    const {navigate} = useNavigation()
    
    function handleGoBack() {
        navigate('Landing')
    }

    return(
        <View style={
            profileData ? 
            {
                height:300,
                padding: 40,
                backgroundColor: '#8257e5'
            }: 
                styles.container
            }
            >
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain"/>
                </BorderlessButton>
                <Text style={styles.topBarTitle}>{topBarTitle}</Text>
                <Image source={logo} resizeMode="contain"/>
            </View>
            
            <View style={profileData ? {justifyContent:'center',flexDirection: 'row',
        alignItems: 'center'} : styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
                {profileData && 
                    <View style={styles.profileData}>
                        <Text style={styles.avatar}>{profileData.avatar}</Text>
                        <Text style={styles.name}>{profileData.name}</Text>
                        <Text style={styles.subject}>{profileData.subject}</Text>
                    </View>
                }
            </View>
            {children}
        </View>
    )
}
export default PageHeader