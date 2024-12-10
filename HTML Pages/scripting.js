/* ----- Variables & Arrays ----- */
var classHPDie = -1;

var characterClasses = [
    { value: '-999', label: 'Select a Class' },
    { value: 'Fighter', label: 'Fighter' },
    { value: 'Rogue', label: 'Rogue' },
    { value: 'Pugilist', label: 'Pugilist' },
    { value: 'Cleric', label: 'Cleric' },
    { value: 'Mage', label: 'Mage' },
    { value: 'Shaman', label: 'Shaman' }
];

var noProfession = [
    { value: '-999', label: 'Select a Profession' }
];

var fighterProfessions = [
    { value: '-999', label: 'Select a Profession' },
    { value: 'Ranger', label: 'Ranger' },
    { value: 'Knight', label: 'Knight' },
    { value: 'Raging', label: 'Raging' },
    { value: 'Ancients', label: 'Ancients' }
];

var rogueProfessions = [
    { value: '-999', label: 'Select a Profession' },
    { value: 'Acolyte', label: 'Acolyte' },
    { value: 'Brutal', label: 'Brutal' },
    { value: 'Sailor', label: 'Sailor' },
    { value: 'Assassin', label: 'Assassin' }
];

var pugilistProfessions = [
    { value: '-999', label: 'Select a Profession' },
    { value: 'Energy', label: 'Energy' },
    { value: 'Devotion', label: 'Devotion' },
    { value: 'Rage', label: 'Rage' },
    { value: 'Sohei', label: 'Sohei' }
];

var clericProfessions = [
    { value: '-999', label: 'Select a Profession' },
    { value: 'Light Mage', label: 'Light Mage' },
    { value: 'Pact Bound', label: 'Pact Bound' },
    { value: 'Sorcerers Blood', label: 'Sorcerers Blood' },
    { value: 'Magic of Song', label: 'Magic of Song' }
];

var mageProfessions = [
    { value: '-999', label: 'Select a Profession' },
    { value: 'Arcana Mage', label: 'Light Mage' },
    { value: 'Pact Bound', label: 'Pact Bound' },
    { value: 'Sorcerers Blood', label: 'Sorcerers Blood' },
    { value: 'Magic of Song', label: 'Magic of Song' }
];

var shamanProfessions = [
    { value: '-999', label: 'Select a Profession' },
    { value: 'Nature Mage', label: 'Light Mage' },
    { value: 'Pact Bound', label: 'Pact Bound' },
    { value: 'Sorcerers Blood', label: 'Sorcerers Blood' },
    { value: 'Magic of Song', label: 'Magic of Song' }
];

var characterLevels = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 }
];

var characterStats = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 },
    { value: 13, label: 13 },
    { value: 14, label: 14 },
    { value: 15, label: 15 },
    { value: 16, label: 16 },
    { value: 17, label: 17 },
    { value: 18, label: 18 },
    { value: 19, label: 19 },
    { value: 20, label: 20 }
];
var characterRaces = [
    { value: '-999', label: 'Select a Race' },
    { value: 'Half Blood', label: 'Half Blood' },
    { value: 'Dwarf', label: 'Dwarf' },
    { value: 'Elf', label: 'Elf' },
    { value: 'Giant', label: 'Giant' },
    { value: 'Orc', label: 'Orc' },
    { value: 'Human', label: 'Human' },
    { value: 'Goblin', label: 'Goblin' },
    { value: 'Kobold', label: 'Kobold' },
    { value: 'Gorgon', label: 'Gorgon' },
    { value: 'Slime', label: 'Slime' }
];

