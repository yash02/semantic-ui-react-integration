import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ContainerExampleContainer from '../../components/Container'
import { Divider } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import { Grid, Image } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Label, Icon, Button, Segment, Step } from 'semantic-ui-react'





class Layout extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Header as='h1'>First Header</Header>
        <ContainerExampleContainer/>
        <Divider/>
        
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Input placeholder='Search...' />
      </Grid.Column>
      <Grid.Column>
         <Label>
          <Icon name='mail' /> 23
         </Label>
      </Grid.Column>
      <Grid.Column>
  <Button primary>Primary</Button>
    
          </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
    <Button secondary>Secondary</Button>
      </Grid.Column>
      <Grid.Column>
       <Segment raised>
          Pellentesque habitant morbi tristique senectus.
        </Segment>    
    </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>

  <Step.Group>
    <Step>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>

    <Step disabled>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>


      </div>
    );
  }
}


ReactDOM.render(<Layout />, document.getElementById("root"));





