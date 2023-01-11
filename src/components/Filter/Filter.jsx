import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'components/Redux/selectors';
import { setFilter } from 'components/Redux/filterSlice';
import { FilterBox, TitleList, FilterForm, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const changeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };
  return (
    <FilterBox>
      <TitleList>Contacts</TitleList>
      <FilterForm>Find contacts by name</FilterForm>
      <FilterInput
        type="text"
        value={filter}
        onChange={changeFilter}
      ></FilterInput>
    </FilterBox>
  );
};
