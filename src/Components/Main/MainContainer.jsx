import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MainContainerGrid from "./MainContainerGrid";

function MainContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="max">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '89vh' }} >
                    {/* MainContainerGrid fra MainContainerGrid*/}
                    <MainContainerGrid/>
                </Typography>
            </Container>
        </React.Fragment>
    );
}

export default MainContainer();