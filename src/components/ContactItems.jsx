import PropTypes from 'prop-types';

const ContactItems = ({ id, name, number, onDelete }) => {
    return ( 
        <>
        <span>{ name }</span>
        <span>{ number }</span>
            <button
                type="button"
                data-id={id}
                onClick={() => {
                onDelete(id)
                }}>
                Delete
            </button>
        </>
     );
}
 

export default ContactItems;

ContactItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
}
