import * as constantes from '../utils/constantes';

const fetchData = async (filename, action, form = null) => {
    const OPTIONS = {};
    if (form) {
        OPTIONS.method = 'POST';
        OPTIONS.body = form;
    } else {
        OPTIONS.method = 'GET';
    }
    try {
        const PATH = new URL(`${constantes.IP}/services/public/${filename}.php`);
        PATH.searchParams.append('action', action);

        const RESPONSE = await fetch(PATH.href, OPTIONS);
        if (!RESPONSE.ok) {
            throw new Error(`HTTP error! status: ${RESPONSE.status}`);
        }
        return await RESPONSE.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return { error: true, message: error.message };
    }
};

const getClientDataFromAPI = async (clientId) => {
    try {
      const response = await fetch(`${CLIENTE_API}?id=${clientId}`);
      const data = await response.json();
  
      if (data.status) {
        return data.dataset;
      } else {
        console.error("Error al obtener datos del cliente:", data.error);
        return null;
      }
    } catch (error) {
      console.error("Error en la solicitud a la API:", error);
      return null;
    }
  };


export default fetchData;
