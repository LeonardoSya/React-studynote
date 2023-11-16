import { useState } from 'react';
import {useImmer} from 'use-immer'

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    // person.firstName = e.target.value;
    // 创建一个新对象并把它传递给setPerson
    setPerson({
      // 使用对象展开语法
      ...person,
      firstName: e.target.value,
      // lastName:person.lastName,
      // email:person.email

    })
  }

  function handleLastNameChange(e) {
    // person.lastName = e.target.value;
    setPerson({
      ...person,
      lastName: e.person.lastName,
    })
  }

  function handleEmailChange(e) {
    // person.email = e.target.value;
    setPerson({
      ...person,
      email: e.target.value
    })
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
