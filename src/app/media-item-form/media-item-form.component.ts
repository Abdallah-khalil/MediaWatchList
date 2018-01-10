import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MediaItemService } from "../media-item-list/media-item.service";
import { lookupListToken } from "../media-item-list/providers";
import { Router } from "@angular/router";

@Component({
  selector: "mw-media-item-form",
  templateUrl: "./media-item-form.component.html",
  styleUrls: ["./media-item-form.component.css"]
})
export class MediaItemFormComponent implements OnInit {
  form: any;
  constructor(
    @Inject(lookupListToken) public lookupLists,
    private mediaItemSvc: MediaItemService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit(mediaItem: any): void {
    this.mediaItemSvc.add(mediaItem);
    this.router.navigate(["/", mediaItem.meduim]);
  }

  yearValidator(control: any): any {
    if (control.value.trim().length === 0) {
      return null;
    }

    const year = +control.value;
    if (year >= 1900 && year <= 2100) {
      return null;
    } else {
      return {
        year: {
          min: 1900,
          max: 2100
        }
      };
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      meduim: this.formBuilder.control("", [Validators.required]),
      name: this.formBuilder.control(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[\\w\\-\\s\\/]+")
        ])
      ),
      year: this.formBuilder.control(
        "",
        Validators.compose([Validators.required, this.yearValidator])
      ),
      category: this.formBuilder.control("", [Validators.required])
    });
  }
}
