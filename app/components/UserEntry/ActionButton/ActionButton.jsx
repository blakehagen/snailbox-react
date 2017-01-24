import React from 'react';
import styles from './actionButton.scss';

export default class ActionButton extends React.Component {
  render() {
    return (
      <div className={styles.button}>
        <p>{this.props.buttonAction}</p>
      </div>
    )
  }
}