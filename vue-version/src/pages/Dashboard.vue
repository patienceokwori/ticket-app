<template>
    <v-container>
        <h2> Dashboard</h2>
        <v-row>
            <v-col>
                <StatsCard title="Total Tickets" :value="store.totalTickets" color="primary" />
            </v-col>
            <v-col>
                <StatsCard title="Open Tickets" :value="store.openTickets.length" color="green" />
            </v-col>

        </v-row>
    </v-container>
    </template>


<script setup>
import StatsCard from '../components/StatsCard.vue'
import { useTicketStore } from '../store/ticketStore'

const store = useTicketStore()
</script>