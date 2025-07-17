// import React, { useState } from "react";

// export const SubscribeForm = () => {
//     const [email, setEmail] = useState("");
//     const [message, setMesage] = useState("");
//     const [submitted, setSubmitted] = useState(false); 

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         setSubmitted(true);
//         setMesage(`Gracias por suscribirte, ${email}!`);

//         try {
//             const res = await fetch('apiPendiente', { email });
//             setMesage(res.data.message || 'Te haz suscrito con exito✅, revisa tu correo para mas detalles');
//         } catch (error) {
//             throw new Error('Ocurrio un error al enviar el formulario: ' + error);
//         } finally {
//             setSubmitted(false);
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="email" placeholder="Correo Electronico" value={email} onChange={(e) => setEmail(e.target.value)} required className="px-4 py-2 bg-white ring-2 ring-blue-400 text-gray-800 rounded-md md:rounded-l-md flex-1 md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
//             <button type="submit" disabled={submitted} className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium">
//                 {submitted ? 'Enviando...' : 'Suscribirse'}
//             </button>
//             {message && <p className="text-sm text-gray-600">{message}</p>}
//         </form>
//     )
// }

// export default SubscribeForm;