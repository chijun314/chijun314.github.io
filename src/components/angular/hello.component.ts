import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { SampleComponent } from "./sample.component";
import { SampleService } from "./sample.service";

@Component({
    selector: "app-hello",
    standalone: true,
    imports: [NgIf, SampleComponent],
    providers: [SampleService],
    templateUrl: "./hello.component.html",
})
export class HelloComponent {
    @Input() helpText = "help";

    show = false;

    constructor(private sampleService: SampleService) {
        this.sampleService.set("I will see this service!")
    }

    getSample() {
        return this.sampleService.get()
    }

    toggle() {
        this.show = !this.show;
    }
}
