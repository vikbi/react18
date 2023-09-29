import {useState, ReactNode} from 'react';
interface Props {
    // text: string,
    children: ReactNode;
    onClose : () => void; 
}
function Alert({children, onClose} : Props) {
    const [opened, setOpened] = useState(false);
    
    const toggle = () => {
        setOpened(!opened)
        // onClick();
    }

    return ( 
    
        <div className='alert alert-primary alert-dismissible' onClick={() => toggle }>
            {children}
            <button type="button" className='btn-close' data-bs-dismiss="alert" onClick={onClose}></button>
        </div>
    );
}

export default Alert;

