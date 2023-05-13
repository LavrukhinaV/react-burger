import formStyles from './form.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { linksType } from "../../utils/types";

function Form({ children, title, buttonText, links, onFormSubmit }) {

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

Form.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  onFormSubmit: PropTypes.func,
  links: PropTypes.arrayOf(linksType),
  children: PropTypes.node
};

export default Form;