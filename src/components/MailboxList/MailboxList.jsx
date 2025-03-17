import { Link } from 'react-router';


const MailboxList = ({ mailboxes }) => {
    return (
      <div>
        <h2>Mailboxes</h2>
        {mailboxes.length === 0 ? (
          <p>No mailboxes yet!</p>
        ) : (
          <div className="mailbox-container">
            {mailboxes.map((mailbox) => (
              <div key={mailbox._id} className="mail-box">
                <Link to={`/mailboxes/${mailbox._id}`}>
                  <p>Mailbox #{mailbox._id}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

export default MailboxList;