import { Contact } from 'types/contacts/contact';

export const ContactsLoader = ({ contacts }: { contacts: Contact[] }) => (
  <>
    {contacts.map((contact) => (
      <ContactCard key={contact.name} {...contact} />
    ))}
  </>
);
const ContactCard = ({ name, email, position }: Contact) => (
  <div>
    <p>
      {name} - {position}
    </p>
    <a href={'mailto:' + email}>{email}</a>
  </div>
);
export default ContactCard;
