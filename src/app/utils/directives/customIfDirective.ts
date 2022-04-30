import { CommonModule } from "@angular/common";
import { NgModule, Directive, ElementRef, TemplateRef, Input, OnChanges, ViewRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[customIf]'
})
export class CustomIfDirective {
    @Input() set customIf(condition: boolean) {
        if (condition) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        } else {
            this._viewContainerRef.clear();
        }
    };
    constructor(private _viewContainerRef: ViewContainerRef, private _templateRef: TemplateRef<any>) {
    }
}

@NgModule({
    imports:[
        CommonModule,
    ],
    exports:[
        CustomIfDirective
    ],
    declarations:[
        CustomIfDirective
    ],
})

export class CustomIfDirectiveModule{}