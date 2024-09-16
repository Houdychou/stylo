/*
    EXO Bic Numérique
    Créer un constructeur Stylo qui a les membres suivants :
    - couleur (str)
    - niveau (int)
    - ouvert (bool)
    Le résultat attendu  est le suivant :
        - je ne peux écrire que si le bouchon est enlevé
        - je dois pouvoir décider d'ouvrir ou de fermer le stylo
        - à la création d'un nouvel objet le niveau d'encre est à 100, au fur et à mesure que j'écris ce niveau diminue, lorsque qu'il n'y a plus d'encre on ne peut plus écrire
        -BONUS-
        - on peut recharger l'encre
        - l'écriture (document.write()) se fait dans la couleur choisie pour le stylo
     */
const container = document.querySelector('.container');
const btnDiv = document.querySelector('.btndiv');
const zoneTexte = document.querySelector('textarea');
const btnStylo = document.querySelector('.btn');

function Stylo() {
    this.level = 100;
    let baseLevel = this.level;
    this.open = false;
    this.bgColor = [
        "linear-gradient(45deg, #FF512F, #F09819, #DA22FF, #8E2DE2, #11998E)",
        "linear-gradient(485deg, #F4512F, #F09819)",
        "linear-gradient(45deg, #DA22FF, #9733EE)",
        "linear-gradient(60deg, #FF6B6B, #556270)",
        "linear-gradient(120deg, #f6d365, #fda085)",
        "linear-gradient(90deg, #00C9FF, #92FE9D)",
        "linear-gradient(135deg, #667eea, #764ba2)",
        "linear-gradient(180deg, #ff758c, #ff7eb3)",
        "linear-gradient(200deg, #00F260, #0575E6)",
        "linear-gradient(145deg, #F7971E, #FFD200)"
    ];
    this.randomBg = this.bgColor[Math.floor(Math.random() * this.bgColor.length)];

    this.font = ["Ebrima", "Mont Serrat", "Constantia", "Corbel", "Arial", "Franklin Gothic", "Georgia", "Gill Sans Nova", "Lucida Sans Unicode", "Segoe UI", "Verdana"];
    this.randomFont = this.font[Math.floor(Math.random() * this.font.length)];

    // Exécution de la fonction
    this.write = function () {
        console.log("le stylo est ouvert!");
        const niveauEncre = document.createElement('p');
        container.appendChild(niveauEncre);
        niveauEncre.classList.add('nvencre');

        niveauEncre.textContent = "Niveau D'encre Restant: " + this.level;
        niveauEncre.style.color = "blue";
        niveauEncre.style.fontFamily = this.randomFont;
        const text = document.createElement('p');

        container.appendChild(text);
        text.classList.add('text');

        niveauEncre.style.textAlign = "center";
        const reloadEncre = document.createElement('button');
        btnDiv.appendChild(reloadEncre);
        reloadEncre.textContent = "Recharger L'encre";
        
        zoneTexte.addEventListener('input', () => {
            let nivEncre = document.querySelector('.nvencre');
            if (this.level > 0) {
                let statutEncre = this.level - zoneTexte.value.length;
                if (statutEncre <= 0) {
                    console.log("Plus d'encre");
                    nivEncre.textContent = "Plus d'encre";
                } else {
                    reloadEncre.textContent = "recharger l'encre";
            
                    reloadEncre.addEventListener('click', function () {
                        zoneTexte.value = "";
                        text.textContent = "";
                        this.level = baseLevel;
                        console.log(this.level);
                        nivEncre.textContent = "Niveau D'encre Restant: " + this.level;
                    });

                    niveauEncre.textContent = "Niveau D'encre Restant: " + statutEncre;
                    text.textContent = zoneTexte.value;
                }
            }
        });
    };
    // Reload l'encre

    btnStylo.textContent = "stylo fermé";
    zoneTexte.style.display = "none";
    this.openStylo = function () {
        const styloFerme = document.createElement('h1');
        btnDiv.appendChild(styloFerme);
        styloFerme.style.textAlign = "center";
        btnStylo.addEventListener('click', () => {
            this.open = !this.open;
            if (this.open) {
                btnStylo.textContent = "stylo mis";
                zoneTexte.style.display = "block";
                styloFerme.textContent = "";
                console.log("le stylo est ouvert");
            } else {
                styloFerme.textContent = "Le stylo est fermé!";
                zoneTexte.style.display = "none";
                btnStylo.textContent = "stylo fermé";
                console.log("le stylo est fermé");
            }
        });
    }
    // Reload La Page
    this.reloadPage = function () {
        let btnReloadPage = document.createElement('btn');
        btnDiv.appendChild(btnReloadPage);

        btnReloadPage.textContent = "Recharger La Page";
        btnReloadPage.style.color = "white";
        btnReloadPage.style.cursor = "pointer";

        btnReloadPage.style.marginLeft = "16px";
        btnReloadPage.style.padding = "16px";
        btnReloadPage.style.borderRadius = "30px";

        btnReloadPage.style.backgroundImage = this.randomBg;
        btnReloadPage.addEventListener('click', function () {
            location.reload();
            zoneTexte.value = "";
        })
    }

    const selectColor = document.createElement('input');
    selectColor.type = "color";
    btnDiv.appendChild(selectColor);

    selectColor.addEventListener('input', () => {
        const textjsp = document.querySelector('.text');
        textjsp.style.color = selectColor.value;
    });
}

const stylo = new Stylo();
stylo.write("Yo les gars!");
stylo.reloadPage();
stylo.openStylo();