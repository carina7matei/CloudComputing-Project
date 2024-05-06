
Cloud Computing – Proiect

Studenta: Matei Carina-Valeria
Grupa: 1132
I.	Introducere
Aplicația de ToDo pe care am dezvoltat-o reprezintă o soluție simplă și eficientă pentru gestionarea sarcinilor zilnice. Utilizând un stack modern de tehnologii, inclusiv Next.js pentru frontend, MongoDB pentru baza de date și Netlify pentru hosting, aplicația oferă o interfață intuitivă și accesibilă de pe orice dispozitiv. Scopul acestei documentații este de a detalia arhitectura aplicației, tehnologiile folosite, precum și modul de interacțiune și utilizare a acesteia.
II.	Descrierea tehnologiilor cloud folosite
a.	MongoDB Atlas
MongoDB Atlas este o bază de date ca serviciu (DBaaS) care permite stocarea și gestionarea datelor în cloud, oferind scalabilitate automată, backup automat și garanția securității datelor. În cadrul aplicației , am utilizat MongoDB Atlas pentru a stoca și interoga datele referitoare la todo-urile utilizatorilor. Beneficiind de integrare simplă cu Next.js, MongoDB Atlas asigură performanță și disponibilitate ridicată a datelor, fiind ideală pentru aplicații web moderne.
 ![image](https://github.com/carina7matei/CloudComputing-Project/assets/90403522/d8fdb12c-904f-4e46-b260-763ee06e3498)

Fig 1 [Fisier ce contine functia de conectare la mongodb]

     ![image](https://github.com/carina7matei/CloudComputing-Project/assets/90403522/a55d4f9d-f654-4c8a-b8d6-261053e95c85)
   
Fig 2 [Fisier ce contine schema colectiei din baza de date]

                     
            ![image](https://github.com/carina7matei/CloudComputing-Project/assets/90403522/3205fc0b-8d1b-4065-8443-f50c4fec1780)
                   

Fig 3 [Exemplu de request-uri catre baza de date]


             ![image](https://github.com/carina7matei/CloudComputing-Project/assets/90403522/ad3f56e7-4c6c-4531-a855-91312c24a12f)
            
[Exemplu de request-response de tip GET]
b.	Netlify
Netlify este o platformă de hosting și serverless backend pentru aplicații web și site-uri statice. Este cunoscută pentru capacitatea sa de a oferi deploy continuu (CD), CDN global, cache și servicii serverless, toate acestea contribuind la îmbunătățirea performanței aplicației. În proiect, Netlify a fost folosit pentru a găzdui interfața Next.js, beneficiind de deploy automat la fiecare push în repository-ul Git, ceea ce facilitează actualizările rapide și eficiente.
![image](https://github.com/carina7matei/CloudComputing-Project/assets/90403522/3259b0fa-42bb-4cce-81e3-fcbf845b7ab6)

 
Fig 4 [Site-ul vazut pe Netlify odata ce a fost publicat]

Cu fiecare push pe git, site-ul este publicat din nou automat, si se pot vedea toate incercarile de deploy, astfel:

 ![image](https://github.com/carina7matei/CloudComputing-Project/assets/90403522/564062fc-e557-4852-aa5e-a74e014adec0)

Fig 5 [Toate deploy-urile vazute din interfata oferita de Netlify]



Link catre site: https://ccproject-carina.netlify.app/
Link catre GitHub Repository: https://github.com/carina7matei/CloudComputing-Project
Link video youtube: https://youtu.be/uMtW3iMt2Y0





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
