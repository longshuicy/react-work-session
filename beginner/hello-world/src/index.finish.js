import React, {useState, useEffect} from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const content = "Hello, world!"

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }
//
// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
// };

// const element = (<h1>
//             {content}
//             Hello, {formatName(user)}!
//         </h1>)
//
//
// const Welcome = () => {
//     // return (element)
//
//     const [name, setName] = useState('World');
//
//     useEffect(() => {
//         document.title = `Hello, ${name}`;
//     });
//
//     return (
//         <>
//             <h1>Hello, {name}!</h1>
//             <button onClick={() => setName('James')}>
//                 Click me to change the name
//             </button>
//         </>
//     )
// }

root.render(
    // <h1>Hello, world!</h1>
    // <h1>{content}</h1>
    // <Welcome />
);