var characterRaceBonusTXTList = [
    { value: '-999', label: 'Select a Race' },
    {
        value: 'Half Blood', label: '<b>Stamina:<b> 3'
            + '<br><br>'
            + '<b>Movement:<b> 15'
            + '<br><br>'
            + '<b>Abilities:<b> Consult DM'
    },
    {
        value: 'Dwarf', label: '<b>Stamina:<b> 3'
            + '<br><br>'
            + '<b>Movement:<b> 15'
            + '<br><br>'
            + '<b>Darkvision:<b> You can see up to 30 squares with dim light or complete darkness, you only see things in shades of gray'
            + '<br><br>'
            + '<b>Hardy Body:<b> You are resistant to Poison and Acid Damage'
    },
    {
        value: 'Elf', label: '<b>Stamina:<b> 3'
            + '<br><br>'
            + '<b>Movement:<b> 15'
            + '<br><br>'
            + '<b>Darkvision:<b> You can see up to 30 squares with dim light or complete darkness, you only see things in shades of gray'
            + '<br><br>'
            + '<b>Fluid Body:<b> You do not need to sleep for as long as other races, and cannot be put to sleep through magic. You can choose to finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.'
            + '<br><br>'
            + '<b>Extra Cantrip:<b> Gain an additional Cantrip'
            + '<br><br>'
            + '<b>Fey Blood:<b> You have Advantage on saving throws against being Charmed'
    },
    {
        value: 'Giant', label: '<b>Stamina:<b> 3'
            + '<br><br>'
            + '<b>Movement:<b> 15'
            + '<br><br>'
            + '<b>Large Body:<b> Due to your large size you have Advantage on Strength Checks'
            + '<br><br>'
            + '<b>Strong Body:<b> Your bloodline allows you to use the Endure Feat'
            + '<br><br>'
            + '<b>Giant Blood:<b> After a Long Rest you gain resistance to one of the following damage types: Cold, Fire, Acid, Poison, Lightning, & Thunder'
    },
    {
        value: 'Orc', label: '<b>Stamina:<b> 3'
            + '<br><br>'
            + '<b>Movement:<b> 15'
            + '<br><br>'
            + '<b>Darkvision:<b> You can see up to 30 squares with dim light or complete darkness, you only see things in shades of gray'
            + '<br><br>'
            + '<b>Adrenaline Rush:<b> You can take the Dash by spending 1 Stamina rather than 2'
            + '<br><br>'
            + '<b>Orcish Bloodline:<b> Your Bloodline allows you to use the <b>Orcish Resilience<b>'
    },
    {
        value: 'Human', label: '<b>Stamina:<b> 3'
            + '<br><br>'
            + '<b>Movement:<b> 15'
            + '<br><br>'
            + '<b>Blind Luck:<b> Once per Short Rest you can add a 1d4 to any ability / skill check you make'
            + '<br><br>'
            + '<b>Versatile:<b> Choose one skill from the <b>Human Origin Skills<b> section of Feats & Skills'
    },
    {
        value: 'Goblin', label: '<b>Stamina:<b> 3'
            + '<br><br>'
            + '<b>Movement:<b> 15'
            + '<br><br>'
            + '<b>Darkvision:<b> You can see up to 30 squares with dim light or complete darkness, you only see things in shades of gray'
            + '<br><br>'
            + '<b>Tiny Furry:<b> You can add an additional 1d4 of damage to an attack or spell up to your proficiency bonus per long rest.'
            + '<br><br>'
            + '<b>Fey Blood:<b> You have Advantage on saving throws against being Charmed.'
    },
    {
        value: 'Kobold', label: '<b>Stamina:<b> 3'
            + '<br><br>'
            + '<b>Movement:<b> 15'
            + '<br><br>'
            + '<b>Darkvision:<b> You can see up to 15 squares with dim light or complete darkness, you only see things in shades of gray'
            + '<br><br>'
            + '<b>Dragon Blood:<b> You know one cantrip chosen from the <b>Kobold Origin Cantrips<b> list these are specific to the type of kobold you are but not required to match.  Additionally you may select for Wisdom, Intelligence, or Charisma to be your spellcasting ability for you cantrip if you do nott have one already.'
    },
    {
        value: 'Gorgon', label: '<b>Stamina:<b> 3'
            + '<br><br>'
            + '<b>Movement:<b> 15'
            + '<br><br>'
            + '<b>Darkvision:<b> You can see up to 15 squares with dim light or complete darkness, you only see things in shades of gray'
            + '<br><br>'
            + '<b>Magic Exposure:<b> You can see up to 15 squares with dim light or complete darkness, you only see things in shades of gray'
            + '<br><br>'
            + '<b>Gorgon Ancestry:<b> Gain the Spell <b>Gorgon Ancestry<b>'
    },
    {
        value: 'Slime', label: '<b>Stamina:<b> 3'
            + '<br><br>'
            + '<b>Movement:<b> 15'
            + '<br><br>'
            + '<b>Darkvision:<b> You can see up to 15 squares with dim light or complete darkness, you only see things in shades of gray'
            + '<br><br>'
            + '<b>Fluid Body:<b> You can squeeze through spaces as narrow as 1 inch wide.  Clothing, items and armor cannot squeeze through with you.'
            + '<br><br>'
            + '<b>Slippery:<b> You have advantage on checks to escape grapples and restraints even magical ones. (May be changed)'
    }
];

