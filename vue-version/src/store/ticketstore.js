import { defineStore } from 'pinia'
export const useTicketStore = defineStore('ticketStore', {
    state: () => ({
        tickets: [],
        user: null
    }),


    getters: {
        openTickets: (state) => state.tickets.filter(t => t.status === 'open'),
        totalTickets: (state) => state.tickets.length,
    },

    actions: {
        addTickets(ticket) {
            this.tickets.push({ id: Date.now(), ...ticket })
        },
        updateTicket(id, updatedTicket) {
            const index = this.tickets.findIndex(t => t.id === id)
            if (index !== -1) this.tickets[index] = { ...this.tickets[index],...updatedTicket }
        },

        deleteTicket(id) {
            this.tickets = this.tickets.filter(t => t.id !== id)
        },

        login(user) {
            this.user = user
            localStorage.setItem('ticketapp_seesion', JSON.stringify(user))
        },


        logout() {
            this.user = null
            localStorage.removeItem('ticketapp_session')
        }
    }
})