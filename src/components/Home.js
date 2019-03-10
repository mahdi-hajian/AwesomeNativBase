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
import { SideBar } from './index';
import { FooterComponent } from './footer';
import { ContentComponent } from './Content';

class Home extends Component {
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

export { Home };
