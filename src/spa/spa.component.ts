import {Component} from '@angular/core';

@Component({
    selector: 'spa-init',
    templateUrl: './spa.component.html',
    styleUrls:['./spa.component.css']
})

export class SpaComponent {
    title: string;
    inputType: string;
    isFruitListDisplayed:boolean;


    fruits: string[]= ['Apple', 'Grape', 'Banana', 'Mango', 'Guava'];
    servers: { id: number, name: string, status: string }[] = [
        { "id": 0, "name": "AWS Linux VM","status":"online" },
        { "id": 1, "name": "AWS windows VM","status":"online" },
        { "id": 2, "name": "Azure Linux VM","status":"offline" },
        { "id": 3, "name": "Azure win VM","status":"online" },
        { "id": 4, "name": "Dynamo DB instance","status":"offline" }
    ];
    

    constructor() {
        this.title = 'this is title text';
        this.inputType = 'Password';
        this.isFruitListDisplayed=false;
    }
    onTitleChange(title: string) {
          this.title = title;
    }

    switchInput(event) {
        console.log(event);
        if (this.inputType === 'Password') {
             this.inputType = 'Text';
        } else {
              this.inputType = 'Password';
        }
    }

    displayFruitList() {
        this.isFruitListDisplayed= !this.isFruitListDisplayed;
    }

    setServerStatus(status:string) {
       if(status === 'online')
       {
       return "green";
       }else{
        return "Red";
       }
    }

    setStyleClass(status:string) {
        let classes={
            co:status === "online"? true:false ,
            it:status === "online"? false:true
        }

        return classes;
    }

}