var classInformationTXTList = [
    { value: '-999', label: 'No Class Selected' },
    {
        value: 'Fighter', label: '<b>Health:<b> 1d10 per Fighter Level'
            + '<br><br>'
            + '<b>Saving Throw Proficiences:<b> Strength or Dexterity & Constitution'
            + '<br><br>'
            + '<b>Weapon Training:<b> Light Melee, Medium Melee, Heavy Melee, & Light Ranged, Medium Ranged, and Heavy Ranged Weapons'
            + '<br><br>'
            + '<b>Armor Training:<b> Light Armor, Medium Armor, Heavy Armor & Shields'
    },
    {
        value: 'Rogue', label: '<b>Health:<b> 1d8 per Rogue Level'
            + '<br><br>'
            + '<b>Saving Throw Proficiences:<b> Dexterity & Intelligence'
            + '<br><br>'
            + '<b>Weapon Training:<b> Light Melee, Medium Melee, Light Ranged, & Medium Ranged Weapons'
            + '<br><br>'
            + '<b>Armor Training:<b> Light Armor, Medium Armor'
    },
    {
        value: 'Pugilist', label: '<b>Health:<b> 1d8 per Pugilist Level'
            + '<br><br>'
            + '<b>Saving Throw Proficiences:<b> Dexterity & Wisdom'
            + '<br><br>'
            + '<b>Weapon Training:<b> Light Melee, Medium Melee'
            + '<br><br>'
            + '<b>Armor Training:<b> Light Armor, Medium Armor'
    },
    {
        value: 'Cleric', label: '<b>Health:<b> 1d8 per Cleric Level'
            + '<br><br>'
            + '<b>Saving Throw Proficiences:<b> Wisdom & Charisma'
            + '<br><br>'
            + '<b>Weapon Training:<b> Light Melee, Medium Melee, Heavy Melee, & Light Ranged, Medium Ranged, and Heavy Ranged Weapons'
            + '<br><br>'
            + '<b>Armor Training:<b> Light Armor, Medium Armor, Heavy Armor & Shields'
    },
    {
        value: 'Mage', label: '<b>Health:<b> 1d6 per Mage Level'
            + '<br><br>'
            + '<b>Saving Throw Proficiences:<b> Wisdom or Charisma & Intelligence'
            + '<br><br>'
            + '<b>Weapon Training:<b> Light Melee Weapons'
            + '<br><br>'
            + '<b>Armor Training:<b> Light Armor, Medium Armor'
    },
    {
        value: 'Shaman', label: '<b>Health:<b> 1d6 per Shaman Level'
            + '<br><br>'
            + '<b>Saving Throw Proficiences:<b> Dexterity or Charisma & Wisdom'
            + '<br><br>'
            + '<b>Weapon Training:<b> Light Melee Weapons, Medium Melee Weapons, Light Ranged Weapons'
            + '<br><br>'
            + '<b>Armor Training:<b> Light Armor, Medium Armor'
    },
];

