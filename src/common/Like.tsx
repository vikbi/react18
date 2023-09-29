import { useState } from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs"

interface Props {
    onClick: () => void;
}

function Like({onClick} : Props) {

    const [liked, setLiked] = useState(false);

    const toggle = () => {
        setLiked(!liked);
        onClick()
    }

    return <div>
            {liked && <BsFillHeartFill size="30" color="red" onClick={ toggle } />}
            {!liked && <BsHeart size={30} color="red" onClick={ toggle } />}
    </div>
}

export default Like;