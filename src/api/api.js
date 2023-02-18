

const api = {
    getAll: async () => {
        const response = await fetch('http://localhost:3000/logements.json')
        const accomodationsList = await response.json()
        return accomodationsList
    },
    getOneById: async (id) => {
        const response = await fetch('http://localhost:3000/logements.json')
        const accomodationsList = await response.json()
        const accomodation = accomodationsList.find(item => item.id === id)
        
        if(!accomodation) {
            throw new Error('error', {cause: 404})
        }

        return accomodation     
    },
    getAllAbout: async () => {
        const response = await fetch('http://localhost:3000/about.json')
        const aboutTextsList = await response.json()
        return aboutTextsList
    }
    
}
export default api