/* ----- Functions and Events ----- */
function SetupCharacterSheetOptions() {
    // Check browser support
/*     if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("lastname", "Smith");
        // Retrieve
        document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    } */

    /* ----- Select Menus ----- */
    levelSelect = document.getElementById('characterLevelSelect');
    raceSelect = document.getElementById('characterRaceSelector');
    classSelect = document.getElementById('characterClassSelector');

    strengthStatSelect = document.getElementById('strengthStatSelect');
    dexterityStatSelect = document.getElementById('dexterityStatSelect');
    constitutionStatSelect = document.getElementById('constitutionStatSelect');
    intelligenceStatSelect = document.getElementById('intelligenceStatSelect');
    wisdomStatSelect = document.getElementById('wisdomStatSelect');
    charismaStatSelect = document.getElementById('charismaStatSelect');

    /* ----- Text Information Variables ----- */
    baseRacialBonusesTXT = document.getElementById('baseRacialBonuses');

    /* ----- Set Stat Values ----- */
    ChangeMod('STR');
    ChangeMod('DEX');
    ChangeMod('CON');
    ChangeMod('INT');
    ChangeMod('WIS');
    ChangeMod('CHA');

    baseRacialBonusesTXT.innerHTML = 'In Addition To Racial Traits All Races Gain The Following:'
        + '<br><br>'
        + '1. Choose One: Give Two Stats +2/+1 or Three Stats +1/+1/+1'
        + '<br><br>'
        + '2. Pick a Starting Skill'
        + '<br><br>'
        + '3. Choose 3 abilities and become proficient in them.';

    characterLevels.forEach(option => {
        levelSelect.options[levelSelect.length] = new Option(option.label, option.value);
    });

    characterStats.forEach(option => {
        strengthStatSelect.options[strengthStatSelect.length] = new Option(option.label, option.value);
        dexterityStatSelect.options[dexterityStatSelect.length] = new Option(option.label, option.value);
        constitutionStatSelect.options[constitutionStatSelect.length] = new Option(option.label, option.value);
        intelligenceStatSelect.options[intelligenceStatSelect.length] = new Option(option.label, option.value);
        wisdomStatSelect.options[wisdomStatSelect.length] = new Option(option.label, option.value);;
        charismaStatSelect.options[charismaStatSelect.length] = new Option(option.label, option.value);
    });

    characterRaces.forEach(option => {
        raceSelect.options[raceSelect.length] = new Option(option.label, option.value);
    });

    characterClasses.forEach(option => {
        classSelect.options[classSelect.length] = new Option(option.label, option.value);
    });

    /* ----- Call Functions To Set Values ----- */
    SetRaceBonusInformation();
    SetClassInformation()
}

function ChangeMod(value) {
    switch (value) {
        case 'STR':
            statSelect = document.getElementById('strengthStatSelect');
            modText = document.getElementById('strengthMod');

            var temp = statSelect.value;
            var ans = temp - 10;
            ans = Math.floor(ans / 2);

            if (ans > 0) {
                modText.innerHTML = '+' + ans.toString();
            }
            else {
                modText.innerHTML = ans.toString();
            } break;
        case 'DEX':
            statSelect = document.getElementById('dexterityStatSelect');
            modText = document.getElementById('dexterityMod');

            var temp = statSelect.value;
            var ans = temp - 10;
            ans = Math.floor(ans / 2);

            if (ans > 0) {
                modText.innerHTML = '+' + ans.toString();
            }
            else {
                modText.innerHTML = ans.toString();
            } break;
        case 'CON':
            statSelect = document.getElementById('constitutionStatSelect');
            modText = document.getElementById('constitutionMod');

            var temp = statSelect.value;
            var ans = temp - 10;
            ans = Math.floor(ans / 2);

            if (ans > 0) {
                modText.innerHTML = '+' + ans.toString();
            }
            else {
                modText.innerHTML = ans.toString();
            } break;
        case 'INT':
            statSelect = document.getElementById('intelligenceStatSelect');
            modText = document.getElementById('intelligenceMod');

            var temp = statSelect.value;
            var ans = temp - 10;
            ans = Math.floor(ans / 2);

            if (ans > 0) {
                modText.innerHTML = '+' + ans.toString();
            }
            else {
                modText.innerHTML = ans.toString();
            } break;
        case 'WIS':
            statSelect = document.getElementById('wisdomStatSelect');
            modText = document.getElementById('wisdomMod');

            var temp = statSelect.value;
            var ans = temp - 10;
            ans = Math.floor(ans / 2);

            if (ans > 0) {
                modText.innerHTML = '+' + ans.toString();
            }
            else {
                modText.innerHTML = ans.toString();
            } break;
        case 'CHA':
            statSelect = document.getElementById('charismaStatSelect');
            modText = document.getElementById('charismaMod');

            var temp = statSelect.value;
            var ans = temp - 10;
            ans = Math.floor(ans / 2);

            if (ans > 0) {
                modText.innerHTML = '+' + ans.toString();
            }
            else {
                modText.innerHTML = ans.toString();
            }
            break;
    }
}

