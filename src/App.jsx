import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';



const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = ({ boxOwner, boxSize }) => {
    setMailboxes([
      ...mailboxes,
      { _id: mailboxes.length + 1, boxOwner, boxSize },
    ]);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <>
      <NavBar />
      <h1>Hello world!</h1>
      <Routes>
        <Route path="*"
          element={<h2>Mailbox not found!</h2>}
        />
        <Route path='/'
          element={<main><h1>Post Office</h1></main>}
        />
        <Route path='/mailboxes'
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path='/mailboxes/new'
          element={<MailboxForm addBox={addBox} />}
        />
        <Route path='/mailboxes/:mailboxId'
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
};

export default App;
