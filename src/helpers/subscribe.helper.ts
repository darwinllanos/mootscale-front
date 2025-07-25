import type { ISubscribe } from "../interfaces/types";

export const subscribeHelper = async (email: string): Promise<ISubscribe> => {
    const res = await fetch('https://mootscale-backend.onrender.com/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
    });

    const data = await res.json();

    if(!res.ok){
        const errorMessage = Array.isArray(data.message)? data.message.join(', '): data.message || 'Ocurrio un error al suscribirse.';
        throw new Error(errorMessage);
    }
    
    return data;
}