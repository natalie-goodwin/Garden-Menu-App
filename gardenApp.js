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

class Menu {
    constructor() {
        this.gardens = []; /*empty array to hold all gardens */
        this.selectedGarden = null; /*set to null because the menu opens with no available garden value */
    }

    start() { /*method to start the menu app */
        let selection = this.showMainMenuOptions(); /*at start of app, will show the main menu options*/
            while (selection != 0) { /*this means that as long as the user does not select 0, 
            one of the below switch options will occur */
                switch (selection) {
                    case '1':
                        this.createGarden();
                        break;
                    case '2':
                        this.viewGarden();
                        break;
                    case '3':
                        this.deleteGarden();
                        break;
                    case '4': 
                        this.displayGardens();
                        break;
                    default: 
                        selection = 0;
                }

                selection = this.showMainMenuOptions();
            }

            alert('Goodbye!'); /*if user selects 0, the app closes */
    }

    showMainMenuOptions() { /*when this method is started, the screen will show the following prompt to users */ 
            return prompt(`
            0) exit
            1) create new garden
            2) view garden
            3) delete garden
            4) display all gardens
            `)
    }
   
    showGardenMenuOptions(gardenInfo) { /*this method is activated when user tries to create a garden; the user
    is prompted to do one of the following: */
        return prompt (`
        0) back
        1) create crop
        2) delete crop
        ---------------------
        ${gardenInfo}  
        `);   /*gardenInfo will list the name of the crop and rows */
    }

    displayGardens() {
        let gardenString = ''; /*this will display each garden with an index number and the garden name */
        for (let i = 0; i < this.gardens.length; i++) { /*iterates through the list of available gardens 
        and displays each with an index number*/
            gardenString += i + ')' + this.gardens[i].name + '\n';
        }

        alert(gardenString);
    }

    createGarden() {/*prompt user to enter name for new garden; pushes garden name into the array at top of
    Menu class */
        let name = prompt('Enter name for new garden:');
        this.gardens.push(new Garden(name)); 
    }

    viewGarden() { /*method to view garden by index number*/
        let index = prompt('Enter the index of the garden you wish to view:');
        if (index > -1 && index < this.gardens.length) { /*if user selects an index between 0 and 
        maximum garden index number, the user can view the selected garden by index  */
            this.selectedGarden = this.gardens[index];

            let description = 'Garden Name: ' + this.selectedGarden.name + '\n'; 

            for (let i = 0; i , this.selectedGarden.crops.length; i++) {
                description += i + ')' + this.selectedGarden.crops[i].name 
                + ' - ' + this.selectedGarden.crops[i].rows + '\n';
            } /*iterate through the crops in a garden and list all the crops and rows for that garden  */

            let selection = this.showGardenMenuOptions(description); /*when user selects an option in the garden
             menu, the following switch results will occur */

            switch (selection) {
                case '1': 
                    this.createCrop();
                    break;
                case '2':
                    this.deleteCrop();
                    break;
            }
        }
    }

    deleteGarden() { /*will prompt user ot enter index to delete garden. This method will then iterate through
    index and delete garden by index accordign to length of the array*/ 
        let index = prompt('Enter the index of the garden you wish to delete:');
        if (index > -1 && index < this.gardens.length) {
            this.gardens.splice(index, 1); /*will remove 1 gaden according to place in index */ 
        }
    }

    createCrop() { /*prompt user to add new crop name and rows for new crop; once entered, it will be pushed to
    crop array  */
        let name = prompt('Enter name for new crop:');
        let rows = prompt('Enter number of rows for planting new crop:');
        this.selectedGarden.crops.push(new Crop(name, rows));
    }

    deleteCrop() { /*prompt user to enter index of crop; iterate through index, and delete selected crop */
        let index = prompt('Enter the index of the crop you wish to delete:');
                if (index > -1 && index < this.selectedGarden.crops.length) {
                    this.selectedGarden.crops.splice(index, 1); 
                }
            }
}


let menu = new Menu(); 
menu.start();