function SetRaceBonusInformation() {
    raceSelect = document.getElementById('characterRaceSelector');
    raceBonusTXT = document.getElementById('raceSpecificBonuses');

    characterRaceBonusTXTList.forEach(option => {
        if (option.value == raceSelect.value) {
            raceBonusTXT.innerHTML = option.label;
        }
    });
}

function PopulateProfessions() {
    classSelect = document.getElementById('characterClassSelector');
    professionSelect = document.getElementById('characterProfessionSelector');

    //Clear Options
    if (professionSelect.options.length > 0) {
        professionSelect.innerHTML = '';
    }

    //Reset Options
    switch (classSelect.value) {
        case '-999':
            noProfession.forEach(option => {
                professionSelect.options[professionSelect.length] = new Option(option.label, option.value);
            });
            professionSelect.setAttribute("disabled", "true");
            professionSelect.value = '-999';
            break;
        case 'Fighter':
            fighterProfessions.forEach(option => {
                professionSelect.options[professionSelect.length] = new Option(option.label, option.value);
            });
            professionSelect.disabled = false;
            professionSelect.value = '-999';
            classHPDie = 10;
            break;
        case 'Rogue':
            rogueProfessions.forEach(option => {
                professionSelect.options[professionSelect.length] = new Option(option.label, option.value);
            });
            professionSelect.disabled = false;
            professionSelect.value = '-999';
            classHPDie = 8;
            break;
        case 'Pugilist':
            pugilistProfessions.forEach(option => {
                professionSelect.options[professionSelect.length] = new Option(option.label, option.value);
            });
            professionSelect.disabled = false;
            professionSelect.value = '-999';
            classHPDie = 8;
            break;
        case 'Cleric':
            clericProfessions.forEach(option => {
                professionSelect.options[professionSelect.length] = new Option(option.label, option.value);
            });
            professionSelect.disabled = false;
            professionSelect.value = '-999';
            classHPDie = 8;
            break;
        case 'Mage':
            mageProfessions.forEach(option => {
                professionSelect.options[professionSelect.length] = new Option(option.label, option.value);
            });
            professionSelect.disabled = false;
            professionSelect.value = '-999';
            classHPDie = 6;
            break;
        case 'Shaman':
            shamanProfessions.forEach(option => {
                professionSelect.options[professionSelect.length] = new Option(option.label, option.value);
            });
            professionSelect.disabled = false;
            professionSelect.value = '-999';
            classHPDie = 6;
            break;
    }

    SetClassInformation();
}

function PopulateSkillSelection() {
    /* TO DO */
    console.log("Populate Skill Select");
}

function uploadAvatar() {
    let characterImage = document.getElementById("avatarImage");
    let uploadFile = document.getElementById("avatarUpload");

    characterImage.src = URL.createObjectURL(uploadFile.files[0]);
}

function SetClassInformation() {
    charClassSelect = document.getElementById('characterClassSelector');
    charClassTitle = document.getElementById('classSpecificInformationTitle');
    charClassBio = document.getElementById('classSpecificInformationBio');

    classInformationTXTList.forEach(option => {
        if (option.value == charClassSelect.value) {
            if (option.value == '-999') { charClassTitle.innerHTML = option.label; }
            else { charClassTitle.innerHTML = option.value; }
            charClassBio.innerHTML = option.label;
        }
    });
}

