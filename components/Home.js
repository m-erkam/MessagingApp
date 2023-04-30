import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
} from 'react-native';


function Section({ children, title }) {
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                ]}
            >
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                ]}
            >
                {children}
            </Text>
        </View>
    );
}

const Home = () => {

    const backgroundStyle = {
        backgroundColor: useColorScheme(),
      };
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}
            >
                <View
                    style={{
                        backgroundColor: useColorScheme(),
                    }}
                >

                    <Section title="Ahmet">
                        +: Maça bilet alıyorum haberin olsun
                    </Section>
                    <Section title="Babam">
                        -: Görüşmek üzere baba 
                    </Section>
                    <Section title="İçişleri Bakanlığı">
                        +: Kendisini polis, savcı, istihbarat mensubu olarak tanı...
                    </Section>

                </View>
            </ScrollView>
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '500',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 13,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
export default Home;