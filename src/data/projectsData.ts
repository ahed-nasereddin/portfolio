// src/data/projectsData.ts

import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Survey App',
    description: 'Survey system with backend validation and processing of submissions, SQL tables designed for analysis, and query-driven reporting. Optimized data reads (filtering/aggregation) to keep dashboards fast as responses grow.',
    dataFlow: {
      input: 'Users submit survey responses via web forms',
      processing: 'Backend validates, normalizes, and aggregates response data',
      database: 'Responses and metadata stored in SQL tables for reporting',
      output: 'Dashboards and exports show metrics, trends, and summaries',
    },
    mainImage:'/images/projects/survey-app/dashboard.png',
    images: ['/images/projects/survey-app/AddDevice.png', '/images/projects/survey-app/EditContentForm.png','/images/projects/survey-app/EditDevice.png'],
    languages: ['Vue.js', 'Laravel'],
    duration: '3 months',
    tools:[],
    type:'Web App',
    company: 'Netcore IT Solutions',
    companyUrl:'https://www.netcore.ae/',
    url:'https://app.formshub.net/register'
  },
  {
    id: 2,
    title: 'Bizrug',
    description: 'Multi-tenant platform with SQL data modeling for companies/subscriptions/services and backend workflows for onboarding and billing. Emphasized data integrity and efficient queries for admin reporting and scalable operations.',
    dataFlow: {
      input: 'Companies register, manage profiles, and purchase subscriptions',
      processing: 'Backend enforces tenant boundaries, billing workflows, and business rules',
      database: 'SQL schema models tenants, services, subscriptions, and relationships',
      output: 'Admin dashboards and customer views reflect live subscription + profile data',
    },
    mainImage:'/images/projects/bizrug/home.png',
    images: ['/images/projects/bizrug/website_english.png', 
      '/images/projects/bizrug/website_arabic.png',
      '/images/projects/bizrug/admin_dashboard.png',
      '/images/projects/bizrug/admin_controlpanel-users.png',
      '/images/projects/bizrug/admin_services&categories_managment.png',
      '/images/projects/bizrug/owner.png',
      '/images/projects/bizrug/register.png',
      '/images/projects/bizrug/register.png'
    ],
    languages: ['Vue.js', 'Laravel'],
    duration: '1 months',
    tools:['Stripe'],
    type:'Web App',
    company: 'Freelance(Ahed Naser Eddin)',
    companyUrl:'',
    url:'https://bizrug.com'
  },
  {
  id: 3,
  title: 'Alkofyah Bakery & Sweets',
  description:'Bilingual product catalog with structured SQL entities (products, categories, menus) and backend logic for search/navigation. Focused on clean data organization and fast page loads through efficient queries and caching-friendly pages.',
  dataFlow: {
    input: 'Admins manage products, categories, and menus from the CMS',
    processing: 'Backend builds localized views and serves search/navigation queries',
    database: 'SQL stores product/catalog data with relationships for filtering',
    output: 'Fast bilingual pages render product listings and details',
  },
mainImage: '/images/projects/alkofyah/home-page-ar.png',
  images: [
    '/images/projects/alkofyah/branches-ar.png',
    '/images/projects/alkofyah/branches-en.png',
    '/images/projects/alkofyah/contact-ar.png',
    '/images/projects/alkofyah/home-categories-en.png',
    '/images/projects/alkofyah/home-en.png',
    '/images/projects/alkofyah/home-newproducts-en.png',
    '/images/projects/alkofyah/home-page-ar.png',
    '/images/projects/alkofyah/home-page-categories-ar.png',
    '/images/projects/alkofyah/menu-ar.png',
    '/images/projects/alkofyah/menu-en.png',
    '/images/projects/alkofyah/product-details-en.png',
    '/images/projects/alkofyah/products-category-en.png',
    '/images/projects/alkofyah/related-products-product-details-en.png'
  ],
  languages: ['Laravel', 'Vue.js', 'Tailwind CSS'],
  duration: '1 month',
  tools:['Voyager Admin Panel'],
  type:'Website',
  company: 'Freelance (Ahed Naser Eddin)',
  companyUrl:'',
  url:'https://alkofyahbakery.com'
},

  {
  id: 4,
  title: 'ReelQuip Films',
  description: 'Equipment rental and quote-request app with SQL-backed catalog data and backend processing for requests and admin workflows. Built with maintainable service logic and attention to query efficiency and data quality.',
  dataFlow: {
    input: 'Users browse equipment and submit quote requests',
    processing: 'Backend validates requests, routes workflows, and notifies admins',
    database: 'SQL stores catalog items and quote/request records',
    output: 'Admins review requests; users get confirmations and updated status',
  },
  mainImage: '/images/projects/reelquip/home.png',
  images: [
    '/images/projects/reelquip/home.png',
    '/images/projects/reelquip/project_details.png',
    '/images/projects/reelquip/request_quote.png'
  ],
  languages: ['Laravel', 'Vue.js'],
  duration: '1 month',
  tools: [],
  type: 'Web App',
  company: 'ReelQuip Films',
  companyUrl: '',
  url: 'https://reelquipfilms.com'
},
{
  id: 5,
  title: 'Simsary (Classified Ads Platform)',
  description: 'Classifieds platform with SQL-backed filtering/search, backend processing for media uploads and SEO automation, and performance work for high-volume listings (indexes, pagination, and efficient query patterns).',
  dataFlow: {
    input: 'Users create listings with fields, media, and multilingual content',
    processing: 'Backend handles moderation rules, media uploads, and SEO generation',
    database: 'SQL stores ads, attributes, and relationships optimized for filtering',
    output: 'Search results and ad pages load quickly with pagination + filters',
  },
  mainImage: '/images/projects/Simsary/adsIndexPage.png',
  images: [
    '/images/projects/Simsary/adsIndexPage.png',
    '/images/projects/Simsary/profileManagment.png',
    '/images/projects/Simsary/created_ad.png',
    '/images/projects/Simsary/websiteAdDetails.png',
    '/images/projects/Simsary/websiteHome.png'


  ],
  languages: ['Laravel', 'Inertia.js', 'Tailwind CSS'],
  duration: '2 months',
  tools: ['Spatie Permissions', 'SEO Auto-Generator'],
  type: 'Web App',
  company: 'Freelance (Ahed Naser Eddin)',
  companyUrl: '',
  url: ''
}


  
 
]
