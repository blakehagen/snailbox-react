import React from 'react';
import InputField from './InputField';
import ActionButton from './ActionButton';
import styles from './userEntry.scss';

export default class UserEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state       = {type: 'login'};
    this.toggleEntry = this.toggleEntry.bind(this);

  }

  render() {
    let entryForm;
    let switchFormText;

    if (this.state.type === 'login') {
      entryForm          = (
        <div className={styles.inputContainer}>
          <InputField type="text" placeholder="Email"/>
          <InputField style={{marginTop: '8px'}} type="password" placeholder="Password"/>
          <ActionButton buttonAction="Login"/>
        </div>
      );
      switchFormText = 'Register';
    } else {
      entryForm          = (
        <div className={styles.inputContainer}>
          <InputField type="text" placeholder="First Name"/>
          <InputField style={{marginTop: '8px'}} type="text" placeholder="Last Name"/>
          <InputField style={{marginTop: '8px'}} type="text" placeholder="Email"/>
          <InputField style={{marginTop: '8px'}} type="password" placeholder="Password"/>
          <InputField style={{marginTop: '8px'}} type="password" placeholder="Confirm Password"/>
          <ActionButton buttonAction="Register"/>
        </div>
      );
      switchFormText = 'Login';

    }

    return (
      <div className={styles.mainContainer}>
        <div className={styles.formContainer}>
          <div className={styles.formTitle}>
            <div className={styles.snailIcon}/>
            <h1 className={styles.title}>SnailBox</h1>
          </div>
          {entryForm}
          <div className={styles.actionToggle} onClick={this.toggleEntry}>
            <p>{switchFormText}</p>
          </div>
        </div>
      </div>
    )
  }

  toggleEntry() {
    if (this.state.type === 'login') {
      this.setState({
        type: 'register'
      });
    } else {
      this.setState({
        type: 'login'
      });
    }
  }
}