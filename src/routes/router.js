import { createRouter, createWebHashHistory } from "vue-router"

// 页面导入
import LoginPage from "@/views/LoginPage.vue"
import HomePage from "@/views/HomePage.vue"
import RegisterPage from "@/views/RegisterPage.vue"
import UserPage from "@/views/UserPage.vue"
import FlightPage from "@/views/FlightPage.vue"
import BuyTicketPage from "@/views/BuyTicketPage.vue"
import CompanyPage from "@/views/company/CompanyPage.vue"
import CompanyCheckFlight from "@/views/company/CompanyCheckFlight.vue"
import CompanyAddFlight from "@/views/company/companyAddFlight.vue"
import CompanyChangeFlight from "@/views/company/companyChangeFlight.vue"
import CompanyDeleteFlight from "@/views/company/companyDeleteFlight.vue"
import CompanyCheckTicket from "@/views/company/companyCheckTicket.vue"
import CompanyAddTicket from "@/views/company/companyAddTicket.vue"
import CompanyChangeTicket from "@/views/company/companyChangeTicket.vue"
import CompanyDeleteTicket from "@/views/company/companyDeleteTicket.vue"
import TouristHome from "@/views/tourist/touristHome.vue"
import TouristSelfInformation from "@/views/tourist/touristSelfInformation.vue"
import TouristTicketManage from "@/views/tourist/touristTicketManagement.vue"


const routes = [
    {
        name: "HomePage",
        path: '/',
        component: HomePage
    },

    {
        name: "LoginPage",
        path: '/login',
        component: LoginPage
    },

    {
        name: "RegisterPage",
        path: '/register',
        component: RegisterPage
    },

    {
        name: "UserPage",
        path: '/user',
        component: UserPage
    },

    {
        name: "FlightPage",
        path: '/flight',
        component: FlightPage
    },

    {
        name: "BuyTicketPage",
        path: '/buyTicket',
        component: BuyTicketPage
    },
    {
        name: "CompanyCheckFlight",
        path: '/company/checkflight',
        component: CompanyCheckFlight
    },
    
    {
        name: "CompanyAddFlight",
        path: '/company/addflight',
        component: CompanyAddFlight
    },

    {
        name: "CompanyChangeFlight",
        path: '/company/changeflight',
        component: CompanyChangeFlight
    },
    
    {
        name: "CompanyDeleteFlight",
        path: '/company/deleteflight',
        component: CompanyDeleteFlight
    },

    {
        name: "CompanyAddTicket",
        path: '/company/addticket',
        component: CompanyAddTicket
    },

    {
        name: "CompanyCheckTicket",
        path: '/company/checkticket',
        component: CompanyCheckTicket
    },

    {
        name: "CompanyChangeTicket",
        path: '/company/changeticket',
        component: CompanyChangeTicket
    },

    {
        name: "CompanyDeleteTicket",
        path: '/company/deleteticket',
        component: CompanyDeleteTicket
    },

    {
        name: "CompanyPage",
        path: '/company',
        component: CompanyPage,
    },

    {
        name: "TouristHome",
        path: '/tourist',
        component: TouristHome,
    },


    {
        name: "TouristSelfInformation",
        path: '/tourist/touristSelfInformation',
        component: TouristSelfInformation,
    },

    {
        name: "TouristTicketManage",
        path: '/tourist/ticketmanage',
        component: TouristTicketManage,
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;