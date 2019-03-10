/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Left, Body, Right, Button, Text, Icon } from 'native-base';

export default class SideBar extends Component {
    render() {
        return (
            <Container style={styles.SideBarStyle}>
                <Content>
                    {/* <Image source={{ uri: 'https://www.tabandesign.ir/assets/Upload/MyServiceImage/2.jpg' }} style={{ width: '100%', height: 150 }} /> */}
                    <Image source={require('../images/car.jpg')} style={{ width: '100%', height: 150 }} />
                    <List>
                        <ListItem>
                            <Left>
                                <Text>native base</Text>
                            </Left>
                            <Body />
                            <Right>
                                <Button rounded style={{ height: 30, width: 100 }}>
                                    <Text>Primery</Text>
                                </Button>
                            </Right>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                                <Icon name="alert" style={{color:'green'}}></Icon>
                            </Left>
                            <Body>
                                <Text>Badge</Text>
                            </Body>
                            <Right>
                            </Right>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                                <Icon type="MaterialIcons" name="3d-rotation" style={{color:'blue'}}></Icon>
                            </Left>
                            <Body>
                                <Text>botton</Text>
                            </Body>
                            <Right>
                                <Button style={{ height: 30, width: 100, backgroundColor:'red' }}>
                                    <Text>9 types</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    SideBarStyle: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
