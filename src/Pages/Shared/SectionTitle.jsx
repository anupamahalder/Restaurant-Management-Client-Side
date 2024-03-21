import PropTypes from 'prop-types';
import { GiChessQueen } from "react-icons/gi";

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto my-12'>
            <div className='flex justify-center mb-3'>
                <div>
                <hr className='w-[140px] mx-auto text-yellow-500 border-t-4 inline-block border-yellow-600'></hr>
                <GiChessQueen className='text-yellow-600 text-xl inline'></GiChessQueen>
                <hr className='w-[140px] mx-auto text-yellow-500 border-t-4 inline-block border-yellow-600'></hr>
                </div>
            </div>
            <p className='text-gray-800 text-4xl font-bold uppercase text-center'>{heading}</p>
            <h3 className='text-yellow-600 text-center my-2'>---{subHeading}---</h3>
        </div>
    );
};

// adding proptypes 
SectionTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired
}
export default SectionTitle;
