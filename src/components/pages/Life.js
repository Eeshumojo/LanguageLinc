import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { render } from "react-dom";
import { useForm } from "react-cool-form";

import '../../components/pages/Services.css'


const Field = ({ label, id, ...rest }) => (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </div>
  );
  
  const Select = ({ label, id, children, ...rest }) => (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...rest}>
        {children}
      </select>
    </div>
  );
  

export default function Life() {
    const { form } = useForm({
        defaultValues: { link: "", language: "" },
        onSubmit: (values) => alert(JSON.stringify(values, undefined, 2)),
      });
    
      return (
        <form ref={form}>
          <Field label="Link" id="link" name="link" />
          <Select label="Language" id="language" name="language">
            <option value="">Choose Language</option>
            <option value="English">English</option>
            <option value="Hindi">Vue</option>
            <option value="Bangla">Bangla</option>
            <option value="Tamil">Tamil</option>
          </Select>
    
          <input type="submit" name="Convert" value="Convert" />
        </form>
      );
}