/* ----- Import & Export Functions ----- */
function ImportCharacterSheet(event) {
    /*     var dataAvatarImage = document.getElementById('avatarImage');
    
        var dataCharacterNameInput = document.getElementById('characterNameInput');
        var dataCharacterLevelSelect = document.getElementById('characterLevelSelect');
        var dataCharacterRaceSelector = document.getElementById('characterRaceSelector');
        var dataCharacterClassSelector = document.getElementById('characterClassSelector');
        var dataCharacterProfessionSelector = document.getElementById('characterProfessionSelector');
    
        var dataStrengthStatSelect = document.getElementById('strengthStatSelect');
        var dataDexterityStatSelect = document.getElementById('dexterityStatSelect');
        var dataConstitutionStatSelect = document.getElementById('constitutionStatSelect');
        var dataIntelligenceStatSelect = document.getElementById('intelligenceStatSelect');
        var dataWisdomStatSelect = document.getElementById('wisdomStatSelect');
        var dataCharismaStatSelect = document.getElementById('charismaStatSelect');
    
        var dataBaseRacialBonuses = document.getElementById('baseRacialBonuses');
        var dataRaceSpecificBonuses = document.getElementById('raceSpecificBonuses');
    
        var dataClassSpecificInformationTitle = document.getElementById('classSpecificInformationTitle');
        var dataClassSpecificInformationBio = document.getElementById('classSpecificInformationBio');
    
        var dataArmorClassInput = document.getElementById('armorClassInput');
        var dataHealthInput = document.getElementById('healthInput');
        var dataManaInput = document.getElementById('manaInput');
        var dataStaminaInput = document.getElementById('staminaInput');
        var dataMovementInput = document.getElementById('movementInput');
    
        var dataCharacterSkills = document.getElementById('characterSkills');
        var dataCharacterNotes = document.getElementById('characterNotes');
    
        var textFileLoaded = document.getElementById('loadTextFile');
        var reader = new FileReader();
        var selectedFile = event.target.files[0];
    
        reader.onload = function(event) {
            textFileLoaded.innerHTML = event.target.result;
        };
    
        reader.readAsText(selectedFile); */

}

