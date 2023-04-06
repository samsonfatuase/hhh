function Clock ({template}){
    this.template =template
    this.timer;
}
    clock.prototyp.render = function() {
        let date= new Date();

        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        let minutes = date.getMinutes();
        if (minutes < 10) minutes = "0" + minutes;

        let secondss =date.getSeconds();
        if (seconds < 10) seconds = "0" + seconds; 
            
        let output = this.template
            .replace('h', hours)
            .replace('m', minutess)
            .replace('s', seconds);

        console.log(output);
        }
        clock.prototype.start =function() {
            this.render();
            this.timer = setInterval (() => this.render(), 100);
            clearInterval(timer);
        }; 

        let clock =  new Clock({template: "h:m:s" });
        clock. start();

        











// class Animal{
//     constructor(name, species, kingdom, height, myOwn) {
//         this.name = name;
//         this.species = species;
//         this.kingdom = kingdom;
//         this.height = height;
//         this.myOwn = true;
//     }
//     care(){
//         if (this.myOwn == true) {
//             alert(`care for the dog whose name is ${this.name}, the species is ${this.species}, the kingdom is ${this.kingdom}, and is ${this.height} high`);
//         } else { 
//             alert(`This Dog should be killed for the Easter celebration`);
            
//         }
//     }
// }
// let toBeCare = new Animal(
//     "Ata Boy",
//     "mammal", 
//     "animalia", 
//     "1.4ft"
// );
// console.log(toBeCare.care());

// class Book{
//     constructor(author, title, pages, edition, isPublished,) {
//         this.author = author;
//         this.title = title;
//         this.pages = pages;
//         this.edition = edition;
//         this.isPublished = true;
//     }
//     catalogue() {
//         if (this.isPublished == true) {
//             alert (`This Journal is published under the name ${this.author}, and the title ${this.title}, it has ${this.pages} pages, and the edition is ${this.edition}`);
//         } else {
//             alert(`This book is not published and can't be catalogued in our library`);
//         }
//     }
// }

// let toBeCatalogue = new Book(
//     "Samson Fatuase",
//     "Learning Javascript",
//     "23",
//     "2021"
// );

// console.log(toBeCatalogue.catalogue());

// // class Journal extends Book {
// //     constructor(author, title, pages, edition, isPublished, publication) {
// //         super();
// //         this.author = author;
// //         this.title = title;
// //         this.pages = pages;
// //         this.edition = edition;
// //         this.isPublished = true;
// //         this.publication = publication;
// //     }
// //     Journalpublication() {
// //         if (this.isPublished == true) {
// //             alert (`This Journal is published under the name ${this.publication}`)
            
// //         } else {
// //             alert("This Journal is not published");
// //         } {
            
// //         }
// //     }

// // }

// // let Journalpublication = new Journal("","", "", "", "", "Samson Fatuase");

// // Journalpublication.Journalpublication();