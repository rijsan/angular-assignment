import { Component } from "@angular/core";



@Component({
    selector: 'cars-list',
    templateUrl: './Car-List.component.html'
})
export class carListComponent{

obj = [
    {
        model: 'SX4',
        color: 'Black'

    },
    {
        model: 'CIAZ',
        color: 'Maroon'
    },
    {
        model: 'NEXON',
        color: 'Red'
    },
    {
        model: 'ALTROZ',
        color: 'Blue'
    }
]
}