function ExportCharacterSheet() {
    //jsonDATA = document.getElementById('CharacterSheetFullInformation');

    var dataAvatarImage = document.getElementById('avatarImage');

    var dataCharacterNameInput = document.getElementById('characterNameInput');
    var dataCharacterLevelSelect = document.getElementById('characterLevelSelect');
    var dataCharacterRaceSelector = document.getElementById('characterRaceSelector');
    var dataCharacterClassSelector = document.getElementById('characterClassSelector');
    var dataCharacterProfessionSelector = document.getElementById('characterProfessionSelector');

    var dataStrengthStatSelect = document.getElementById('strengthStatSelect');
    var dataDexterityStatSelect = document.getElementById('dexterityStatSelect');
    var dataConstitutionStatSelect = document.getElementById('constitutionStatSelect');
    var dataIntelligenceStatSelect = document.getElementById('intelligenceStatSelect');
    var dataWisdomStatSelect = document.getElementById('wisdomStatSelect');
    var dataCharismaStatSelect = document.getElementById('charismaStatSelect');

    var dataBaseRacialBonuses = document.getElementById('baseRacialBonuses');
    var dataRaceSpecificBonuses = document.getElementById('raceSpecificBonuses');

    var dataClassSpecificInformationTitle = document.getElementById('classSpecificInformationTitle');
    var dataClassSpecificInformationBio = document.getElementById('classSpecificInformationBio');

    var dataArmorClassInput = document.getElementById('armorClassInput');
    var dataHealthInput = document.getElementById('healthInput');
    var dataManaInput = document.getElementById('manaInput');
    var dataStaminaInput = document.getElementById('staminaInput');
    var dataMovementInput = document.getElementById('movementInput');

    var dataCharacterSkills = document.getElementById('characterSkills');
    var dataCharacterNotes = document.getElementById('characterNotes');

    const data = 'Image: ' + dataAvatarImage.src + '\n\n' +
        'Name: ' + dataCharacterNameInput.value + '\n\n' +
        'Level: ' + dataCharacterLevelSelect.value + '\n\n' +
        'Race: ' + dataCharacterRaceSelector.value + '\n\n' +
        'Class: ' + dataCharacterClassSelector.value + '\n\n' +
        'Profession: ' + dataCharacterProfessionSelector.value + '\n\n' +

        'STR: ' + dataStrengthStatSelect.value + '\n\n' +
        'DEX: ' + dataDexterityStatSelect.value + '\n\n' +
        'CON: ' + dataConstitutionStatSelect.value + '\n\n' +
        'INT: ' + dataIntelligenceStatSelect.value + '\n\n' +
        'WIS: ' + dataWisdomStatSelect.value + '\n\n' +
        'CHA: ' + dataCharismaStatSelect.value + '\n\n' +

        'Base Racial Bonus: ' + dataBaseRacialBonuses.innerHTML + '\n\n' +
        'Specific Racial Bonus: ' + dataRaceSpecificBonuses.innerHTML + '\n\n' +
        'Class Title: ' + dataClassSpecificInformationTitle.innerHTML + '\n\n' +
        'Class Bio: ' + dataClassSpecificInformationBio.innerHTML + '\n\n' +

        'Armor Class: ' + dataArmorClassInput.value + '\n\n' +
        'Health: ' + dataHealthInput.value + '\n\n' +
        'Mana: ' + dataManaInput.value + '\n\n' +
        'Stamina: ' + dataStaminaInput.value + '\n\n' +
        'Movement: ' + dataMovementInput.value + '\n\n' +

        'Skills: ' + dataCharacterSkills.value + '\n\n' +
        'Note: ' + dataCharacterNotes.value;

    const filename = dataCharacterNameInput.value + '_Character_Sheet.txt';
    const mimeType = 'text/plain';

    const blob = new Blob([data], { type: mimeType });

    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a link element and set its attributes
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);

    // Append the link to the DOM, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}

function SetHealth(roll){
    var maxHP = document.getElementById('healthInput_MAX');
    var level = document.getElementById('characterLevelSelect');
    var result = 0;
    var diceRolls = [];


    if(classHPDie == -1){
        document.getElementById('errorBoxOverlay').style.display = 'block'
        document.getElementById('errorMSGBox').style.display = 'block'
        document.getElementById('errorMSG').innerHTML = "No Class Selected <br> Please Select a Class & Try Again";
    }
    else{
        result = classHPDie;

        if(level.value > 1){ 
            if(roll == true){
                for(var i = 1; i < level.value; i++){
                    var tempRoll = Math.floor(Math.random() * classHPDie) + 1;
                    diceRolls.push(tempRoll);
                    result = result + tempRoll;
                }

                tempMSG = 'Level 1 HP: ' + classHPDie + '<br>' +
                'Dice Rolls: ' + diceRolls.toString();
            }
            else{

                for(var i = 1; i < level.value; i++){
                    var tempAVG = Math.ceil(classHPDie / 2);
                    diceRolls.push(tempAVG);
                    result = result + tempAVG;
                }

                tempMSG = 'Level 1 HP: ' + classHPDie + '<br>' +
                'Average: ' + diceRolls.toString();
            }
        }
        
        maxHP.value = result;

        SendMessage(tempMSG);
    }
}

function CloseErrorMessage() {
    document.getElementById('errorBoxOverlay').style.display = 'none'
    document.getElementById('errorMSGBox').style.display = 'none'
    document.getElementById('errorMSG').innerHTML = "No Class Selected <br> Please Select a Class & Try Again";
}

function SendMessage(message){
    document.getElementById('messageBoxOverlay').style.display = 'block'
    document.getElementById('messageMSGBox').style.display = 'block'
    document.getElementById('messageMSG').innerHTML = message;
}

function CloseMessage(){
    document.getElementById('messageBoxOverlay').style.display = 'none'
    document.getElementById('messageMSGBox').style.display = 'none'
    document.getElementById('messageMSG').innerHTML = "NO MESSAGE SET";
}