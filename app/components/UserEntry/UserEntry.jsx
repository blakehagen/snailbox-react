import React from 'react';
import Login from './Login';
import Register from './Register';
import ActionButton from 'components/ActionButton';
import autoBind from 'react-autobind';
import styles from './userEntry.scss';

export default class UserEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state       = {
      type: 'login'
    };
    this.toggleEntry = this.toggleEntry.bind(this);
  }

  render() {

    let form;
    let ActiveForm;
    let switchForm;
    if (this.state.type === 'login') {
      form       = <Login />;
      ActiveForm = 'Login';
      switchForm = 'Register';
    } else {
      form       = <Register/>;
      ActiveForm = 'Register';
      switchForm = 'Login';
    }

    return (
      <div className={styles.mainContainer}>
        <div className={styles.formContainer}>
          <div className={styles.formTitle}>
            <div className={styles.snailIcon}/>
            <h1 className={styles.title}>SnailBox</h1>
          </div>

          <div className={styles.inputContainer}>
            {form}
            <ActionButton buttonAction={ActiveForm}/>
          </div>

          <div className={styles.actionToggle} onClick={this.toggleEntry}>
            <p>{switchForm}</p>
          </div>
        </div>
      </div>
    )
  }

  toggleEntry() {
    if (this.state.type === 'login') {
      this.setState({type: 'register'});
    } else {
      this.setState({type: 'login'});
    }
  }
}