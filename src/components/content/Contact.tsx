import contacts from 'types/contacts/contactDirectory';
import { ContactsLoader } from './contacts/Contacts';

const Contact = ({}) => (
  <section>
    <h1>Contact</h1>
    <ContactsLoader contacts={contacts} />
  </section>
);
export default Contact;
