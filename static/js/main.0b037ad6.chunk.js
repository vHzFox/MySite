(this["webpackJsonpreact-study-app"]=this["webpackJsonpreact-study-app"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),a=n(13),l=n.n(a),c=n(6),s=n(7),d=n(0);const j=()=>Object(d.jsx)("h1",{children:"Welcome to My Portfolio"}),o=()=>Object(d.jsx)("h1",{children:"About Me"}),h=()=>Object(d.jsx)("h1",{children:"Contact Me"});n(21),n(22);var b=()=>{Object(i.useEffect)((()=>{fetch("sideNav.html").then((e=>e.text())).then((n=>{document.getElementById("side-nav-placeholder").innerHTML=n;const i=document.getElementById("sidenav-toggle");i&&i.addEventListener("click",e);document.querySelectorAll(".sidebar a").forEach((e=>{e.addEventListener("click",t)}))}))}),[]);const e=()=>{const e=document.getElementById("sidenav");e&&("0px"===e.style.left?e.style.left="-250px":e.style.left="0px")},t=()=>{const e=document.getElementById("sidenav");e&&(e.style.left="-250px")};return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{id:"side-nav-placeholder"}),Object(d.jsx)("button",{id:"sidenav-toggle",className:"sidebar-toggle-btn",children:"\u2630"}),Object(d.jsxs)("nav",{id:"sidenav",className:"sidebar",children:[Object(d.jsx)("button",{id:"sidenav-close",className:"sidebar-close-btn",onClick:t,children:"X"}),Object(d.jsx)("div",{className:"default-list",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("h1",{children:"Start"}),Object(d.jsx)("li",{children:Object(d.jsx)(c.b,{to:"/",exact:!0,activeClassName:"active",children:"Hem"})}),Object(d.jsx)("li",{children:Object(d.jsx)(c.b,{to:"/about",activeClassName:"active",children:"Om mig"})}),Object(d.jsx)("li",{children:Object(d.jsx)(c.b,{to:"/contact",activeClassName:"active",children:"Kontakta mig"})})]})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"project-list",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("h1",{children:"Mina projekt:"}),Object(d.jsx)("li",{children:Object(d.jsx)(c.b,{to:"/projects/ChemCalc",activeClassName:"active",children:"ChemCalc"})}),Object(d.jsx)("li",{children:Object(d.jsx)(c.b,{to:"/projects/KallCord",activeClassName:"active",children:"KallCord"})}),Object(d.jsx)("li",{children:Object(d.jsx)(c.b,{to:"/projects/PTBot",activeClassName:"active",children:"PTBot"})})]})})]})]})};const m=()=>Object(d.jsxs)("div",{className:"project-detail",children:[Object(d.jsx)("h1",{children:"ChemCalc"}),Object(d.jsx)("h3",{children:Object(d.jsx)("a",{href:"/assets/downloads/ChemCalc.zip",download:!0,children:"Download ChemCalc"})}),Object(d.jsx)("p",{children:"Detaljer om ChemCalc"}),Object(d.jsx)("h3",{children:"ChemCalc \xe4r en kemisk kalkylator som kan anv\xe4ndas f\xf6r att ber\xe4kna molar massa, koncentration och massa f\xf6r olika kemiska f\xf6reningar."}),Object(d.jsx)("h2",{children:"Kemi Kalkylatorn (KK)"}),Object(d.jsx)("p",{children:"F\xf6rfattare: Victor Hernandez, Le\xf3n Broberg"}),Object(d.jsx)("p",{children:"Klass: TE22"}),Object(d.jsx)("p",{children:"Handledare: Mikael Sandell"}),Object(d.jsx)("h3",{children:"Inneh\xe5llsf\xf6rteckning"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Inledning"}),Object(d.jsx)("li",{children:"Syfte och fr\xe5gest\xe4llning"}),Object(d.jsx)("li",{children:"Bakgrund"}),Object(d.jsx)("li",{children:"Tidigare forskning"}),Object(d.jsx)("li",{children:"Teori"}),Object(d.jsx)("li",{children:"Metod och material"}),Object(d.jsx)("li",{children:"Resultat"}),Object(d.jsx)("li",{children:"Diskussion"}),Object(d.jsx)("li",{children:"K\xe4llf\xf6rteckning"}),Object(d.jsx)("li",{children:"Bilagor"})]}),Object(d.jsx)("h3",{children:"1. Inledning"}),Object(d.jsx)("p",{children:"Under kemilektioner anv\xe4nds ofta formelh\xe4ften eftersom det \xe4r sv\xe5rt att memorera alla formler och processer. Till exempel beh\xf6vs kunskap om elektronegativitetsv\xe4rden f\xf6r att avg\xf6ra bindningstypen mellan atomer, s\xe5som kovalent, pol\xe4r kovalent eller jonbindning. \xc4ven ber\xe4kningar av elektronf\xf6rdelning och molmassa \xe4r centrala delar av kemin."}),Object(d.jsx)("p",{children:'Eftersom dessa processer kan vara tidskr\xe4vande och f\xf6rvirrande, uppstod id\xe9n att integrera dessa funktioner i en digital applikation. "Kemi Kalkylatorn" (KK) syftar till att f\xf6renkla kemiska ber\xe4kningar genom en l\xe4ttillg\xe4nglig mjukvara, d\xe4r anv\xe4ndaren snabbt kan best\xe4mma bindningstyp och utf\xf6ra andra n\xf6dv\xe4ndiga ber\xe4kningar.'}),Object(d.jsx)("h3",{children:"2. Syfte och fr\xe5gest\xe4llning"}),Object(d.jsx)("h4",{children:"Syfte"}),Object(d.jsx)("p",{children:"Syftet med detta arbete \xe4r att utveckla en applikation som kan fungera som ett komplement till traditionella formelblad och det periodiska systemet. Studien unders\xf6ker ocks\xe5 hur anv\xe4ndbar denna produkt skulle vara f\xf6r gymnasieelever som l\xe4ser Kemi 1 och huruvida den kan ers\xe4tta befintliga hj\xe4lpmedel."}),Object(d.jsx)("h4",{children:"Fr\xe5gest\xe4llningar"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:'Kan "Kemi Kalkylatorn" ers\xe4tta formelblad och det periodiska systemet i undervisningen?'}),Object(d.jsx)("li",{children:"Varf\xf6r valde vi att anv\xe4nda Java och senare Electron f\xf6r utvecklingen?"}),Object(d.jsx)("li",{children:"Vilka funktioner skulle g\xf6ra programmet mer anv\xe4ndbart f\xf6r kemi elever?"})]}),Object(d.jsx)("h3",{children:"3. Bakgrund"}),Object(d.jsx)("p",{children:'Efter att ha upplevt utmaningarna med kemiska ber\xe4kningar ins\xe5g vi behovet av en l\xf6sning som kunde effektivisera dessa processer. F\xf6r att kombinera v\xe5rt intresse f\xf6r programmering med kemi utvecklade vi "Kemi Kalkylatorn" \u2013 en applikation som automatiserar ber\xe4kningar och hj\xe4lper elever att f\xf6rst\xe5 kemiska samband snabbare och enklare.'}),Object(d.jsx)("h3",{children:"4. Tidigare forskning"}),Object(d.jsx)("p",{children:'F\xf6r att utveckla "Kemi Kalkylatorn" studerade vi befintliga metoder f\xf6r att ber\xe4kna bindningstyper, elektronf\xf6rdelning och molmassa. Vi granskade:'}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Existerande verktyg och appar inom kemiundervisning."}),Object(d.jsx)("li",{children:"Tabeller \xf6ver elektronegativitetsv\xe4rden och deras anv\xe4ndning."}),Object(d.jsx)("li",{children:"Statistik \xf6ver hur ofta elever anv\xe4nder formelblad och det periodiska systemet."}),Object(d.jsx)("li",{children:"Studier kring digitala hj\xe4lpmedel inom kemiundervisning."})]}),Object(d.jsx)("h3",{children:"5. Teori"}),Object(d.jsx)("h4",{children:"Viktiga begrepp"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"GUI (Graphical User Interface): Det anv\xe4ndaren ser och interagerar med under applikationens anv\xe4ndning."}),Object(d.jsx)("li",{children:"Elektronnegativitetsv\xe4rde: En specifik atoms kapacitet att dra till sig elektroner."}),Object(d.jsx)("li",{children:"Elektronnegativitetsdifferens: Differensen mellan tv\xe5 atomers elektronnegativitetsv\xe4rden i en specifik bindning."})]}),Object(d.jsx)("h3",{children:"6. Metod och material"}),Object(d.jsx)("p",{children:"Vi b\xf6rjade med att analysera de kemiska ber\xe4kningar vi ville inkludera i applikationen. F\xf6rsta prototypen byggdes i Java, men vi bytte till Electron f\xf6r att skapa en GUI-baserad applikation."}),Object(d.jsx)("h3",{children:"7. Resultat"}),Object(d.jsxs)("p",{children:['Den slutliga versionen av "Kemi Kalkylatorn" inneh\xe5ller funktioner f\xf6r att:',Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Ber\xe4kna bindningstyp baserat p\xe5 elektronegativitet."}),Object(d.jsx)("li",{children:"R\xe4kna ut molmassa f\xf6r kemiska f\xf6reningar."}),Object(d.jsx)("li",{children:"Visa elektronkonfiguration f\xf6r grund\xe4mnen."}),Object(d.jsx)("li",{children:"Anv\xe4nda ett intuitivt GUI f\xf6r enkel navigering."})]})]}),Object(d.jsx)("h3",{children:"8. Diskussion"}),Object(d.jsx)("p",{children:"V\xe5rt projekt visade att en digital kemikalkylator kan vara ett anv\xe4ndbart hj\xe4lpmedel f\xf6r kemiundervisning. Programmet g\xf6r ber\xe4kningar snabbare och minskar risken f\xf6r fel vid manuella utr\xe4kningar."}),Object(d.jsx)("h3",{children:"9. K\xe4llf\xf6rteckning"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Kemi 1 av Magnus Ehinger"}),Object(d.jsx)("li",{children:"Iulia Florina Feneriu"}),Object(d.jsx)("li",{children:"W3Schools"}),Object(d.jsx)("li",{children:"Stack Overflow"})]})]}),k=()=>{const{projectName:e}=Object(s.f)();return Object(d.jsxs)("div",{className:"project-detail",children:[Object(d.jsx)("h1",{children:e}),Object(d.jsx)("h3",{children:"KallCord \xc4r en Discord klon"})]})},x=()=>Object(d.jsxs)("div",{className:"project-detail",children:[Object(d.jsx)("h1",{children:"Purple Thunder Bot"}),Object(d.jsx)("h2",{children:"Bio"}),Object(d.jsx)("h3",{children:"Purple Thunder Bot \xe4r en discord bot jag har skapat f\xf6r att g\xf6ra servrar lite roligare."}),Object(d.jsx)("h2",{children:"Features"}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("h3",{children:"/pontus"}),Object(d.jsx)("h4",{children:"Skickar en slumpm\xe4ssig bild p\xe5 Pontus"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("h3",{children:"/musicjoke"}),Object(d.jsx)("h4",{children:"Skickar ett slumpm\xe4ssigt musiksk\xe4mt"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("h3",{children:"/Spam"}),Object(d.jsx)("h4",{children:"Spammar valfri person ett meddelande 0 - 500 antal g\xe5nger"})]})]}),Object(d.jsx)("h2",{children:"Installation"}),Object(d.jsx)("h3",{children:Object(d.jsx)("a",{href:"https://discord.com/oauth2/authorize?client_id=1348751031785492644",children:"F\xf6r att installera Purple Thunder Bot, klicka p\xe5 denna l\xe4nk"})})]});n(31);var O=()=>Object(d.jsx)(c.a,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(b,{})," ",Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{path:"/",exact:!0,component:j}),Object(d.jsx)(s.a,{path:"/about",component:o}),Object(d.jsx)(s.a,{path:"/projects/ChemCalc",component:m}),Object(d.jsx)(s.a,{path:"/projects/KallCord",component:k}),Object(d.jsx)(s.a,{path:"/projects/PTBot",component:x}),Object(d.jsx)(s.a,{path:"/contact",component:h})]})})]})});n(32);l.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.0b037ad6.chunk.js.map