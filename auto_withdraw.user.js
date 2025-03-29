// ==UserScript==
// @name         Auto Withdraw Button Clicker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Clique automatiquement sur tous les boutons WITHDRAW
// @author       Your name
// @match        https://mechachain-dashboard-v2.vercel.app/u/vesting*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('🚀 Script Auto Withdraw démarré');

    // Fonction pour créer le bouton flottant
    function createFloatingButton() {
        const button = document.createElement('button');
        button.textContent = '🔄 Auto Withdraw';
        button.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 20px;
            background: linear-gradient(to right, #4a90e2, #7e57c2);
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            z-index: 9999;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: transform 0.2s;
        `;
        
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
        
        button.addEventListener('click', clickWithdrawButtons);
        document.body.appendChild(button);
        console.log('🔘 Bouton flottant créé');
    }

    // Fonction pour cliquer sur les boutons
    function clickWithdrawButtons() {
        console.log('🔍 Recherche des boutons WITHDRAW...');
        const buttons = document.querySelectorAll('button');
        console.log(`📊 Nombre total de boutons trouvés: ${buttons.length}`);
        
        let withdrawButtonsClicked = 0;
        buttons.forEach((button, index) => {
            if (button.textContent.trim() === 'WITHDRAW') {
                console.log(`🎯 Bouton WITHDRAW trouvé #${index + 1}`);
                console.log(`✅ Clique sur le bouton WITHDRAW #${index + 1}`);
                button.click();
                withdrawButtonsClicked++;
            }
        });
        
        console.log(`📈 Résumé: ${withdrawButtonsClicked} boutons WITHDRAW cliqués sur ${buttons.length} boutons totaux`);
    }

    // Exécuter le script après le chargement de la page
    window.addEventListener('load', () => {
        console.log('⏳ Page chargée, attente de 1 seconde...');
        // Attendre un court instant pour s'assurer que tous les éléments sont chargés
        setTimeout(() => {
            createFloatingButton();
        }, 1000);
    });
})(); 
