import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})

export class ContadorComponent {
    public contador: number = 0;
    sumar(cantidad: number) {
        this.contador+=cantidad;
    }
    reset() {
        this.contador=0;
    }
}