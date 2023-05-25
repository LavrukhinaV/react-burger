import formStyles from './form.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from "react-router-dom";
import { TLink } from "../../utils/types";
import { FC, PropsWithChildren } from "react";
import { FormEvent } from 'react';

type FormPropsType = {
  title: string;
  buttonText: string;
  links: Array<TLink>;
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const Form: FC<PropsWithChildren<FormPropsType>> = ({ children, title, buttonText, links, onFormSubmit }) => {

  return (
    <form className={formStyles.form} onSubmit={onFormSubmit}>
      <h1 className="text text_type_main-medium mb-6" >{title}</h1>
      {children}
      <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20">
        {buttonText}
      </Button>
      {links.map((link, index) => 
        <p className="text text_color_inactive mb-4" key={index}>
          {link.title}
          <Link to={link.path} className={`${formStyles.link} ml-2`}>{link.linkName}</Link>
        </p>
      )}
    </form>
  );
}

export default Form;