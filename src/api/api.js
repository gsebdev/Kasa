

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
        return accomodation
    }
    
}
export default api