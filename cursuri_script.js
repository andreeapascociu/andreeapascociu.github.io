function showDescription(curs) {
    let titlu = document.getElementById("titlu-curs");
    let text = document.getElementById("text-curs");
    let descriere = document.getElementById("descriere-curs");

    let cursuri = {
        python: "📍 <strong>Disponibil exclusiv la Algorithmics Brașov</strong> <br><br> Un curs ideal pentru copiii și adolescenții care vor să învețe programare de la zero. Python este un limbaj simplu și intuitiv, utilizat în inteligența artificială, jocuri și dezvoltare web. Vor învăța să scrie cod și să creeze aplicații interactive.",
    
        scratch: "📍 <strong>Disponibil exclusiv la Algorithmics Brașov</strong> <br><br> Un curs perfect pentru începători, unde copiii învață programare prin joc! Folosind blocuri vizuale, vor crea animații și jocuri, dezvoltându-și creativitatea și logica, fără a scrie cod.",
    
        digital: "📍 <strong>Disponibil exclusiv la Algorithmics Brașov</strong> <br><br> Un curs esențial pentru dezvoltarea competențelor digitale. Copiii învață cum să folosească un computer, cum să navigheze în siguranță pe internet și să utilizeze aplicații utile pentru școală și viața de zi cu zi.",
    
        roblox: "📍 <strong>Disponibil exclusiv la Algorithmics Brașov</strong> <br><br> Copiii pasionați de jocuri vor învăța să creeze propriile lumi virtuale în Roblox Studio, programând în Lua. Vor putea construi și personaliza jocuri interactive.",
    
        scratchJr: "📍 <strong>Disponibil exclusiv la Algorithmics Brașov</strong> <br><br> Pentru copiii de 5-7 ani, ScratchJr este un mediu prietenos în care cei mici învață bazele programării prin aranjarea blocurilor vizuale pentru a crea povești animate și joculețe simple.",
    
        content: "📍 <strong>Disponibil exclusiv la Algorithmics Brașov</strong> <br><br> Un curs interactiv unde copiii învață să creeze și să editeze videoclipuri pentru YouTube sau TikTok. Descoperă tehnici de filmare, editare video, adăugare de efecte și storytelling vizual.",
    
        websites: "📍 <strong>Disponibil exclusiv la Algorithmics Brașov</strong> <br><br> Un curs în care copiii învață să creeze propriul website folosind HTML, CSS și JavaScript. Vor construi pagini web interactive și vor înțelege cum funcționează internetul.",
    
        cpp: "Pentru copiii care doresc să învețe programarea la un nivel mai avansat. C/C++ sunt limbaje utilizate în robotică și securitate cibernetică. Vor învăța structuri de date, algoritmi și programare practică.",
    
        engleză: "Un curs interactiv de limba engleză, unde copiii învață prin jocuri, conversații și exerciții multimedia. Se pune accent pe comunicare, vocabular și pronunție corectă.",
    
        electronică: "Un curs practic unde copiii învață cum funcționează circuitele electrice și cum să construiască proiecte simple folosind LED-uri, senzori și microcontrolere, dezvoltând o înțelegere aplicată a electronicii."
    };
    
    if (cursuri[curs]) {
        // ⚠️ GOLIM CONȚINUTUL înainte de a adăuga noul text (EVITĂM DUPLICAREA)
        titlu.innerHTML = "";
        text.innerHTML = "";

        // Setăm noul titlu și text
        titlu.textContent = curs.charAt(0).toUpperCase() + curs.slice(1); // Prima literă mare
        text.innerHTML = cursuri[curs]; // Folosim innerHTML pentru a interpreta <br>

        // Afișăm descrierea cursului
        descriere.style.display = "block";
    }
}
