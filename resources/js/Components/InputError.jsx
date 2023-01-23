export default function InputError({ message, className = "" }) {
    return message ? (
        <p className={"text-sm text-red-600 " + className}>{message}</p>
    ) : null;
}

// import React, { useRef, useEffect } from "react";

// export default function InputError({ message, className = "" }) {
//     const inputRef = useRef(null);

//     useEffect(() => {
//         if (message) {
//             inputRef.current.scrollIntoView({ behavior: "smooth" });
//         }
//     }, [message]);

//     return message ? (
//         <p ref={inputRef} className={"text-sm text-red-600 " + className}>
//             {message}
//         </p>
//     ) : null;
// }
