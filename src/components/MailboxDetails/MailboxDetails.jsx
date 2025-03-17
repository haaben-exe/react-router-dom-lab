import { useParams } from 'react-router';

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
  
    return (
      <div>
        {selectedBox ? (
          <>
            <h2>Mailbox #{selectedBox._id}</h2>
            <p><strong>Owner:</strong> {selectedBox.boxOwner}</p>
            <p><strong>Size:</strong> {selectedBox.boxSize}</p>
            <p><strong>Mailbox ID:</strong> {selectedBox._id}</p>
          </>
        ) : (
          <h2>Mailbox Not Found!</h2>
        )}
      </div>
    );
  };

export default MailboxDetails;