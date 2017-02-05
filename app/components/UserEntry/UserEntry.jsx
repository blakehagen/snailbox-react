import React from 'react';
import Login from './Login';
import Register from './Register';
import autoBind from 'react-autobind';
import styles from './userEntry.scss';

export default class UserEntry extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      type: 'login'
    };
  }

  render() {

    let form;
    let switchForm;
    if (this.state.type === 'login') {
      form       = <Login />;
      switchForm = 'Create Account';
    } else {
      form       = <Register/>;
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