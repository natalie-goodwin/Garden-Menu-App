/*This app is designed to open in the alert menu. The purpose is to allow 
users to design their own gardens. 
The app has three classes: 
garden class 
plant class
menu class

Users will be prompted to enter the name of a garden, what is planted in the garden,
and how many rows
 methods: 
   -- add a garden
   -- delete a garden
   -- add a crop; by extension add number of rows
   -- delete a plant, vegetable, fruit
   -- view all gardens  
   -- show garden menu
   -- show crop menu

create, view, delete, display garden
create, delete a crop 

*/

class Crop {
    cosntructor(name, rows) {
        this.name = name;
        this.row = rows;
    }

    describe() {
        return `${this.name} includes ${this.rows} rows`;
    }
} /*this class holds crops in a garden; 'describe' is a method that returns a crop with a number of rows to be planted  */


class Garden {
    constructor(name) {
        this.name = name;
        this.crops = [];
    }

    addCrop(crop) {
        if (crop instanceof Crop) {
            this.crops.push(crop);
        } else; {
            throw new Error(`You can only add an instance of Crop. Argument is not a crop: ${crop}`);
        } /*if this is an instance of a crop, you add a new crop.  */
    }

    describe() {
        return `${this.name} has ${this.crops.length} crops.`;
    }
} /*this class holds gardens; it contains methods to add names of crops and push the crops into the empty array; crops.length refers to the 
position of the crop in the array */

    
//-------------------------------------------------------------------------------------------

// class Menu {
//    constructor() { 
//         this.teams = []; 
//         this.selectedTeam = null;    } 

//    start() { 
//         let selection = this.showMainMenuOptions(); 
//         while (selection != 0){ 
//             switch (selection) {
//                 case '1': 
//                     this.createTeam(); 
//                     break;
//                 case '2':
//                     this.viewTeam();
//                     break;
//                 case '3': 
//                     this.deleteTeam();
//                     break;
//                 case '4':
//                     this.displayTeams();
//                     break;
//                 default: 
//                     selection = 0; 
//             }

//             selection = this.showMainMenuOptions();
//         }

//         alert('Goodbye!');
//     }

//     showMainMenuOptions() { 
//         return prompt(`   
//         0) exit
//         1) create new team
//         2) view team
//         3) delete team
//         4) display all teams
//         `);
//     }

//     showTeamMenuOptions(teamInfo) {
//         return prompt (`
//         0) back
//         1) create player
//         2) delete player
//         ---------------------
//         ${teamInfo}
//         `);
//     }

//     displayTeams() { 
//         let teamString = '';
//         for (let i = 0; i < this.teams.length; i++) {
//           teamString += i + ') ' + this.teams[i].name + '\n';  
//         }

//         alert(teamString); 
//     }

//     createTeam() {
//         let name = prompt('Enter name for new team:');
//         this.teams.push(new Team(name));
//     }

//     viewTeam() {
//         let index = prompt ('Enter the index of the team you wish to view:');
//         if (index > -1 && index < this.teams.length) {            
//             this.selectedTeam = this.teams[index]; 
           
//             let description = 'Team Name: ' + this.selectedTeam.name + '\n';
        
//             for (let i = 0; i < this.selectedTeam.players.length; i++) {
//                 description += i + ') ' + this.selectedTeam.players[i].name 
//                     + ' - ' + this.selectedTeam.players[i].position + '\n';
//             }

//             let selection = this.showTeamMenuOptions(description);
          
//             switch (selection) {
              
//                 case '1':
//                     this.createPlayer();
//                     break; 
//                 case '2': 
//                     this.deletePlayer();
//             }
//         }
//     }

//     deleteTeam() {
//         let index = prompt('Enter the index of the team you wish to delete:');
//         if (index > -1 && index < this.teams.length) {
//             this.teams.splice(index, 1);
//         }
//     }

//     createPlayer() {
//         let name = prompt('Enter name for new player:');
//         let position = prompt('Enter position for new player:');
//         this.selectedTeam.players.push(new Player(name, position));
//     }

//     deletePlayer() {
//         let index = prompt('Enter the index of the player you wish to delete:');
//         if (index > -1 && index < this.selectedTeam.players.length) {
//             this.selectedTeam.players.splice(index, 1); 
//         }
//     }
// }

// let menu = new Menu(); 
// menu.start();

