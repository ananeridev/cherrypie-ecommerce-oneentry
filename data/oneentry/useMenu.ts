// import { useEffect, useState } from "react";
// import { fetchMenu } from "./fetchMenu";

// export const useMenu = () => {
//     const [menu, setMenu] = useState<Nav[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => { 
//         const loadMenu = async () => {
//             try {
//                 const menuData = await fetchMenu();
//                 setMenu(menuData);
//             } catch (error) { 
//                 setError("Falhou ao carregar o menu");
//                 console.error("Falhou ao carregar o menu", error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         loadMenu();
//     }, []);

//     return { menu, loading, error };
// };
