import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    _id: 0,
    boxSize: '',
    boxOwner: '',
}

const MailboxForm = ({ addBox }) => {
    const [boxOwner, setBoxOwner] = useState("");
    const [boxSize, setBoxSize] = useState("Small");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!boxOwner) return;
      
      addBox({ boxOwner, boxSize });
      setBoxOwner(""); // Reset form
      setBoxSize("Small");
      navigate("/mailboxes"); // Redirect to mailboxes page
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Box Owner:</label>
        <input type="text" value={boxOwner} onChange={(e) => setBoxOwner(e.target.value)} required />
  
        <label>Box Size:</label>
        <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
  
        <button type="submit">Add Mailbox</button>
      </form>
    );
  };

export default MailboxForm;