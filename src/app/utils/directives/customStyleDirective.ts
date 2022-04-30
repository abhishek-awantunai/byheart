import { CommonModule } from "@angular/common";
import { NgModule, Directive, ElementRef, TemplateRef } from "@angular/core";

@Directive({
    selector: '[customStyle]'
})
export class CustomStyleDirective {
    constructor(private _elementRef: ElementRef) {
        this._elementRef.nativeElement.style.color = 'green';
    }
}

@NgModule({
    imports:[
        CommonModule,
    ],
    exports:[
        CustomStyleDirective
    ],
    declarations:[
        CustomStyleDirective
    ],
})

export class CustomStyleDirectiveModule{}