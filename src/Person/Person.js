import React from 'react';
import styles from'./Person.module.css';

const person = (props) => {

    return (

        <div className={styles.Person}>
            <p  onClick={props.click}>Hi, my name is {props.name} and I am {props.age}. </p>
            <p>You can change my name if you wish!</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;