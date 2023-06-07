const api = {
    getAll: async () => {
        const response = await fetch(process.env.PUBLIC_URL + 'logements.json')
        const accomodationsList = await response.json()
        return accomodationsList
    },
    getOneById: async ({ params }) => {
        if(!params.id) {
            throw new Response('Not found', {status: 404})
        }
        const response = await fetch(process.env.PUBLIC_URL + 'logements.json')
        const accomodationsList = await response.json()
        const accomodation = accomodationsList.find(item => item.id === params.id)
        
        if(!accomodation) {
            throw new Response('Not found', {status: 404})
        }

        return accomodation     
    },
    getAllAbout: async () => {
        const response = await fetch(process.env.PUBLIC_URL + 'about.json')
        const aboutTextsList = await response.json()
        return aboutTextsList
    }
    
}
export default api