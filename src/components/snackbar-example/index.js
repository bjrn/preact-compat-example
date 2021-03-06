import React from 'react'
import { Button, Snackbar } from 'react-toolbox';

export default class SnackbarExample extends React.Component {

 handleSnackbarClick = (event, instance) => {
   console.log('handleSnackbarClick', event, instance);
   this.setState({ active: false });
 };

 handleSnackbarTimeout = (event, instance) => {
   console.log('handleSnackbarClick', event, instance);
   this.setState({ active: false });
 };

 handleClick = () => {
   this.setState({ active: true });
 };

 state = {
   active: false
 };

 render () {
   return (
     <section>
       <Button label='Show snackbar' raised primary onClick={this.handleClick} />
       <Snackbar
         action='Dismiss'
         active={this.state.active}
         icon='question_answer'
         label='Snackbar action cancel'
         timeout={2000}
         onClick={this.handleSnackbarClick}
         onTimeout={this.handleSnackbarTimeout}
         type='cancel'
       />
     </section>
   );
 }

}
