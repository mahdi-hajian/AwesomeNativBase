import React from 'react';
import {
    Button,
    Text,
    Footer,
    FooterTab,
} from 'native-base';

const FooterComponent = () => (
        <Footer>
            <FooterTab>
                <Button full>
                    <Text>footer1</Text>
                </Button>
            </FooterTab>
            <FooterTab>
                <Button full>
                    <Text>footer2</Text>
                </Button>
            </FooterTab>
        </Footer>
); 

export { FooterComponent };
