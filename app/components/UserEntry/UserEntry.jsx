import React from 'react';
import InputField from './InputField';
import ActionButton from './ActionButton';
import styles from './userEntry.scss';

export default class UserEntry extends React.Component {
  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.formContainer}>
          <div className={styles.formTitle}>
            <div className={styles.snailIcon}/>
            <h1 className={styles.title}>SnailBox</h1>
          </div>
          <div className={styles.inputContainer}>
            <InputField type="text" placeholder="Email"/>
            <InputField style={{marginTop: '8px'}} type="password" placeholder="Password"/>
            <ActionButton buttonAction="Login" />
          </div>
          <div className={styles.actionToggle}>
            <p>Login/Sign Up</p>

          </div>
        </div>
      </div>
    )
  }
}