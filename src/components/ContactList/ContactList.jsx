import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'components/Redux/operations';
import { getContacts, getFilter } from 'components/Redux/selectors';
import { ListBox, Item, BtnItem, Text } from './ContactList.styled';

export const ConttactList = () => {
  const dispatch = useDispatch();
  let contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  if (filter !== '')
    contacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

  return (
    <ListBox>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            {name}:{number}
            <BtnItem type="button" onClick={() => dispatch(deleteContacts(id))}>
              Delete
            </BtnItem>
          </Item>
        ))}
      </ul>
      {contacts.length === 0 && <Text>no contacts available</Text>}
    </ListBox>
  );
};
