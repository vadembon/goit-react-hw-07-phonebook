import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchContacts } from './Redux/operations';
import { getIsLoading, getError } from './Redux/selectors';
import { ContactForm } from './ContactForm/Contact form';
import { Filter } from './Filter/Filter';
import { ConttactList } from './ContactList/ContactList';
import { BoxForm } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <BoxForm>
      <ContactForm />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ConttactList />
      <ToastContainer position="top-right" theme="colored" autoClose={2000} />
    </BoxForm>
  );
};
