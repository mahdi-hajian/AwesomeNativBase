/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Container, Drawer, Left, Header, Button, Icon, Body, Title, Right } from 'native-base';
import SideBar from './src/components/SideBar';
import { FooterComponent } from './src/components/footer';
import { ContentComponent } from './src/components/Content';

export default class App extends Component {
    CloseDrawer() {
        this
            .drawer
            ._root
            .close();
    }
    OpenDrawer() {
      this
          .drawer
          ._root
          .open();
    }
    render() {
        return (
            <Drawer
                ref={(ref) => {
                this.drawer = ref;
            }}
                content={< SideBar />}
                onClose={() => this.CloseDrawer()}
            >
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.OpenDrawer()}>
                                <Icon name="menu" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Header</Title>
                        </Body>
                        <Right />
                    </Header>
                    <ContentComponent />
                    <FooterComponent />
                </Container>
            </Drawer>
        );
    }
}
