import React, { ChangeEvent } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getFilter} from '../../redax/contacts/contacts-selector';
import {changeFilter} from '../../redax/contacts/filter-slice';



export const Filter = () => {
 
  const filterValue:string=useSelector(getFilter);
  const dispatch=useDispatch();

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.currentTarget.value));
  };


  return (
    <>
      <div className="col-md-6">
        <input
          id="inputFilterId"
          className="form-control form-control-lg  mb-4 "
          type="text"
          placeholder=" Search contact ..."
          aria-label=".form-control-lg example"
          name="filter"
          value={filterValue}
          onChange={onFilterChange}
        ></input>
      </div>
    </>
  );
};
