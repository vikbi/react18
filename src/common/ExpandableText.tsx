import {useState} from 'react';

interface Props {
    children: string;
    maxLength: number
}

const ExpandableText = ({children, maxLength} : Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    if (children.length <= maxLength) { return <p>{children}</p>}
    const text = !isExpanded ? children.substring(0, maxLength) : children;
    return <div>{text}<button onClick={()=> setIsExpanded(!isExpanded)} >{isExpanded ? "Less" : "More"}</button></div>;
}

export default ExpandableText;