import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit, OnChanges {
  @Input()
  message: string = "";

  @Input()
  modalView: boolean = false;

  @Output() closeinLogin: EventEmitter<string> = new EventEmitter();

  showModal = "modal noDisplay";

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.modalView
      ? (this.showModal = "modal yesDisplay")
      : (this.showModal = "modal noDisplay");
  }

  closeModal = (value: string) => {
    value === "yes"
      ? this.closeinLogin.emit("createUser")
      : this.closeinLogin.emit("cancel");
    this.modalView ? (this.showModal = "modal noDisplay") : false;
  };
}
